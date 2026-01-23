import { useEffect, useRef } from 'react';
import './Carrousel.css';

const CarrouselModal = ({ images = null }) => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const dataRef = useRef({ mouseDownAt: 0, prevScroll: 0, scroll: 0 });

  const defaultImages = [
    { src: "/trailer-1.jpeg", alt: "Freightliner M2 Rabón", title: "Freightliner M2 Rabón", subtitle: "Caja seca de 26 pies • Hasta 10 toneladas" },
    { src: "/trailer-2.jpeg", alt: "Freightliner Cascadia", title: "Freightliner Cascadia", subtitle: "Caja seca de 53 pies • Hasta 30 toneladas" },
    { src: "/trailer-3.png", alt: "Recolección y Carga", title: "Recolección y Carga", subtitle: "Rampa hidráulica • Estiba controlada" },
    { src: "/trailer-4.png", alt: "Transporte Seguro", title: "Transporte Seguro", subtitle: "GPS en tiempo real • Rutas optimizadas" },
    { src: "/trailer-5.png", alt: "Descarga y Entrega", title: "Descarga y Entrega", subtitle: "Firma digital • Registro fotográfico" },
    { src: "/trailer-6.png", alt: "Cobertura Nacional", title: "Cobertura Nacional", subtitle: "5 estados • 18 municipios locales" },
    { src: "/trailer-1.jpeg", alt: "Freightliner M2 Rabón", title: "Freightliner M2 Rabón", subtitle: "Caja seca de 26 pies • Hasta 10 toneladas" },
    { src: "/trailer-2.jpeg", alt: "Freightliner Cascadia", title: "Freightliner Cascadia", subtitle: "Caja seca de 53 pies • Hasta 30 toneladas" },
    { src: "/trailer-3.png", alt: "Recolección y Carga", title: "Recolección y Carga", subtitle: "Rampa hidráulica • Estiba controlada" },
    { src: "/trailer-4.png", alt: "Transporte Seguro", title: "Transporte Seguro", subtitle: "GPS en tiempo real • Rutas optimizadas" },
    { src: "/trailer-5.png", alt: "Descarga y Entrega", title: "Descarga y Entrega", subtitle: "Firma digital • Registro fotográfico" },
    { src: "/trailer-6.png", alt: "Cobertura Nacional", title: "Cobertura Nacional", subtitle: "5 estados • 18 municipios locales" },
  ];

  const displayImages = images || defaultImages;

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!track || !container) return;

    const getMaxScroll = () => {
      const trackWidth = track.scrollWidth;
      const containerWidth = container.offsetWidth;
      return trackWidth - containerWidth;
    };

    const handleOnDown = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      dataRef.current.mouseDownAt = clientX;
    };

    const handleOnUp = () => {
      dataRef.current.mouseDownAt = 0;
      dataRef.current.prevScroll = dataRef.current.scroll;
    };

    const handleOnMove = (e) => {
      if (dataRef.current.mouseDownAt === 0) return;

      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const delta = dataRef.current.mouseDownAt - clientX;
      const maxScroll = getMaxScroll();

      const nextScroll = Math.max(0, Math.min(dataRef.current.prevScroll + delta, maxScroll));
      dataRef.current.scroll = nextScroll;

      // Calculate percentage for object-position effect
      const percentage = (nextScroll / maxScroll) * 100;

      track.animate(
        { transform: `translateX(${-nextScroll}px) translateY(-50%)` },
        { duration: 1200, fill: 'forwards' }
      );

      for (const image of track.getElementsByClassName('carrousel-image')) {
        image.animate(
          { objectPosition: `${percentage}% center` },
          { duration: 1200, fill: 'forwards' }
        );
      }
    };

    // Scoped events on container
    container.addEventListener('mousedown', handleOnDown);
    container.addEventListener('touchstart', handleOnDown);

    // These need to be on window to catch mouse up/move outside container
    window.addEventListener('mouseup', handleOnUp);
    window.addEventListener('mousemove', handleOnMove);
    window.addEventListener('touchend', handleOnUp);
    window.addEventListener('touchmove', handleOnMove);

    return () => {
      container.removeEventListener('mousedown', handleOnDown);
      container.removeEventListener('touchstart', handleOnDown);
      window.removeEventListener('mouseup', handleOnUp);
      window.removeEventListener('mousemove', handleOnMove);
      window.removeEventListener('touchend', handleOnUp);
      window.removeEventListener('touchmove', handleOnMove);
    };
  }, []);

  return (
    <div className="carrousel-container" ref={containerRef}>
      <div className="carrousel-track" ref={trackRef}>
        {displayImages.map((img, index) => (
          <div key={index} className="carrousel-card">
            <img
              className="carrousel-image"
              src={img.src}
              alt={img.alt}
              draggable="false"
            />
            <div className="carrousel-card-overlay">
              <h3 className="carrousel-card-title">{img.title}</h3>
              <p className="carrousel-card-subtitle">{img.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarrouselModal;
