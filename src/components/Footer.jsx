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
    <FlowbiteFooter container className="bg-gray-50 dark:bg-gray-800 rounded-none">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <FooterBrand
              as={Link}
              to="/"
              src="/image/logo/logo3.png"
              alt="Logo"
              name="Mi Web"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterTitle title="Sobre Nosotros" />
              <FooterLinkGroup col>
                <FooterLink as={Link} to="/about">Sobre nosotros</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Síguenos" />
              <FooterLinkGroup col>
                <FooterLink href="https://github.com/RafaelReyes0816" target="_blank">Github</FooterLink>
                <FooterLink href="https://discordapp.com/users/385871294316412940" target="_blank">Discord</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Legal" />
              <FooterLinkGroup col>
                <FooterLink as={Link} to="/legal">Aviso Legal</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="/" by="DevWarriors™" year={2025} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <FooterIcon href="https://www.instagram.com/" icon={BsInstagram} target="_blank" rel="noopener noreferrer" />
          <FooterIcon href="https://github.com/" icon={BsGithub} target="_blank" rel="noopener noreferrer" />
          <FooterIcon href="https://www.tiktok.com/" icon={BsTiktok} target="_blank" rel="noopener noreferrer" />
          </div>
        </div>
      </div>
    </FlowbiteFooter>
  );
}