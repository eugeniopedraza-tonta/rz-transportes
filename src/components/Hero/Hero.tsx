import { ClockIcon, ShieldCheckIcon, MapPinIcon } from "lucide-react";
import GradientText from "../GradientText";

const Hero = () => {
    return (
        <div className="container mx-auto md:px-0 min-h-[85vh] lg:min-h-[90vh] flex items-center py-12 lg:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch w-full">
                {/* Text Content */}
                <div className="flex flex-col justify-between gap-8 h-full">
                    <div className="text-white text-start space-y-4 md:space-y-6">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight flex items-center gap-2">
                            <span>
                                Somos <GradientText colors={["#ef4444", "#ffffff", "#f97316", "#ffffff", "#ef4444"]} animationSpeed={4} direction="horizontal" pauseOnHover={true} yoyo={true}>RZ Transportes</GradientText></span>
                        </h1>
                        <div className="text-base md:text-lg text-white/90 leading-relaxed">
                            Fundada en el núcleo industrial de{" "}
                            <GradientText colors={["#ef4444", "#ffffff", "#f97316", "#ffffff", "#ef4444"]} animationSpeed={4} direction="horizontal" pauseOnHover={true} yoyo={true}>Monterrey, Nuevo León</GradientText>
                            , impulsamos el crecimiento de nuestros clientes a través de un servicio de transporte y distribución altamente personalizado y eficiente.
                        </div>
                        <p className="text-sm md:text-base text-white/80 leading-relaxed">
                            Nuestra sólida trayectoria en el manejo de cargas convencionales, especiales y de proyecto nos permite responder con flexibilidad, rigor operativo y excelencia ante los desafios clave de cada industria y cliente.
                        </p>
                    </div>

                    {/* Key Guarantees - from PDF */}
                    <div className="flex flex-col gap-4">
                        {/* Misión & Visión */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 divide-y divide-white/10 sm:divide-y-0 sm:divide-x lg:divide-x-0 lg:divide-y xl:divide-y-0 xl:divide-x border-y border-white/10">
                            <div className="py-4 sm:py-5 sm:pr-6 lg:pr-0 lg:py-4 xl:py-5 xl:pr-6">
                                <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-red-400 pb-2 mb-2 border-b border-red-500/30 inline-block">
                                    Misión
                                </p>
                                <p className="text-sm text-white/70 leading-relaxed">
                                    Simplificar la logística de nuestros clientes mediante un transporte seguro, adaptado a sus necesidades específicas.
                                </p>
                            </div>
                            <div className="py-4 sm:py-5 sm:pl-6 lg:pl-0 lg:py-4 xl:py-5 xl:pl-6">
                                <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-red-400 pb-2 mb-2 border-b border-red-500/30 inline-block">
                                    Visión
                                </p>
                                <p className="text-sm text-white/70 leading-relaxed">
                                    Consolidarnos como la primera opción de transporte en la región, construyendo relaciones a largo plazo a través de un servicio flexible, eficiente y de alto estándar operativo.
                                </p>
                            </div>
                        </div>

                        {/* Puntualidad, Seguridad, Visibilidad */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-4">
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
                                    Operadores capacitados para un manejo cuidadoso de la mercancía.
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
                                    Monitorio 24/7 con seguimiento en tiempo real.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="relative h-[320px] sm:h-[420px] lg:h-full lg:min-h-[70vh] rounded-2xl lg:rounded-3xl overflow-hidden border border-white/10">
                    <img
                        src="/hero-image.jpg"
                        alt="RZ Transportes"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
