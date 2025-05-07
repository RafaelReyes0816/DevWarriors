import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
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
          .select('id, title, description, image_url, platform, year, technologies, category')
          .order('year', { ascending: false });

        if (serviceFilter) {
          query = query.eq('category', serviceFilter);
        }

        const { data, error: queryError } = await query;

        if (queryError) throw queryError;
        setProjects(data || []);
      } catch (err) {
        setError('Error al cargar proyectos');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, [serviceFilter]);

  // Función para formatear el título de categoría
  const formatCategoryTitle = (category) => {
    if (!category) return 'Proyectos';
    return `Proyectos ${category.charAt(0).toUpperCase() + category.slice(1)}`;
  };

  return (
    <section className="py-12 bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">
          {formatCategoryTitle(serviceFilter)}
        </h2>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="text-center py-8 text-red-600 dark:text-red-400">{error}</div>
        ) : projects.length === 0 ? (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            No hay proyectos en esta categoría
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={project.image_url || '/default-project.jpg'}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = '/default-project.jpg';
                      e.target.className = 'w-full h-full object-contain p-4 bg-gray-100 dark:bg-gray-800';
                    }}
                  />
                  {project.category && (
                    <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                      {project.category}
                    </span>
                  )}
                </div>

                <div className="p-4">
                  <div className="mb-3">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {project.platform} • {project.year}
                    </p>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>

                  {project.technologies?.length > 0 && (
                    <div>
                      <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                        Tecnologías:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="inline-block bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}