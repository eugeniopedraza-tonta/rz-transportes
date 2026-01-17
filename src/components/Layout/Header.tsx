import { useState } from "react";
import { Menu, X } from "lucide-react";
import StarBorder from "../StarBorder";

import logo from "/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Servicios", href: "#services" },
    { label: "¿Por qué elegirnos?", href: "#about" },
    { label: "Flota & Tecnología", href: "#fleet" },
    { label: "Cobertura", href: "#contact" },
    { label: "Proveedores", href: "#contact" },
  ];

  return (
    <header className="fixed top-2 md:top-4 left-2 md:left-4 right-2 md:right-4 z-50">
      <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl md:rounded-2xl shadow-lg">
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={logo} alt="RZ Transportes" className="w-20 md:w-25 h-auto" />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href + link.label}
                href={link.href}
                className="text-white/80 hover:text-red-500 transition-colors hover:scale-105"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Contact Button - Hidden on mobile */}
            <div className="hidden md:block">
              <StarBorder
                as="button"
                className="items-center gap-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25"
                color="#fff"
                speed="5s"
              >
                <button className="hover:cursor-pointer text-sm md:text-base">
                  Contáctanos
                </button>
              </StarBorder>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col px-4 pb-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href + link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-white/80 hover:text-red-500 transition-colors py-3 px-3 rounded-lg hover:bg-white/5 text-sm"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center py-3 px-4 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-semibold rounded-xl transition-all duration-300"
              >
                Contáctanos
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
