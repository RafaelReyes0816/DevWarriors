import { Card, Badge, Button } from "flowbite-react";
import {
  FaCode, FaPalette, FaMobile,
  FaServer, FaChartLine, FaShieldAlt,
  FaArrowRight, FaLaptopCode, FaDatabase
} from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Services() {
  const serviceCategories = [
    {
      title: "Desarrollo Web",
      filterKey: "web", // ✅ Coincide con category en BD
      description: "Creamos experiencias digitales rápidas, accesibles y centradas en el usuario.",
      icon: <FaLaptopCode className="text-4xl mb-4 text-blue-600 dark:text-blue-400" />,
      features: [
        "Aplicaciones con React/Next.js",
        "Optimización SEO",
        "Arquitectura modular",
        "Integración con CMS"
      ],
      badge: "Más Popular",
      color: "blue"
    },
    {
      title: "Diseño UI/UX",
      filterKey: "uiux", // ✅
      description: "Interfaces que deleitan a los usuarios y cumplen objetivos de negocio.",
      icon: <FaPalette className="text-4xl mb-4 text-purple-600 dark:text-purple-400" />,
      features: [
        "Prototipado interactivo",
        "Pruebas de usabilidad",
        "Sistemas de diseño",
        "Accesibilidad WCAG"
      ],
      color: "purple"
    },
    {
      title: "Desarrollo Móvil",
      filterKey: "mobile", // ✅ Este es el valor clave
      description: "Aplicaciones nativas e híbridas con excelente rendimiento.",
      icon: <FaMobile className="text-4xl mb-4 text-green-600 dark:text-green-400" />,
      features: [
        "React Native/Flutter",
        "Publicación en stores",
        "Notificaciones push",
        "Funcionamiento offline"
      ],
      badge: "Tendencia",
      color: "green"
    },
    {
      title: "Desarrollo Backend",
      filterKey: "backend", // ✅
      description: "Infraestructura escalable para soportar tu crecimiento.",
      icon: <FaServer className="text-4xl mb-4 text-amber-600 dark:text-amber-400" />,
      features: [
        "Node.js / Python / .NET",
        "Arquitectura de microservicios",
        "APIs GraphQL/REST",
        "Autenticación JWT"
      ],
      color: "amber"
    },
    {
      title: "Inteligencia de Negocios (BI)",
      filterKey: "bi", // ✅ Más limpio que el título largo
      description: "Transformamos tus datos en insights accionables.",
      icon: <FaChartLine className="text-4xl mb-4 text-red-600 dark:text-red-400" />,
      features: [
        "Power BI/Tableau",
        "ETL y almacenamiento de datos",
        "Dashboards ejecutivos",
        "Análisis predictivo"
      ],
      color: "red"
    },
    {
      title: "Ciberseguridad",
      filterKey: "ciberseguridad", // ✅ Puedes usar este o cambiar a "security"
      description: "Protegemos tus activos digitales y cumplimos regulaciones.",
      icon: <FaShieldAlt className="text-4xl mb-4 text-indigo-600 dark:text-indigo-400" />,
      features: [
        "Auditorías de seguridad",
        "Protección de datos",
        "Pruebas de penetración",
        "Cumplimiento GDPR/CCPA"
      ],
      badge: "Esencial",
      color: "indigo"
    }
  ];

  return (
    <main className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Nuestros <span className="text-blue-600 dark:text-blue-400">Servicios</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Soluciones tecnológicas completas para impulsar tu negocio digital
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((service, index) => (
              <Card
                key={index}
                className={`border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-l-4 border-${service.color}-500 dark:border-${service.color}-400`}
              >
                <div className="text-center">
                  <div className="flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  {service.badge && (
                    <Badge
                      color={service.color}
                      className={`w-fit mx-auto mb-3 bg-${service.color}-100 dark:bg-${service.color}-900 text-${service.color}-800 dark:text-${service.color}-200`}
                    >
                      {service.badge}
                    </Badge>
                  )}
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {service.description}
                  </p>

                  <ul className="text-left mb-6 space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className={`text-${service.color}-500 dark:text-${service.color}-400 mr-2`}>•</span>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Botón dinámico según filterKey */}
                  <Link
                    to={`/projects?service=${service.filterKey}`}
                    className="inline-block"
                  >
                    <Button
                      gradientDuoTone={`${service.color}ToBlue`}
                      size="sm"
                      className="mt-auto"
                    >
                      Ver Proyectos <FaArrowRight className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              ¿No encuentras lo que necesitas?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Desarrollamos soluciones personalizadas para tus requerimientos específicos
            </p>
            <Link to="/contact" className="w-full md:w-auto">
              <Button gradientDuoTone="purpleToBlue" size="lg" className="px-8 w-full md:w-auto">
                Habla con nuestros expertos
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}