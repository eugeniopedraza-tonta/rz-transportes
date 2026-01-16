import StarBorder from "../StarBorder";

import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl shadow-lg">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={logo} alt="RZ Transportes" className="w-25 h-15 " />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#services"
              className="text-white/80 hover:text-white transition-colors hover:scale-105"
            >
              Servicios
            </a>
            <a
              href="#about"
              className="text-white/80 hover:text-white transition-colors hover:scale-105"
            >
              ¿Por qué elegirnos?
            </a>
            <a
              href="#fleet"
              className="text-white/80 hover:text-white transition-colors hover:scale-105"
            >
              Flota & Technologia
            </a>
            <a
              href="#contact"
              className="text-white/80 hover:text-white transition-colors hover:scale-105"
            >
              Cobertura
            </a>
            <a
              href="#contact"
              className="text-white/80 hover:text-white transition-colors hover:scale-105"
            >
              Provedores
            </a>
          </nav>

          <StarBorder
            as="button"
            className="hover:scale-105 hover:shadow-lg hover:cursor-pointer"
            color="#fff"
            speed="10s"
          >
            <button className="hover:cursor-pointer">
              Contactanos
            </button>
          </StarBorder>
        </div>
      </div>
    </header>
  );
};

export default Header;
