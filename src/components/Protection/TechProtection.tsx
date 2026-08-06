import { PackageCheckIcon, MapPinIcon, VideoIcon, PowerIcon, ShieldAlertIcon, ClockIcon } from "lucide-react";
import GradientText from "../GradientText";

const TechProtection = () => {
    return (
        <div className="container mx-auto md:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
                {/* Image */}
                <div className="relative h-[320px] sm:h-[420px] lg:h-auto rounded-2xl lg:rounded-3xl overflow-hidden border border-white/10">
                    <img
                        src="/tech-protection-truck.jpg"
                        alt="Tecnología y protección RZ Transportes"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Text Content */}
                <div className="flex flex-col justify-between gap-8 h-full">
                    <div className="text-white text-start space-y-4">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                            Tecnología y protección para tu{" "}
                            <GradientText colors={["#ef4444", "#ffffff", "#f97316", "#ffffff", "#ef4444"]} animationSpeed={4} direction="horizontal" pauseOnHover={true} yoyo={true}>
                                tranquilidad
                            </GradientText>
                        </h2>
                        <p className="text-base md:text-lg text-white/80 leading-relaxed">
                            En RZ Transportes vamos de la mano con servicios y aliados estratégicos cuyo respaldo garantiza soluciones de transporte seguras y eficientes.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 md:p-5 hover:bg-white/10 transition-all duration-300 group flex flex-col sm:flex-row gap-4">
                            <div className="flex items-center gap-3 sm:w-56 shrink-0">
                                <div className="p-2 rounded-lg bg-white group-hover:bg-gray-300 transition-colors shrink-0">
                                    <img src="/qualitas-logo.png" alt="Quálitas" className="w-5 h-5 object-contain" />
                                </div>
                                <p className="font-semibold text-white text-base">Quálitas</p>
                            </div>
                            <div>
                                <p className="text-sm text-white/70 mb-3">
                                    Respaldados por la aseguradora líder en el mercado mexicano:
                                </p>
                                <ul className="space-y-2 text-sm text-white/70">
                                    <li className="flex items-start gap-2">
                                        <PackageCheckIcon className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                                        <span><span className="text-white font-medium">Mercancía asegurada:</span> cobertura de mercancías en tránsito que ampara daños y pérdidas de la carga transportada.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-4 md:p-5 hover:bg-white/10 transition-all duration-300 group flex flex-col sm:flex-row gap-4">
                            <div className="flex items-center gap-3 sm:w-56 shrink-0">
                                <div className="p-2 rounded-lg bg-white group-hover:bg-gray-300 transition-colors shrink-0">
                                    <img src="/trucking-system.png" alt="Tracking Systems de México" className="w-5 h-5 object-contain" />
                                </div>
                                <p className="font-semibold text-white text-base">Tracking Systems de México</p>
                            </div>
                            <div>
                                <p className="text-sm text-white/70 mb-3">
                                    Solución telemática en la nube para gestión y seguridad de flotas:
                                </p>
                                <ul className="space-y-2 text-sm text-white/70">
                                    <li className="flex items-start gap-2">
                                        <MapPinIcon className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                                        <span><span className="text-white font-medium">Rastreo GPS en tiempo real:</span> visibilidad completa de ubicación, velocidad y estado de cada vehículo.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <VideoIcon className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                                        <span><span className="text-white font-medium">Video telemática con cámaras integradas:</span> captura y análisis de video para reforzar la seguridad, optimizar el entrenamiento de conductores y validar incidentes.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <PowerIcon className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                                        <span><span className="text-white font-medium">Paro de motor a control remoto:</span> capacidad de inmovilizar la unidad de manera remota ante cualquier eventualidad o riesgo.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ShieldAlertIcon className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                                        <span><span className="text-white font-medium">Botón de pánico:</span> alerta inmediata ante situaciones de emergencia en ruta.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ClockIcon className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                                        <span><span className="text-white font-medium">Monitoreo 24/7:</span> equipo especializado supervisando las unidades activamente a todas horas.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechProtection;
