import './Carrousel.css';

const defaultItems = [
  {
    src: "/caja-seca-53.jpg",
    alt: "Caja seca de 53 pies",
    title: "Caja Seca 53 Pies",
    subtitle: "Máxima capacidad de carga",
  },
  {
    src: "/caja-seca-26.jpg",
    alt: "Rabón Caja Seca 26 pies",
    title: "Rabón Caja Seca 26 Pies",
    subtitle: "Versátil y ágil",
  },
];

const CarrouselModal = ({ items = null }) => {
  const displayItems = items || defaultItems;

  return (
    <div className="infra-section">
      <div className="infra-heading">
        <h2 className="infra-title">Nuestra Infraestructura</h2>
        <p className="infra-subtitle">
          Contamos con equipo especializado para cubrir cada tipo de carga
        </p>
      </div>

      <div className="infra-grid">
        {displayItems.map((item, index) => (
          <div key={index} className="infra-card">
            <img
              className="infra-image"
              src={item.src}
              alt={item.alt}
              draggable="false"
            />
            <div className="infra-card-overlay">
              <h3 className="infra-card-title">{item.title}</h3>
              <p className="infra-card-subtitle">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarrouselModal;
