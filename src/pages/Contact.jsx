import { useState } from 'react';
import { Card, Button, TextInput, Textarea, Label, Alert, Badge } from 'flowbite-react';
import { HiCheck, HiInformationCircle, HiClock, HiMap } from 'react-icons/hi';
import { supabase } from '../lib/supabaseClient';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!formData.name.trim()) {
      setSubmitStatus('error-name');
      setIsLoading(false);
      return;
    }

    if (!formData.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      setSubmitStatus('error-email');
      setIsLoading(false);
      return;
    }

    if (!formData.message.trim()) {
      setSubmitStatus('error-message');
      setIsLoading(false);
      return;
    }

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([{
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          created_at: new Date().toISOString()
        }]);

      if (error) throw error;
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error al enviar:', error);
      setSubmitStatus('error-server');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (submitStatus && submitStatus.startsWith('error')) {
      setSubmitStatus(null);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <Badge color="indigo" className="mb-4 mx-auto w-fit">
            Contacto rápido
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
            Hablemos sobre tu proyecto
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Completa el formulario o contáctanos directamente
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Formulario */}
          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Envíanos un mensaje
            </h2>

            {submitStatus === 'success' && (
              <Alert color="success" icon={HiCheck} className="mb-4">
                ¡Gracias por tu mensaje! Te responderemos en menos de 24 horas.
              </Alert>
            )}

            {submitStatus === 'error-name' && (
              <Alert color="failure" icon={HiInformationCircle} className="mb-4">
                Por favor ingresa tu nombre completo
              </Alert>
            )}

            {submitStatus === 'error-email' && (
              <Alert color="failure" icon={HiInformationCircle} className="mb-4">
                Por favor ingresa un correo electrónico válido
              </Alert>
            )}

            {submitStatus === 'error-message' && (
              <Alert color="failure" icon={HiInformationCircle} className="mb-4">
                Por favor escribe tu mensaje
              </Alert>
            )}

            {submitStatus === 'error-server' && (
              <Alert color="failure" icon={HiInformationCircle} className="mb-4">
                Ocurrió un error al enviar. Por favor intenta nuevamente.
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" value="Nombre completo*" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" />
                <TextInput
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ej: María González"
                  color={submitStatus === 'error-name' ? 'failure' : 'gray'}
                />
              </div>

              <div>
                <Label htmlFor="email" value="Correo electrónico*" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" />
                <TextInput
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ejemplo@dominio.com"
                  color={submitStatus === 'error-email' ? 'failure' : 'gray'}
                />
              </div>

              <div>
                <Label htmlFor="message" value="Mensaje*" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" />
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos sobre tu proyecto..."
                  color={submitStatus === 'error-message' ? 'failure' : 'gray'}
                />
              </div>

              <Button 
                type="submit" 
                gradientDuoTone="purpleToBlue"
                disabled={isLoading}
                className="w-full mt-2 py-3"
                size="lg"
              >
                {isLoading ? 'Enviando...' : 'Enviar mensaje'}
              </Button>
            </form>
          </Card>

          {/* Contacto directo */}
          <div className="space-y-6">
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contacto directo
              </h2>
              
              <div className="space-y-4">
                {/* Email */}
                <div 
                  className="flex items-start p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors cursor-pointer"
                  onClick={() => window.location.href = 'mailto:tj.juan.reyes.b@upds.net.bo'}
                >
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 mr-4">
                    <svg className="h-5 w-5 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">Correo electrónico</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1"></p>
                    <span className="text-xs text-blue-500 dark:text-blue-300 mt-1 block">Respuesta en 24h</span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div 
                  className="flex items-start p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors cursor-pointer"
                  onClick={() => window.open('https://wa.me/59179288555', '_blank')}
                >
                  <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30 mr-4">
                    <svg className="h-5 w-5 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">WhatsApp Business</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1"></p>
                    <div className="flex items-center mt-1">
                      <span className="text-xs text-green-500 dark:text-green-300 mr-2">Respuesta inmediata</span>
                      <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full animate-pulse">En línea</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Información adicional */}
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Información adicional
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30 mr-4">
                    <HiClock className="h-5 w-5 text-purple-600 dark:text-purple-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Horario de atención</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Lunes a Viernes: 9:00 - 18:00 hrs<br />
                      Sábados: 10:00 - 14:00 hrs
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30 mr-4">
                    <HiMap className="h-5 w-5 text-amber-600 dark:text-amber-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Ubicación</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Tarija, Bolivia<br />
                      15 de Abril #2341
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}