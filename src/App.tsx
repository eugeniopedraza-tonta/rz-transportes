import "./App.css";
import Beams from "./components/Beams";
import Header from "./components/Layout/Header";
import FlowingMenu from "./components/FlowingMenu";

function App() {
  return (
    <>
      {/* Beams background - fixed fullscreen */}
      <div className="fixed inset-0 -z-10">
        <Beams
          beamWidth={3}
          beamHeight={20}
          beamNumber={15}
          lightColor="#ff2600"
          speed={1.2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={15}
        />
      </div>

      {/* Your content goes here */}
      <main className="relative z-10 min-h-screen">
        <Header />
        <div className="mt-20">
          <FlowingMenu />       
          <p className="text-white text-2xl font-bold">
            test</p>     
        </div>
      </main>
    </>
  );
}

export default App;
