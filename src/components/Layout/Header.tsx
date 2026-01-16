const Header = () => {
  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl shadow-lg">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-white tracking-wide">
            RZ Transportes
          </h1>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-white/80 hover:text-white transition-colors hover:scale-105">
              Servicios
            </a>
            <a href="#about" className="text-white/80 hover:text-white transition-colors hover:scale-105">
              ¿Por qué elegirnos?
            </a>
            <a href="#fleet" className="text-white/80 hover:text-white transition-colors hover:scale-105">
              Flota & Technologia
            </a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors hover:scale-105">
              Cobertura
            </a>
          </nav>
          <button className="bg-red-500/40 hover:bg-red-500/20 text-white px-4 py-2 rounded-xl border border-white/20 transition-all hover:scale-105 hover:shadow-lg hover:cursor-pointer">
            Contactanos
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header