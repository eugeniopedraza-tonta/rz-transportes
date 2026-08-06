import { BadgeCheckIcon, ZapIcon, TrophyIcon, HeadsetIcon } from "lucide-react";
import GradientText from "../GradientText";

const features = [
    {
        icon: BadgeCheckIcon,
        title: "Profesionalidad",
        description:
            "Operadores y coordinadores certificados, formados en estándares de seguridad y atención al detalle para garantizar un manejo impecable de cada envío.",
    },
    {
        icon: ZapIcon,
        title: "Rapidez",
        description:
            "Rutas planificadas con software especializado y monitoreo GPS en tiempo real, que permiten cumplir con los plazos acordados incluso ante cambios de última hora.",
    },
    {
        icon: TrophyIcon,
        title: "Excelencia",
        description:
            "Proceso de mejora continua respaldado por auditorías internas y métricas de desempeño, asegurando calidad superior en cada etapa del servicio.",
    },
    {
        icon: HeadsetIcon,
        title: "Atención personalizada",
        description:
            "Comunicación directa y dedicada con un ejecutivo asignado, para resolver dudas, ajustar requerimientos y dar seguimiento puntual a cada operación.",
    },
];

const WhyChooseUs = () => {
    return (
        <div className="container mx-auto md:px-0">
            <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
                    ¿Por qué{" "}
                    <GradientText colors={["#ef4444", "#ffffff", "#f97316", "#ffffff", "#ef4444"]} animationSpeed={4} direction="horizontal" pauseOnHover={true} yoyo={true}>
                        elegirnos
                    </GradientText>
                    ?
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y divide-white/10 sm:divide-y-0 sm:divide-x sm:divide-white/10">
                {features.map(({ icon: Icon, title, description }, index) => (
                    <div
                        key={title}
                        className="relative py-8 sm:py-0 sm:px-6 lg:px-8 first:pt-0 sm:first:pl-0 last:pb-0 group"
                    >
                        <span className="block text-6xl md:text-7xl font-black text-white/20 leading-none select-none tabular-nums group-hover:text-red-500/40 transition-colors duration-300">
                            0{index + 1}
                        </span>
                        <Icon className="w-6 h-6 text-red-400 -mt-8 md:-mt-9 mb-4" />
                        <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
                        <p className="text-white/60 text-sm leading-relaxed">{description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyChooseUs;
