"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Environment, useGLTF, Center } from "@react-three/drei"
import { Suspense, useMemo, useRef, useState } from "react"
import * as THREE from "three"

type Phase = 0 | 1 | 2 // 0 = drive-in, 1 = close-up, 2 = idle

function easeOutCubic(t: number) { return 1 - Math.pow(1 - t, 3) }
function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

function UseHFovDeg(fovDeg: number, aspect: number) {
  // hfov = 2 * atan( tan(vfov/2) * aspect )
  return (2 * Math.atan(Math.tan((fovDeg * Math.PI) / 360) * aspect) * 180) / Math.PI
}

function TruckModel({
  fillRatio = 0.4, // target: model fills ~50% of screen width in phase 2
  driveSeconds = 2.6,
  closeSeconds = 1.8,
  
}) {
  const { scene } = useGLTF("/truck.glb")
  const groupRef = useRef<THREE.Group>(null)
  const cam = useThree((s) => s.camera as THREE.PerspectiveCamera)
  const { clock, size } = useThree()
  const [phase, setPhase] = useState<Phase>(0)
  const phaseStart = useRef(0)

  // Compute model bounds once
  const bounds = useMemo(() => {
    const box = new THREE.Box3().setFromObject(scene)
    const size = new THREE.Vector3()
    box.getSize(size)
    const center = new THREE.Vector3()
    box.getCenter(center)
    const sphere = new THREE.Sphere()
    box.getBoundingSphere(sphere)
    return { box, size, center, sphere }
  }, [scene])

  // Initial transforms (normalized by radius so it works for any model scale)
  const init = useMemo(() => {
    const r = Math.max(bounds.sphere.radius, 1)
    return {
      // Phase 0 start: offscreen right, slightly below horizon, a bit back
      startPos: new THREE.Vector3(2.5 * r, -0.4 * r, -2.0 * r),
      endPos: new THREE.Vector3(0.4 * r, -1.15 * r, -1.8 * r), // in-view cruise end
      // Orientation
      startRotY: Math.PI * 0.05, // slight yaw
      endRotY: 0, // face more forward
      // Base scale that looks good
      baseScale: (1.0 * r) / bounds.sphere.radius, // normalize
    }
  }, [bounds])

  // Compute target camera distance so model fills ~fillRatio of viewport width
  function computeCloseUpDistance() {
    const hfov = UseHFovDeg(cam.fov, size.width / size.height) * (Math.PI / 180)
    const modelWidth = bounds.size.x // rough: width across X
    // viewport width in world units at distance d is: 2*d*tan(hfov/2)
    // we want: modelWidth ≈ fillRatio * viewportWidth  => modelWidth ≈ fillRatio * (2*d*tan(hfov/2))
    // => d ≈ modelWidth / (2 * fillRatio * tan(hfov/2))
    const d = modelWidth / (2 * Math.max(0.2, Math.min(fillRatio, 0.95)) * Math.tan(hfov / 2))
    return d
  }

  // Camera anchor targets for each phase
  const targets = useMemo(() => {
    const r = Math.max(bounds.sphere.radius, 1)
    const look = new THREE.Vector3(0, -0.25 * r, 0) // look point near grill/hood
    const dClose = computeCloseUpDistance()
    return {
      // Phase 0–1 camera starts further back
      camStart: new THREE.Vector3(2.6 * r, 1.2 * r, 3.0 * r),
      camMid: new THREE.Vector3(1.6 * r, 0.9 * r, 2.4 * r),
      // Phase 2 camera distance computed to fill ~50% width, from slight front-left
      camClose: new THREE.Vector3(0.9 * dClose, 0.55 * dClose, 1.1 * dClose),
      look,
    }
  }, [bounds, size.width, size.height])

  // Initialize phase start time on first frame
  useFrame(() => {
    if (phaseStart.current === 0) phaseStart.current = clock.getElapsedTime()
  })

  useFrame(() => {
    const t = clock.getElapsedTime() - phaseStart.current
    const group = groupRef.current
    if (!group) return

    if (phase === 0) {
      // Drive-in
      const p = Math.min(t / driveSeconds, 1)
      const e = easeOutCubic(p)

      // Position & slight bob
      group.position.lerpVectors(init.startPos, init.endPos, e)
      group.position.y += Math.sin(clock.elapsedTime * 2.2) * (0.01 * bounds.sphere.radius)

      // Rotation (settle to forward)
      const rotY = THREE.MathUtils.lerp(init.startRotY, init.endRotY, e)
      group.rotation.set(-0.05, rotY, 0.03)

      // Scale base
      group.scale.setScalar(init.baseScale)

      // Camera glide
      const camPos = new THREE.Vector3().lerpVectors(targets.camStart, targets.camMid, e)
      cam.position.copy(camPos)
      cam.lookAt(targets.look)

      if (p >= 1) {
        setPhase(1)
        phaseStart.current = clock.getElapsedTime()
      }
    } else if (phase === 1) {
      // Close-up dolly (fill ~50% width)
      const p = Math.min(t / closeSeconds, 1)
      const e = easeInOutCubic(p)

      // Nudge the truck a touch toward screen
      const from = init.endPos
      const to = new THREE.Vector3(init.endPos.x * 0.7, init.endPos.y, init.endPos.z * 0.6)
      group.position.lerpVectors(from, to, e)

      // Gentle, cinematic settle
      group.rotation.y = THREE.MathUtils.lerp(0, -0.12, e)
      group.position.y += Math.sin(clock.elapsedTime * 1.5) * (0.005 * bounds.sphere.radius)

      // Camera dolly-in & look-at
      const camPos = new THREE.Vector3().lerpVectors(targets.camMid, targets.camClose, e)
      cam.position.copy(camPos)
      cam.lookAt(targets.look)

      if (p >= 1) {
        setPhase(2)
        phaseStart.current = clock.getElapsedTime()
      }
    } else {
      // Idle: ultra subtle breathing so it feels alive
      const s = 0.003 * bounds.sphere.radius
      group.position.y = init.endPos.y + Math.sin(clock.elapsedTime * 0.8) * s
      group.rotation.y = -0.12 + Math.sin(clock.elapsedTime * 0.25) * 0.003
      cam.lookAt(targets.look)
    }

    cam.updateProjectionMatrix()
  })

  return (
    // Center normalizes pivot so front-fill math is consistent across exports
    <Center ref={groupRef} disableZ>
      <primitive object={scene} scale={4}/>
    </Center>
  )
}

useGLTF.preload("/truck.glb")

export default function Truck() {
  return (
    <div className="w-full h-[50vh] min-h-[420px] bg-black rounded-3xl overflow-hidden">
    <div className="absolute flex flex-col focus-in-expand top-30 ml-40">
      <img src="/rz-logo.jpeg" alt="RZ Transportes" width={200} height={200} className="text-focus-in"/>
    </div>
      <Canvas camera={{ position: [10, 3, 12], fov: 55 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 6, 4]} intensity={1} />
        <Suspense fallback={null}>
          <TruckModel fillRatio={0.5} />
          <Environment preset="sunset" />
        </Suspense>
        {/* Keep controls off for hero; enable for debugging if needed */}
        {/* <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} /> */}
      </Canvas>
    </div>
  )
}