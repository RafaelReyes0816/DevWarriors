import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

export default function Projects() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const serviceFilter = searchParams.get('service');

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true);
        setError(null);
        
        let query = supabase
          .from('projects')
          .select(`
            id,
            title,
            description,
            image_url,
            screenshot_url,
            platform,
            year,
            technologies,
            slug,
            category
          `);

        if (serviceFilter) {
          query = query.eq('category', serviceFilter);
        }

        const { data, error: queryError } = await query;

        if (queryError) {
          throw queryError;
        }

        setProjects(data || []);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('No pudimos cargar los proyectos. Por favor intenta más tarde.');
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, [serviceFilter]);

  return (
    <section className="py-16 bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">
          {serviceFilter ? `Proyectos de ${serviceFilter}` : 'Nuestros Proyectos'}
        </h2>

        {/* Estados: Cargando, Error o Contenido */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="text-center py-8 text-red-600 dark:text-red-400">
            {error}
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 dark:text-gray-400">
              Aún no tenemos proyectos en esta categoría.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(project => (
              <div 
                key={project.id} 
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                {/* Imagen del proyecto */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image_url || '/default-project.jpg'}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = '/default-project.jpg';
                      e.target.classList.add('object-contain', 'p-4');
                    }}
                  />
                  
                  {/* Badge de categoría */}
                  {project.category && (
                    <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                      {project.category}
                    </span>
                  )}
                </div>

                {/* Contenido de la card */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Metadatos al final */}
                  <div className="mt-4 space-y-3">
                    {project.platform && (
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {project.platform}
                      </div>
                    )}

                    {project.year && (
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {project.year}
                      </div>
                    )}

                    {project.technologies?.length > 0 && (
                      <div className="pt-2">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tech, index) => (
                            <span 
                              key={index} 
                              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full text-xs">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}