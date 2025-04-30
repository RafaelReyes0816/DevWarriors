import { Alert } from "flowbite-react";

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Título */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Aviso Legal
        </h1>

        {/* Sección 1 - Información General */}
        <Alert color="gray" className="mb-6">
          <h2 className="text-xl font-semibold mb-3 dark:text-white">1. Información General</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Este sitio web es propiedad de <span className="font-medium">DevWarriors</span>, 
            empresa especializada en <span className="font-medium">desarrollo web, diseño UI/UX y aplicaciones web</span>, 
            con ubicación en <span className="font-medium">Tarija, Bolivia</span>. 
            Contacto: <span className="font-medium">info@devwarriors.com</span>.
          </p>
        </Alert>

        {/* Sección 2 - Condiciones de Uso */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6">
          <h2 className="text-xl font-semibold mb-3 dark:text-white">2. Condiciones de Uso</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            El acceso a este sitio implica aceptar nuestras condiciones:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Prohibido el uso comercial de nuestros diseños/códigos sin autorización expresa.</li>
            <li>Los contenidos (casos de estudio, diseños UI) son propiedad intelectual de DevWarriors.</li>
            <li>Nos reservamos el derecho a modificar portafolios y precios sin previo aviso.</li>
          </ul>
        </div>

        {/* Sección 3 - Privacidad (RGPD adaptado a servicios web) */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-6">
          <h2 className="text-xl font-semibold mb-3 dark:text-white">3. Política de Privacidad</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Como agencia de desarrollo, tratamos datos según el <span className="font-medium">RGPD</span>:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            <li><strong>Datos recopilados</strong>: Email (para contactos), cookies técnicas (WordPress/Jira/GitHub).</li>
            <li><strong>Finalidad</strong>: Presupuestos, onboarding de proyectos y control de versiones.</li>
            <li><strong>Derechos</strong>: Acceso, rectificación o eliminación escribiendo a <span className="font-medium">legal@devwarriors.com</span>.</li>
          </ul>
        </div>

        {/* Sección 4 - Cookies (técnicas para devs) */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-3 dark:text-white">4. Política de Cookies</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Usamos cookies <span className="font-medium">técnicas</span> (sesión de GitHub, preferencias de Figma) y <span className="font-medium">analíticas</span> (Google Analytics para métricas de tráfico). Puedes gestionarlas desde tu navegador.
          </p>
        </div>

        {/* Botón de contacto (opcional) */}
        <div className="mt-8 text-center">
          <a 
            href="mailto:info@devwarriors.com" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contactar al DPO
          </a>
        </div>
      </div>
    </div>
  );
}