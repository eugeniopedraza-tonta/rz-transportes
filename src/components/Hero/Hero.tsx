import { ClockIcon, ShieldCheckIcon, MapPinIcon } from "lucide-react";
import GradientText from "../GradientText";

const Hero = () => {
    return (
        <div className="container mx-auto md:px-0">
            <div className="flex flex-col gap-8">
                {/* Text Content */}
                <div className="w-full lg:w-2/3 text-white text-start space-y-4 md:space-y-6">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight flex items-center gap-2">
                        <span>
                        Somos <GradientText colors={["#ef4444", "#ffffff", "#f97316", "#ffffff", "#ef4444"]} animationSpeed={4} direction="horizontal" pauseOnHover={true} yoyo={true}>RZ Transportes</GradientText></span>
                    </h1>
                    <div className="text-base md:text-lg text-white/90 leading-relaxed">
                        RZ Transportes fue fundada en{" "}
                        <GradientText colors={["#ef4444", "#ffffff", "#f97316", "#ffffff", "#ef4444"]} animationSpeed={4} direction="horizontal" pauseOnHover={true} yoyo={true}>Monterrey, Nuevo León</GradientText>
                        , con la visión de ofrecer servicios de transporte y distribución
                        totalmente personalizados.
                    </div>
                    <p className="text-sm md:text-base text-white/80 leading-relaxed">
                        Contamos con experiencia en la gestión de cargas convencionales,
                        especiales y de proyecto, adaptándonos a las necesidades
                        específicas de cada cliente y sector.
                    </p>
                </div>

                {/* Key Guarantees - from PDF */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 md:p-5 hover:bg-white/10 transition-all duration-300 group hover:scale-105">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 rounded-lg bg-red-500/20 text-red-400 group-hover:bg-red-500/30 transition-colors">
                                <ClockIcon className="w-5 h-5" />
                            </div>
                            <p className="font-semibold text-white text-base">Puntualidad</p>
                        </div>
                        <p className="text-sm text-white/70">
                            Cumplimiento riguroso de los tiempos acordados.
                        </p>
                    </div>
                    <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 md:p-5 hover:bg-white/10 transition-all duration-300 group hover:scale-105">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 rounded-lg bg-red-500/20 text-red-400 group-hover:bg-red-500/30 transition-colors">
                                <ShieldCheckIcon className="w-5 h-5" />
                            </div>
                            <p className="font-semibold text-white text-base">Seguridad</p>
                        </div>
                        <p className="text-sm text-white/70">
                            Manejo cuidadoso de la mercancía y pólizas de cobertura integrales.
                        </p>
                    </div>
                    <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 md:p-5 hover:bg-white/10 transition-all duration-300 group hover:scale-105">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 rounded-lg bg-red-500/20 text-red-400 group-hover:bg-red-500/30 transition-colors">
                                <MapPinIcon className="w-5 h-5" />
                            </div>
                            <p className="font-semibold text-white text-base">Visibilidad</p>
                        </div>
                        <p className="text-sm text-white/70">
                            Seguimiento en tiempo real desde la recepción hasta la entrega.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
