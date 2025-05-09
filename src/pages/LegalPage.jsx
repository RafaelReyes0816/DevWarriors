import { Alert, Badge } from "flowbite-react";

export default function LegalPage() {
  const companyInfo = {
    name: "DevWarriors",
    specialty: "desarrollo web, diseño UI/UX y aplicaciones web",
    location: "Tarija, Bolivia",
    contact: "info@devwarriors.com",
    legalContact: "legal@devwarriors.com",
    dpoContact: "tj.juan.reyes.b@upds.net.bo"
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-8">
          <Badge 
            color="blue" 
            className="mb-2 text-xs md:text-sm py-1 px-2 inline-flex items-center bg-blue-600 text-white"
          >
            Documento Legal
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Aviso Legal y Términos de Servicio
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Última actualización: 25 de Abril de 2025
          </p>
        </div>

        {/* Sección 1 - Información General */}
        <Alert color="info" className="mb-6 bg-blue-50 dark:bg-blue-900" withBorderAccent>
          <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
            </svg>
            1. Información General
          </h2>
          <p className="text-gray-800 dark:text-gray-200">
            Este sitio web es propiedad de <span className="font-semibold text-blue-700 dark:text-blue-300">{companyInfo.name}</span>, 
            empresa especializada en <span className="font-semibold">{companyInfo.specialty}</span>, 
            con ubicación en <span className="font-semibold">{companyInfo.location}</span>. 
            Para contacto general: <a href={`mailto:${companyInfo.contact}`} className="font-semibold text-blue-700 dark:text-blue-300 hover:underline">{companyInfo.contact}</a>.
          </p>
        </Alert>

        {/* Sección 2 - Condiciones de Uso */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6 border-l-4 border-blue-600">
          <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            2. Condiciones de Uso
          </h2>
          <p className="text-gray-800 dark:text-gray-200 mb-4">
            El acceso y uso de este sitio implica la aceptación plena de nuestras condiciones:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-800 dark:text-gray-200">
            <li>Prohibido el uso comercial de nuestros diseños/códigos sin autorización expresa por escrito.</li>
            <li>Los contenidos (casos de estudio, diseños UI) son propiedad intelectual exclusiva de {companyInfo.name}.</li>
            <li>Nos reservamos el derecho a modificar portafolios, precios y condiciones sin previo aviso.</li>
          </ul>
        </div>

        {/* Sección 3 - Privacidad */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6 border-l-4 border-green-600">
          <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white flex items-center gap-2">
            <svg className="w-5 h-5 text-green-600 dark:text-green-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            3. Política de Privacidad
          </h2>
          <p className="text-gray-800 dark:text-gray-200 mb-4">
            Como agencia de desarrollo, cumplimos con el <span className="font-semibold text-green-700 dark:text-green-300">RGPD</span> y normativas locales:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-800 dark:text-gray-200">
            <li><strong>Datos recopilados</strong>: Email, cookies técnicas, datos de facturación.</li>
            <li><strong>Finalidad</strong>: Presupuestos, control de versiones, cumplimiento legal.</li>
            <li><strong>Derechos ARCO</strong>: Solicítalos vía <a href={`mailto:${companyInfo.legalContact}`} className="text-green-700 dark:text-green-300 hover:underline">{companyInfo.legalContact}</a>.</li>
          </ul>
        </div>

        {/* Sección 4 - Cookies */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6 border-l-4 border-purple-600">
          <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white flex items-center gap-2">
            <svg className="w-5 h-5 text-purple-600 dark:text-purple-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
            </svg>
            4. Política de Cookies
          </h2>
          <div className="text-gray-800 dark:text-gray-200 space-y-3">
            <p>Utilizamos las siguientes categorías de cookies:</p>
            <div className="ml-4">
              <p className="font-semibold text-purple-700 dark:text-purple-300">Cookies técnicas</p>
              <p>Sesión de GitHub, preferencias de Figma, configuración de usuario.</p>
              <p className="font-semibold text-purple-700 dark:text-purple-300 mt-2">Cookies analíticas</p>
              <p>Google Analytics (métricas de tráfico y comportamiento).</p>
            </div>
            <p>
              Puedes gestionar tus preferencias desde el navegador o nuestro <a href="#" className="font-semibold text-purple-700 dark:text-purple-300 hover:underline">panel de consentimiento</a>.
            </p>
          </div>
        </div>

        {/* Contacto DPO */}
        <div className="mt-8 text-center">
          <a 
            href={`mailto:${companyInfo.dpoContact}`}
            className="inline-flex items-center px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors focus:ring-4 focus:ring-blue-300 font-semibold"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            Contactar al Delegado de Protección de Datos
          </a>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-3">
            Respuesta garantizada en un plazo máximo de 72 horas hábiles
          </p>
        </div>
      </div>
    </div>
  );
}
