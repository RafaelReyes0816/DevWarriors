import { useProject } from '../hooks/useProject';
import { Card } from 'flowbite-react';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function ProjectDetail() {
  const { slug } = useParams();
  const { project, loading, error } = useProject();

  // Debug avanzado
  useEffect(() => {
    console.group('[ProjectDetail] Debug Info');
    console.log('Slug from URL:', slug);
    console.log('Project data:', project);
    console.log('Loading state:', loading);
    console.log('Error state:', error);
    
    if (project) {
      console.log('Comparación de slugs:');
      console.log('Slug en URL:', slug);
      console.log('Slug en BD:', project.slug);
      console.log('Coinciden exactamente?', slug === project.slug);
      console.log('Longitud URL:', slug.length);
      console.log('Longitud BD:', project.slug.length);
    }
    
    console.groupEnd();
  }, [project, loading, error, slug]);

  // Estado de carga mejorado
  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen py-20">
        <div className="animate-spin h-12 w-12 border-t-2 border-b-2 border-blue-500 rounded-full mb-4"></div>
        <p className="text-gray-600 dark:text-gray-400">
          Buscando proyecto con slug: "{slug}"
        </p>
      </div>
    );
  }

  // Manejo de errores mejorado
  if (error || !project) {
    return (
      <div className="text-center py-20 px-4">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">
            {error ? "Error al cargar el proyecto" : "Proyecto no encontrado"}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            Slug buscado: "{slug}"
          </p>
          {project?.slug && (
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
              Slug en base de datos: "{project.slug}"
            </p>
          )}
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
            {error?.message || 'Verifica que el slug sea correcto.'}
          </p>
          <Link 
            to="/projects" 
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            ← Volver a los proyectos
          </Link>
        </div>
      </div>
    );
  }

  // Función para manejar errores en imágenes
  const handleImageError = (e) => {
    e.target.onerror = null; // Previene loops
    e.target.src = '/default-project.jpg';
    e.target.className = 'w-full h-auto object-contain aspect-video bg-gray-100 dark:bg-gray-800 p-4';
  };

  return (
    <section className="py-12 bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Encabezado con botón de volver */}
        <div className="md:col-span-2 lg:col-span-3 flex justify-between items-center">
          <Link 
            to="/projects" 
            className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver a proyectos
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center flex-grow">
            {project.title}
          </h1>
          <div className="w-5"></div>
        </div>

        {/* Contenido principal */}
        <div className="md:col-span-2 space-y-6">
          {/* Card principal */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative aspect-video overflow-hidden rounded-t-lg">
              <img
                src={project.image_url || '/default-project.jpg'}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                onError={handleImageError}
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-3 dark:text-white">Descripción</h2>
              <div className="prose dark:prose-invert max-w-none">
                {project.description.split('\n').map((paragraph, i) => (
                  <p key={i} className="mb-3 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </Card>

          {/* Captura adicional si existe */}
          {project.screenshot_url && (
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={project.screenshot_url}
                  alt={`Captura de ${project.title}`}
                  className="w-full h-full object-contain bg-gray-50 dark:bg-gray-800 p-2"
                  onError={handleImageError}
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold dark:text-white">Captura del Proyecto</h2>
              </div>
            </Card>
          )}
        </div>

        {/* Detalles técnicos */}
        <div className="space-y-6">
          <Card className="dark:bg-gray-800 shadow-lg">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4 dark:text-white">Detalles Técnicos</h2>
              <div className="space-y-4">
                {/* ... (mantén el contenido existente de detalles técnicos) ... */}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}