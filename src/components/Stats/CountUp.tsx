import { useEffect } from "react";
import { motion, animate, useMotionValue, useTransform, useReducedMotion } from "motion/react";

interface CountUpProps {
    target: number;
    start: boolean;
    decimals?: number;
    prefix?: string;
    suffix?: string;
    duration?: number;
}

const CountUp = ({ target, start, decimals = 0, prefix = "", suffix = "", duration = 1.8 }: CountUpProps) => {
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
        if (!start) return;

        if (shouldReduceMotion) {
            count.set(target);
            return;
        }

        const controls = animate(count, target, {
            duration,
            ease: [0.16, 1, 0.3, 1],
        });
        return () => controls.stop();
    }, [start, target, duration, shouldReduceMotion, count]);

    return <motion.span>{formatted}</motion.span>;
};

export default CountUp;
