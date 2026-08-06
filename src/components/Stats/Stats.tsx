import { useState } from "react";
import { motion } from "motion/react";
import CountUp from "./CountUp";

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
};

const Stats = () => {
    const [heroInView, setHeroInView] = useState(false);
    const [secondaryInView, setSecondaryInView] = useState(false);

    const heroStats = [
        {
            value: <CountUp target={98.7} decimals={1} suffix="%" start={heroInView} />,
            label: "Entregas a tiempo",
            description: "Nuestro indicador de confiabilidad: la gran mayoría de los envíos llegan dentro del plazo acordado.",
        },
        {
            value: <CountUp target={1000} prefix="+" start={heroInView} />,
            label: "Servicios concretados",
            description: "Operaciones completadas con éxito para clientes de distintas industrias.",
        },
    ];

    const secondaryStats = [
        {
            value: "24/7",
            label: "Disponibilidad, 365 días al año",
            description: "Coordinación y monitoreo activos todos los días del año, sin excepción.",
        },
        {
            value: <CountUp target={240000} prefix="+" suffix=" km" start={secondaryInView} />,
            label: "Recorridos al año",
            description: "Capacidad operativa respaldada por una flota en movimiento constante.",
        },
        {
            value: <CountUp target={4.9} decimals={1} suffix="/5" start={secondaryInView} />,
            label: "Satisfacción del cliente",
            description: "Calificación promedio en más de 500 servicios realizados.",
        },
        {
            value: <CountUp target={6} start={secondaryInView} />,
            label: "Estados con cobertura activa",
            description: "Infraestructura y presencia operativa en el noreste y centro-norte del país.",
        },
    ];

    return (
        <div className="container mx-auto md:px-0">
            <motion.div
                className="max-w-2xl mb-10 md:mb-14"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                    Resultados que respaldan cada envío
                </h2>
                <p className="text-white/60 text-sm md:text-base">
                    Cifras que reflejan una operación consistente, medible y enfocada en la confiabilidad.
                </p>
            </motion.div>

            <div className="divide-y divide-white/10 border-y border-white/10">
                {/* Hero stats */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 divide-y divide-white/10 sm:divide-y-0 sm:divide-x sm:divide-white/10 py-8 md:py-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    onViewportEnter={() => setHeroInView(true)}
                >
                    {heroStats.map((stat) => (
                        <motion.div
                            key={stat.label}
                            variants={itemVariants}
                            className="py-8 sm:py-0 sm:px-8 md:px-10 first:pt-0 sm:first:pl-0 last:pb-0"
                        >
                            <p className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight tabular-nums">
                                {stat.value}
                            </p>
                            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.15em] text-red-400">
                                {stat.label}
                            </p>
                            <p className="mt-2 text-white/60 text-sm max-w-sm leading-relaxed">
                                {stat.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Secondary stats */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y divide-white/10 sm:divide-y-0 sm:divide-x sm:divide-white/10 py-6 md:py-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    onViewportEnter={() => setSecondaryInView(true)}
                >
                    {secondaryStats.map((stat) => (
                        <motion.div
                            key={stat.label}
                            variants={itemVariants}
                            className="py-6 sm:py-0 sm:px-6 lg:px-8 first:pt-0 sm:first:pl-0 last:pb-0"
                        >
                            <p className="text-3xl md:text-4xl font-black text-white leading-none tracking-tight tabular-nums">
                                {stat.value}
                            </p>
                            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.15em] text-red-400">
                                {stat.label}
                            </p>
                            <p className="mt-2 text-white/60 text-xs leading-relaxed">
                                {stat.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Stats;
