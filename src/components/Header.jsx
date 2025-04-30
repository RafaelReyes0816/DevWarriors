import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Link } from "react-router-dom";

export default function Header() { 
  return (
    <Navbar fluid rounded className="bg-gray-50 dark:bg-gray-800">
      <NavbarBrand as={Link} to="/">
        <img src="/image/logo/logo3.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink as={Link} to="/" active>
          Inicio
        </NavbarLink>
        <NavbarLink as={Link} to="/about">
          Sobre Nosotros
        </NavbarLink>
        <NavbarLink as={Link} to="/services">
          Servicio
        </NavbarLink>
        <NavbarLink as={Link} to="/contact">
          Contacto
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}