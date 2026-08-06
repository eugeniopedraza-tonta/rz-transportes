import { useEffect, useRef } from "react";
import { motion, animate, useInView, useMotionValue, useTransform, useReducedMotion } from "motion/react";

interface CountUpProps {
    target: number;
    decimals?: number;
    prefix?: string;
    suffix?: string;
    duration?: number;
}

const CountUp = ({ target, decimals = 0, prefix = "", suffix = "", duration = 1.8 }: CountUpProps) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    const shouldReduceMotion = useReducedMotion();
    const count = useMotionValue(0);
    const formatted = useTransform(count, (value) =>
        prefix +
        value.toLocaleString("es-MX", {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
        }) +
        suffix
    );

    useEffect(() => {
        if (!isInView) return;

        if (shouldReduceMotion) {
            count.set(target);
            return;
        }

        const controls = animate(count, target, {
            duration,
            ease: [0.16, 1, 0.3, 1],
        });
        return controls.stop;
    }, [isInView, target, duration, shouldReduceMotion, count]);

    return <motion.span ref={ref}>{formatted}</motion.span>;
};

export default CountUp;
