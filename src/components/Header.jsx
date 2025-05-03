import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, Button } from "flowbite-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar 
      fluid 
      rounded 
      className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50"
    >
      <div className="container mx-auto px-4">
        <NavbarBrand as={Link} to="/" className="flex items-center">
          <img 
            src="/image/logo/dv.png" 
            className="mr-3 h-8 sm:h-10 md:h-12" 
            alt="DevWarriors Logo"
            loading="lazy"
          />
          <span className="self-center text-xl font-bold whitespace-nowrap text-gray-900 dark:text-white">
                
          </span>
        </NavbarBrand>

        <div className="flex items-center gap-4">
          <NavbarToggle 
            aria-label="Toggle menu"
            className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          />
          
          <NavbarCollapse className="mt-2 md:mt-0">
            <NavbarLink 
              as={Link} 
              to="/" 
              active
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 px-3 py-2 rounded-lg transition-colors"
            >
              Inicio
            </NavbarLink>
            <NavbarLink 
              as={Link} 
              to="/about"
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 px-3 py-2 rounded-lg transition-colors"
            >
              Sobre Nosotros
            </NavbarLink>
            <NavbarLink 
              as={Link} 
              to="/services"
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 px-3 py-2 rounded-lg transition-colors"
            >
              Servicios
            </NavbarLink>
            <NavbarLink 
              as={Link} 
              to="/contact"
              className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 px-3 py-2 rounded-lg transition-colors"
            >
              Contacto
            </NavbarLink>
          </NavbarCollapse>
        </div>
      </div>
    </Navbar>
  );
}