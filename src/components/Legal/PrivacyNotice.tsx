import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";

const PrivacyNotice = ({ trigger }: { trigger: React.ReactNode }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl bg-neutral-950 border-white/10 text-white">
                <DialogHeader>
                    <DialogTitle className="text-xl md:text-2xl text-white">Aviso de Privacidad</DialogTitle>
                    <DialogDescription className="text-white/60">
                        Última actualización: 5 de agosto de 2026
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-5 text-sm text-white/80 leading-relaxed">
                    <p>
                        En cumplimiento con lo dispuesto por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares
                        (LFPDPPP), su Reglamento y los Lineamientos del Aviso de Privacidad emitidos por el INAI, <strong className="text-white">RZ Transportes</strong> (en
                        adelante "RZ Transportes", "nosotros"), con domicilio en Monterrey, Nuevo León, México, es responsable del
                        tratamiento de sus datos personales conforme al presente Aviso de Privacidad.
                    </p>

                    <section className="space-y-2">
                        <h3 className="text-white font-semibold text-base">1. Datos personales que recabamos</h3>
                        <p>
                            Para las finalidades señaladas en este aviso, podemos recabar los siguientes datos personales cuando usted
                            los proporciona voluntariamente a través de nuestro sitio web, formularios de contacto, correo electrónico,
                            teléfono o WhatsApp:
                        </p>
                        <ul className="list-disc list-inside space-y-1 pl-2">
                            <li>Nombre completo</li>
                            <li>Nombre de la empresa que representa</li>
                            <li>Correo electrónico</li>
                            <li>Número telefónico</li>
                            <li>Contenido de sus mensajes y solicitudes de cotización</li>
                        </ul>
                        <p>No recabamos datos personales sensibles.</p>
                    </section>

                    <section className="space-y-2">
                        <h3 className="text-white font-semibold text-base">2. Finalidades del tratamiento</h3>
                        <p>Sus datos personales serán utilizados para las siguientes finalidades primarias, necesarias para el servicio solicitado:</p>
                        <ul className="list-disc list-inside space-y-1 pl-2">
                            <li>Atender y dar seguimiento a sus solicitudes de cotización e información</li>
                            <li>Contactarlo para coordinar y prestar nuestros servicios de transporte y logística</li>
                            <li>Elaborar contratos, órdenes de servicio y comprobantes fiscales</li>
                            <li>Dar cumplimiento a obligaciones legales, fiscales y regulatorias aplicables</li>
                        </ul>
                        <p>De manera adicional, y de forma secundaria, sus datos podrán utilizarse para:</p>
                        <ul className="list-disc list-inside space-y-1 pl-2">
                            <li>Enviarle información sobre promociones, nuevos servicios o comunicados de RZ Transportes</li>
                        </ul>
                        <p>
                            Si usted no desea que sus datos sean tratados para estas finalidades secundarias, puede manifestarlo a través de
                            los medios de contacto señalados en la sección 5, sin que ello afecte la prestación del servicio primario solicitado.
                        </p>
                    </section>

                    <section className="space-y-2">
                        <h3 className="text-white font-semibold text-base">3. Transferencia de datos personales</h3>
                        <p>
                            RZ Transportes no transfiere sus datos personales a terceros ajenos a la operación del servicio, salvo aquellas
                            transferencias necesarias para la correcta prestación del servicio contratado (por ejemplo, a aseguradoras para la
                            cobertura de la carga transportada) o cuando exista un requerimiento por parte de autoridad competente conforme a la
                            legislación aplicable. En dichos casos, no se requiere su consentimiento conforme al artículo 37 de la LFPDPPP.
                        </p>
                    </section>

                    <section className="space-y-2">
                        <h3 className="text-white font-semibold text-base">4. Derechos ARCO</h3>
                        <p>
                            Usted tiene derecho a Acceder a sus datos personales, así como a solicitar su Rectificación en caso de ser
                            inexactos, Cancelarlos cuando considere que no se requieren para alguna de las finalidades señaladas, u Oponerse
                            al tratamiento de los mismos para fines específicos ("Derechos ARCO"). Asimismo, puede revocar el consentimiento
                            que, en su caso, nos haya otorgado para el tratamiento de sus datos.
                        </p>
                        <p>
                            Para ejercer cualquiera de estos derechos, envíe una solicitud a{" "}
                            <a href="mailto:contacto@rztransportes.com" className="text-red-400 hover:text-red-300 underline">
                                contacto@rztransportes.com
                            </a>{" "}
                            indicando: (i) su nombre y datos de contacto, (ii) los documentos que acrediten su identidad, (iii) una descripción
                            clara de los datos y el derecho que desea ejercer. Le daremos respuesta en un plazo máximo de 20 días hábiles,
                            conforme a lo establecido en la LFPDPPP.
                        </p>
                    </section>

                    <section className="space-y-2">
                        <h3 className="text-white font-semibold text-base">5. Medios para limitar el uso o divulgación de sus datos</h3>
                        <p>
                            Puede solicitar en cualquier momento no recibir comunicaciones de mercadotecnia o publicidad, enviando su
                            solicitud al correo{" "}
                            <a href="mailto:contacto@rztransportes.com" className="text-red-400 hover:text-red-300 underline">
                                contacto@rztransportes.com
                            </a>{" "}
                            o al teléfono{" "}
                            <a href="tel:+528132631320" className="text-red-400 hover:text-red-300 underline">
                                +52 81 3263 1320
                            </a>.
                        </p>
                    </section>

                    <section className="space-y-2">
                        <h3 className="text-white font-semibold text-base">6. Uso de cookies y tecnologías de rastreo</h3>
                        <p>
                            Nuestro sitio web puede utilizar cookies y tecnologías similares (por ejemplo, para mapas interactivos y análisis
                            de tráfico) con el fin de mejorar su experiencia de navegación. Usted puede deshabilitar el uso de cookies desde
                            la configuración de su navegador; sin embargo, algunas funciones del sitio podrían verse limitadas.
                        </p>
                    </section>

                    <section className="space-y-2">
                        <h3 className="text-white font-semibold text-base">7. Cambios al aviso de privacidad</h3>
                        <p>
                            RZ Transportes se reserva el derecho de efectuar, en cualquier momento, modificaciones o actualizaciones al
                            presente Aviso de Privacidad, derivadas de cambios en la legislación, en nuestras políticas internas o en nuestros
                            servicios. Cualquier cambio será publicado en esta misma sección de nuestro sitio web, indicando la fecha de la
                            última actualización.
                        </p>
                    </section>

                    <section className="space-y-2">
                        <h3 className="text-white font-semibold text-base">8. Contacto</h3>
                        <p>
                            Si tiene dudas respecto al tratamiento de sus datos personales o sobre el presente aviso, puede contactarnos en{" "}
                            <a href="mailto:contacto@rztransportes.com" className="text-red-400 hover:text-red-300 underline">
                                contacto@rztransportes.com
                            </a>{" "}
                            o al{" "}
                            <a href="tel:+528132631320" className="text-red-400 hover:text-red-300 underline">
                                +52 81 3263 1320
                            </a>.
                        </p>
                    </section>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default PrivacyNotice;
