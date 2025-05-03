import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path || 
           (path !== '/' && location.pathname.startsWith(path));
  };

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <img 
              src="/image/logo/dv.png" 
              className="h-8 sm:h-10 md:h-12" 
              alt="DevWarriors Logo"
              loading="lazy"
            />
          </Link>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center space-x-1">
            <div className="flex space-x-6">
              <Link 
                to="/" 
                className={`px-3 py-2 transition-colors ${
                  isActive('/') 
                    ? 'text-blue-600 dark:text-blue-400 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                }`}
              >
                Inicio
              </Link>
              <Link 
                to="/about" 
                className={`px-3 py-2 transition-colors ${
                  isActive('/about') 
                    ? 'text-blue-600 dark:text-blue-400 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                }`}
              >
                Sobre Nosotros
              </Link>
              <Link 
                to="/services" 
                className={`px-3 py-2 transition-colors ${
                  isActive('/services') 
                    ? 'text-blue-600 dark:text-blue-400 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                }`}
              >
                Servicios
              </Link>
              <Link 
                to="/contact" 
                className={`px-3 py-2 transition-colors ${
                  isActive('/contact') 
                    ? 'text-blue-600 dark:text-blue-400 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                }`}
              >
                Contacto
              </Link>
            </div>
          </nav>

          {/* Botón Menú Mobile */}
          <button 
            className="md:hidden p-2 text-gray-700 dark:text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>

        {/* Menú Mobile (se muestra solo cuando isMenuOpen es true) */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                onClick={() => setIsMenuOpen(false)}
                className={`px-3 py-2 transition-colors ${
                  isActive('/') 
                    ? 'text-blue-600 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-gray-800 rounded-lg' 
                    : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg'
                }`}
              >
                Inicio
              </Link>
              <Link 
                to="/about" 
                onClick={() => setIsMenuOpen(false)}
                className={`px-3 py-2 transition-colors ${
                  isActive('/about') 
                    ? 'text-blue-600 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-gray-800 rounded-lg' 
                    : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg'
                }`}
              >
                Sobre Nosotros
              </Link>
              <Link 
                to="/services" 
                onClick={() => setIsMenuOpen(false)}
                className={`px-3 py-2 transition-colors ${
                  isActive('/services') 
                    ? 'text-blue-600 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-gray-800 rounded-lg' 
                    : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg'
                }`}
              >
                Servicios
              </Link>
              <Link 
                to="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className={`px-3 py-2 transition-colors ${
                  isActive('/contact') 
                    ? 'text-blue-600 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-gray-800 rounded-lg' 
                    : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg'
                }`}
              >
                Contacto
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}