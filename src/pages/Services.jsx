import { Card, Badge } from "flowbite-react";
import { FaCode, FaPalette, FaMobile, FaServer, FaChartLine, FaShieldAlt } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      title: "Desarrollo Web",
      description: "Sitios web a medida con React, optimizados para SEO y rendimiento.",
      icon: <FaCode className="text-4xl mb-4 text-blue-600" />,
      badge: "Popular"
    },
    {
      title: "Diseño UI/UX",
      description: "Interfaces intuitivas y atractivas que mejoran la experiencia de usuario.",
      icon: <FaPalette className="text-4xl mb-4 text-purple-600" />
    },
    {
      title: "Apps Móviles",
      description: "Aplicaciones iOS y Android con React Native o Flutter.",
      icon: <FaMobile className="text-4xl mb-4 text-green-600" />
    },
    {
      title: "Backend",
      description: "APIs robustas con Node.js, Django o Laravel.",
      icon: <FaServer className="text-4xl mb-4 text-amber-600" />
    },
    {
      title: "Analítica",
      description: "Tableros con métricas en tiempo real usando Power BI o Tableau.",
      icon: <FaChartLine className="text-4xl mb-4 text-red-600" />
    },
    {
      title: "Cyberseguridad",
      description: "Protección de datos y auditorías de seguridad.",
      icon: <FaShieldAlt className="text-4xl mb-4 text-indigo-600" />
    }
  ];

  return (
    <section className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Nuestros Servicios
        </h2>
        <p className="text-xl text-center mb-12 text-gray-600 dark:text-gray-300">
          Soluciones tecnológicas para impulsar tu negocio
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="h-full transition-all hover:shadow-lg dark:hover:bg-gray-800"
            >
              <div className="text-center">
                {service.icon}
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                {service.badge && (
                  <Badge color="info" className="w-fit mx-auto mb-3">
                    {service.badge}
                  </Badge>
                )}
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}