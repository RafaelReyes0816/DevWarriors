import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

export function useProject() {
  const { slug } = useParams();
  const [state, setState] = useState({
    project: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    async function fetchProject() {
      try {
        setState(prev => ({ ...prev, loading: true, error: null }));
        
        console.log(`Buscando proyecto con slug: "${slug}"`);
        
        // Versión 1: Búsqueda exacta
        let { data, error } = await supabase
          .from('projects')
          .select('*')
          .eq('slug', slug)
          .single();

        // Si no encuentra, prueba versión case-insensitive
        if (!data && !error) {
          console.log('Probando búsqueda case-insensitive');
          ({ data, error } = await supabase
            .from('projects')
            .select('*')
            .textSearch('slug', slug.replace(/[^\w]/g, ' '), {
              type: 'plain',
              config: 'english'
            })
            .single());
        }

        console.log('Resultado de Supabase:', { data, error });
        
        if (error) throw error;
        if (!data) throw new Error(`No se encontró proyecto con slug: "${slug}"`);

        setState({
          project: data,
          loading: false,
          error: null
        });

      } catch (error) {
        console.error('Error fetching project:', error);
        setState({
          project: null,
          loading: false,
          error: error.message
        });
      }
    }

    fetchProject();
  }, [slug]);

  return state;
}