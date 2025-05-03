import { useEffect } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import LegalPage from './pages/LegalPage';

// Componente para scroll suave
function SmoothScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // ¡Aquí está la animación!
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
          <Route path="contact" element={<Contact />} />
          <Route path="legal" element={<LegalPage />} />
        </Route>
      </Routes>
    </>
  );
}