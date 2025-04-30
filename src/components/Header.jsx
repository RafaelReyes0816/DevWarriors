import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Link } from "react-router-dom"; // Cambio aquí

export default function Header() { 
  return (
    <Navbar fluid rounded className="bg-gray-50 dark:bg-gray-800">
      <NavbarBrand as={Link} to="/"> {/* Cambio: "href" por "to" */}
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Prototipo
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink as={Link} to="/" active> {/* Cambio aquí */}
          Inicio
        </NavbarLink>
        <NavbarLink as={Link} to="/about"> {/* Cambio aquí */}
          Sobre Nosotros
        </NavbarLink>
        <NavbarLink as={Link} to="/services"> {/* Cambio aquí */}
          Servicio
        </NavbarLink>
        <NavbarLink as={Link} to="/contact">
          Contacto
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}