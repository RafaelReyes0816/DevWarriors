import { Card, Button } from "flowbite-react";
import { FaLightbulb, FaHandshake, FaChartLine, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function About() {
  const teamMembers = [
    {
      name: "Rafael Reyes",
      position: "Fundador y Desarrollador Full Stack",
      description: "Apasionado por la tecnología y la innovación con más de 5 años de experiencia en desarrollo web.",
      imgSrc: "/image/team/perfil.png",
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "David Cruz",
      position: "Desarrollador Full Stack",
      description: "Especialista en arquitecturas escalables y optimización de rendimiento.",
      imgSrc: "/image/team/perfil.png",
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "José Gonzales",
      position: "Desarrollador Backend",
      description: "Experto en diseño de APIs REST y microservicios.",
      imgSrc: "/image/team/perfil.png",
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Iván Orellana",
      position: "Diseñador UX/UI",
      description: "Creador de experiencias de usuario intuitivas y atractivas.",
      imgSrc: "/image/team/perfil.png",
      social: {
        linkedin: "#",
        github: "#"
      }
    }
  ];

  const companyValues = [
    {
      title: "Innovación",
      description: "Adoptamos tecnologías emergentes para ofrecer soluciones vanguardistas.",
      icon: <FaLightbulb className="text-4xl text-blue-600 dark:text-blue-400 mb-4" />,
    },
    {
      title: "Transparencia",
      description: "Practicamos comunicación abierta en cada etapa de nuestros proyectos.",
      icon: <FaHandshake className="text-4xl text-blue-600 dark:text-blue-400 mb-4" />,
    },
    {
      title: "Crecimiento",
      description: "Nos actualizamos constantemente para superar las expectativas.",
      icon: <FaChartLine className="text-4xl text-blue-600 dark:text-blue-400 mb-4" />,
    }
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Nuestra <span className="text-blue-600">Historia</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Desde 2024, transformando ideas en soluciones tecnológicas que impulsan negocios
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Conoce al <span className="text-blue-600">Equipo</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Un equipo multidisciplinario comprometido con la excelencia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center p-6 border-0"
              >
                <div className="flex flex-col items-center">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-blue-100 dark:border-gray-700">
                    <img
                      src={member.imgSrc}
                      alt={`${member.name} - ${member.position}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                    {member.position}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {member.description}
                  </p>
                  <div className="flex space-x-4">
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn de ${member.name}`}>
                      <FaLinkedin className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400 text-xl" />
                    </a>
                    <a href={member.social.github} target="_blank" rel="noopener noreferrer" aria-label={`GitHub de ${member.name}`}>
                      <FaGithub className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-xl" />
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Nuestros <span className="text-blue-600">Valores</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Principios que guían cada decisión que tomamos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companyValues.map((value, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center p-8 border-0 bg-white dark:bg-gray-700"
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para comenzar tu proyecto?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contáctanos hoy mismo y descubre cómo podemos ayudarte a alcanzar tus objetivos
          </p>
          <Link to="/contact">
            <Button gradientDuoTone="cyanToBlue" size="xl" className="px-8 py-4 text-lg">
              Contáctanos
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}