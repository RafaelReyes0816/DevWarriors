import { useEffect } from 'react';
import { useLocation, Routes, Route, Navigate } from 'react-router-dom'; // 👈 `Navigate` para redirigir
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import LegalPage from './pages/LegalPage';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';

// Componente opcional para una página 404 amigable
function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">404</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">Página no encontrada</p>
      <a
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Volver al Inicio
      </a>
    </div>
  );
}

function SmoothScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <SmoothScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="project/:slug" element={<ProjectDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="legal" element={<LegalPage />} />

          {/* Ruta 404 - Cualquier ruta no definida */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}