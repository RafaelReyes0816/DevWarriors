import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  // Función para detectar página activa (incluye rutas anidadas)
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

          {/* Navegación - Versión Minimalista */}
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

          {/* Menú móvil (opcional) */}
          <button className="md:hidden p-2 text-gray-700 dark:text-gray-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}