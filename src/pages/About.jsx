import { Card } from "flowbite-react";
import { FaLightbulb, FaHandshake, FaChartLine } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function About() {
  const teamMembers = [
    {
      name: "Rafael Reyes",
      position: "Fundador y Desarrollador Full Stack",
      description: "Apasionado por la tecnología y la innovación.",
      imgSrc: "/image/team/perfil.png",
    },
    {
      name: "David Cruz",
      position: "Desarrollador Full Stack",
      description: "Enfocado en soluciones escalables y eficientes.",
      imgSrc: "/image/team/perfil.png",
    },
    {
      name: "José Gonzales",
      position: "Desarrollador Full Stack",
      description: "Especialista en backend y APIs REST.",
      imgSrc: "/image/team/perfil.png",
    },
    {
      name: "Iván Orellana",
      position: "Diseño UX/UI y Community Manager",
      description: "Diseñando experiencias memorables para los usuarios.",
      imgSrc: "/image/team/perfil.png",
    }
  ];

  const companyValues = [
    {
      title: "Innovación",
      description: "Pioneros en adoptar y crear tecnologías disruptivas.",
      icon: <FaLightbulb className="text-3xl text-blue-600 mb-3" />,
    },
    {
      title: "Transparencia",
      description: "Comunicación clara en todos nuestros procesos.",
      icon: <FaHandshake className="text-3xl text-blue-600 mb-3" />,
    },
    {
      title: "Crecimiento",
      description: "Mejora continua personal y profesional.",
      icon: <FaChartLine className="text-3xl text-blue-600 mb-3" />,
    }
  ];

  return (
    <main className="min-h-screen p-4 md:p-8 bg-gray-50 dark:bg-gray-900">
      {/* Hero */}
      <header className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Nuestra Historia
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Desde 2024 transformando ideas en soluciones tecnológicas de alto impacto
        </p>
      </header>

      {/* Equipo */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Conoce al <span className="text-blue-600">Equipo</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 text-center p-6">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-4 border-4 border-blue-100 dark:border-gray-700">
                  <img
                    src={member.imgSrc}
                    alt={`Foto de ${member.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                  {member.position}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                  {member.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Valores */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Nuestros <span className="text-blue-600">Valores</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {companyValues.map((value, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 text-center p-6">
              <div className="flex justify-center mb-3">
                {value.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Llamado a la acción */}
      <footer className="text-center mt-16">
        <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 dark:text-white">
          ¿Listo para trabajar con nosotros?
        </h3>
        <Link to="/Contact" className="inline-block">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-base md:text-lg">
            Contáctanos
          </button>
        </Link>
      </footer>
    </main>
  );
}
