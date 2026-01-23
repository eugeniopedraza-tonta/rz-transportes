
import CardNav from "@/components/CardNav";

import logo from "/logo.png";

const Header = () => {

  const navLinks = [
    { label: "Servicios", href: "#services" },
    { label: "Cobertura", href: "#coverage" },
    { label: "Flota", href: "#fleet" },
    { label: "Nosotros", href: "#about" },
    { label: "Contacto", href: "#contact" },
  ];

  return (
    <header className="fixed top-3 md:top-4 left-3 md:left-6 right-3 md:right-6 z-50">
      <CardNav
        logo={logo}
        logoAlt="RZ Transportes"
        items={navLinks}
        ease="power3.out"
      />
    </header>
  );
};

export default Header;
