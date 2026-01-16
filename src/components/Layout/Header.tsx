import StarBorder from "../StarBorder";

import logo from "/logo.png";

const Header = () => {
  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl shadow-lg">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={logo} alt="RZ Transportes" className="w-25 h-15 " />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#services"
              className="text-white/80 hover:text-red-500 transition-colors hover:scale-105"
            >
              Servicios
            </a>
            <a
              href="#about"
              className="text-white/80 hover:text-red-500 transition-colors hover:scale-105"
            >
              ¿Por qué elegirnos?
            </a>
            <a
              href="#fleet"
              className="text-white/80 hover:text-red-500 transition-colors hover:scale-105"
            >
              Flota & Technologia
            </a>
            <a
              href="#contact"
              className="text-white/80 hover:text-red-500 transition-colors hover:scale-105"
            >
              Cobertura
            </a>
            <a
              href="#contact"
              className="text-white/80 hover:text-red-500 transition-colors hover:scale-105"
            >
              Proveedores
            </a>
          </nav>

          <StarBorder
            as="button"
            className="items-center gap-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25"
            color="#fff"
            speed="5s"
          >
            <button className="hover:cursor-pointer">
              Contáctanos
            </button>
          </StarBorder>
        </div>
      </div>
    </header>
  );
};

export default Header;
