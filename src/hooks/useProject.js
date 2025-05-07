import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

// Función para normalizar slugs (consistentemente)
const normalizeSlug = (slug) => {
  return slug
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')  // Espacios por guiones
    .replace(/[^\w-]/g, '') // Elimina caracteres especiales
    .replace(/-+/g, '-');   // Guiones múltiples por uno solo
};

export function useProject() {
  const { slug: rawSlug } = useParams();
  const [state, setState] = useState({
    project: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    async function fetchProject() {
      try {
        setState(prev => ({ ...prev, loading: true, error: null }));
        
        const slug = normalizeSlug(rawSlug);
        console.log(`Buscando proyecto con slug normalizado: "${slug}"`);
        
        // 1. Intento con búsqueda exacta
        let { data, error } = await supabase
          .from('projects')
          .select('*')
          .eq('slug', slug)
          .single();

        // 2. Si no encuentra, probamos con ilike (case-insensitive)
        if (!data && !error) {
          console.log('Probando búsqueda case-insensitive');
          ({ data, error } = await supabase
            .from('projects')
            .select('*')
            .ilike('slug', `%${slug}%`)
            .single());
        }

        // 3. Si aún no encuentra, probamos con slugs similares
        if (!data && !error) {
          console.log('Probando búsqueda por similitud');
          ({ data, error } = await supabase
            .from('projects')
            .select('*')
            .textSearch('slug', slug.split('-').join(' | '))
            .limit(1));
          
          if (data) data = data[0]; // Tomamos el primer resultado
        }

        console.log('Resultado final:', { data, error });
        
        if (error) throw error;
        if (!data) {
          throw new Error(`No se encontró proyecto con slug: "${rawSlug}" (normalizado: "${slug}")`);
        }

        setState({
          project: data,
          loading: false,
          error: null
        });

      } catch (error) {
        console.error('Error fetching project:', {
          error,
          slug: rawSlug,
          normalizedSlug: normalizeSlug(rawSlug)
        });
        
        setState({
          project: null,
          loading: false,
          error: error.message || 'Error al cargar el proyecto'
        });
      }
    }

    fetchProject();
  }, [rawSlug]);

  return state;
}