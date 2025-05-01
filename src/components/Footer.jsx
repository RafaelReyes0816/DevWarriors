import {
  Footer as FlowbiteFooter,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTiktok, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <FlowbiteFooter container className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 rounded-none">
      <div className="w-full px-4 py-8 mx-auto max-w-7xl">
        {/* Sección Principal */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
          {/* Logo y Nombre */}
          <div className="md:col-span-1 space-y-4">
            <FooterBrand
              as={Link}
              to="/"
              src="/image/logo/dv.png"
              alt="DevWarriors Logo"
              name="DevWarriors"
              className="h-12 sm:h-16"
              imgClassName="h-full"
            />
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Soluciones tecnológicas a tu medida
            </p>
          </div>

          {/* Enlaces */}
          <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <FooterTitle title="Sobre Nosotros" className="mb-4 text-lg font-semibold" />
              <FooterLinkGroup col className="space-y-2">
                <FooterLink as={Link} to="/about" className="hover:text-blue-600 dark:hover:text-blue-400">
                  Nuestro equipo
                </FooterLink>
                <FooterLink as={Link} to="/services" className="hover:text-blue-600 dark:hover:text-blue-400">
                  Servicios
                </FooterLink>
              </FooterLinkGroup>
            </div>

            <div>
              <FooterTitle title="Comunidad" className="mb-4 text-lg font-semibold" />
              <FooterLinkGroup col className="space-y-2">
                <FooterLink href="https://github.com/" target="_blank" className="hover:text-blue-600 dark:hover:text-blue-400">
                  GitHub
                </FooterLink>
                <FooterLink href="https://discord.com/" target="_blank" className="hover:text-blue-600 dark:hover:text-blue-400">
                  Discord
                </FooterLink>
              </FooterLinkGroup>
            </div>

            <div>
              <FooterTitle title="Legal" className="mb-4 text-lg font-semibold" />
              <FooterLinkGroup col className="space-y-2">
                <FooterLink as={Link} to="/legal" className="hover:text-blue-600 dark:hover:text-blue-400">
                  Aviso Legal
                </FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>

        <FooterDivider className="my-8 border-gray-200 dark:border-gray-700" />

        {/* Pie inferior */}
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright 
            href="#" 
            by="DevWarriors™" 
            year={2025}
            className="text-gray-600 dark:text-gray-300"
          />
          
          <div className="mt-4 flex space-x-6 sm:mt-0">
            <FooterIcon 
              href="https://instagram.com"
              icon={BsInstagram}
              className="text-gray-600 hover:text-pink-600 dark:text-gray-300 dark:hover:text-pink-400"
              aria-label="Instagram"
            />
            <FooterIcon 
              href="https://github.com"
              icon={BsGithub}
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              aria-label="GitHub"
            />
            <FooterIcon 
              href="https://tiktok.com"
              icon={BsTiktok}
              className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
              aria-label="TikTok"
            />
          </div>
        </div>
      </div>
    </FlowbiteFooter>
  );
}