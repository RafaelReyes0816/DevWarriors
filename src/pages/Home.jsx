import { Carousel, Button, Card, Badge } from "flowbite-react";
import { FaArrowRight, FaChartLine, FaLaptopCode, FaMobileAlt, FaShieldAlt, FaUsers } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Home() {
  // Imágenes del carrusel (corregidas las rutas)
  const carouselImages = [
    "/image/carousel/banner01.png",
    "/image/carousel/banner2.png",
    "/image/carousel/banner03.png",
  ];

  // Servicios destacados
  const featuredServices = [
    {
      title: "Soluciones Web",
      description: "Desarrollo de aplicaciones web a medida con tecnologías modernas.",
      icon: <FaLaptopCode className="text-4xl text-blue-600" />,
      badge: "Popular"
    },
    {
      title: "Aplicaciones Móviles",
      description: "Apps nativas e híbridas para iOS y Android.",
      icon: <FaMobileAlt className="text-4xl text-green-600" />,
      badge: "Nuevo"
    },
    {
      title: "Seguridad Informática",
      description: "Protección de datos y sistemas contra amenazas digitales.",
      icon: <FaShieldAlt className="text-4xl text-red-600" />,
      badge: "Recomendado"
    }
  ];

  return (
    <div className="space-y-16 pb-12">
      {/* 1. Carrusel Hero (tu versión mejorada) */}
      <div className="h-96 sm:h-[32rem] relative">
        <Carousel 
          pauseOnHover 
          indicators
          className="h-full rounded-none"
        >
          {carouselImages.map((src, index) => (
            <div key={index} className="relative h-full w-full">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/1600x900';
                }}
              />
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* 2. Servicios Destacados */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Nuestros <span className="text-blue-600">Servicios</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <Card 
              key={index}
              className="hover:shadow-lg transition-shadow h-full"
            >
              <div className="text-center p-4">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  {service.title}
                </h3>
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
      </section>

      {/* 3. CTA Intermedio */}
      <section className="bg-blue-700 text-white py-12">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">
            ¿Necesitas una solución personalizada?
          </h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Nuestros expertos están listos para asesorarte.
          </p>
          <Link to="/contact" className="inline-block">
            <Button gradientDuoTone="cyanToBlue" size="xl">
              Contactar ahora <FaArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}