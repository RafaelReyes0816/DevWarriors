import {
    Footer as FlowbiteFooter, // Renombrado para evitar conflicto con el nombre del componente
    FooterBrand,
    FooterCopyright,
    FooterDivider,
    FooterIcon,
    FooterLink,
    FooterLinkGroup,
    FooterTitle,
  } from "flowbite-react";
  import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
  import { Link } from "react-router-dom"; // Cambio clave: usamos react-router-dom
  
  export default function Footer() {
    return (
      <FlowbiteFooter container className="bg-gray-50 dark:bg-gray-800 rounded-none">
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <FooterBrand
                as={Link} // Cambio: Usamos Link de react-router
                to="/" // Cambio: href por to
                src="/favicon.svg" // Ajusta la ruta de tu logo
                alt="Logo"
                name="Mi Web"
              />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <FooterTitle title="about" />
                <FooterLinkGroup col>
                  <FooterLink as={Link} to="/about">Sobre nosotros</FooterLink>
                  <FooterLink as={Link} to="/tech">Tecnologías</FooterLink>
                </FooterLinkGroup>
              </div>
              <div>
                <FooterTitle title="Síguenos" />
                <FooterLinkGroup col>
                  <FooterLink href="https://github.com/RafaelReyes0816" target="_blank">Github</FooterLink>
                  <FooterLink href="#" target="_blank">Discord</FooterLink>
                </FooterLinkGroup>
              </div>
              <div>
                <FooterTitle title="Legal" />
                <FooterLinkGroup col>
                  <FooterLink as={Link} to="/privacy">Política de privacidad</FooterLink>
                  <FooterLink as={Link} to="/terms">Términos y condiciones</FooterLink>
                </FooterLinkGroup>
              </div>
            </div>
          </div>
          <FooterDivider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <FooterCopyright href="#" by="Prototipo™" year={2025} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <FooterIcon href="#" icon={BsFacebook} />
              <FooterIcon href="#" icon={BsInstagram} />
              <FooterIcon href="#" icon={BsTwitter} />
              <FooterIcon href="#" icon={BsGithub} />
              <FooterIcon href="#" icon={BsDribbble} />
            </div>
          </div>
        </div>
      </FlowbiteFooter>
    );
  }