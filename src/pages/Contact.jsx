import { useState } from 'react';
import { Card, Button, TextInput, Textarea, Label, Alert } from 'flowbite-react';
import { HiPhone, HiMail, HiCheck, HiInformationCircle, HiArrowRight } from 'react-icons/hi';
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

    // Validación mejorada
    if (!formData.name.trim() || !formData.email.match(/\S+@\S+\.\S+/) || !formData.message.trim()) {
      setSubmitStatus('error');
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
      setSubmitStatus('error');
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
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-3">
            Contáctanos
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Estamos aquí para ayudarte
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Formulario */}
          <Card className="hover:shadow-lg transition-shadow h-fit">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              Envíanos un mensaje
            </h2>

            {submitStatus === 'success' && (
              <Alert color="success" icon={HiCheck} className="mb-4">
                ¡Mensaje enviado con éxito! Te responderemos pronto.
              </Alert>
            )}

            {submitStatus === 'error' && (
              <Alert color="failure" icon={HiInformationCircle} className="mb-4">
                {!formData.name.trim() || !formData.message.trim() 
                  ? "Por favor completa todos los campos" 
                  : "El correo electrónico no es válido"}
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="name" value="Nombre completo*" />
                <TextInput
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ej: María González"
                />
              </div>

              <div>
                <Label htmlFor="email" value="Correo electrónico*" />
                <TextInput
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ejemplo@dominio.com"
                />
              </div>

              <div>
                <Label htmlFor="message" value="Mensaje*" />
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>

              <Button 
                type="submit" 
                gradientDuoTone="purpleToBlue"
                disabled={isLoading}
                className="w-full mt-2"
              >
                {isLoading ? 'Enviando...' : (
                  <>
                    Enviar mensaje <HiArrowRight className="ml-2" />
                  </>
                )}
              </Button>
            </form>
          </Card>

          {/* Contacto directo */}
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Contacto directo
              </h2>
              
              <div className="space-y-4">
                <Button 
                  color="light" 
                  onClick={() => window.location.href = 'mailto:tj.juan.reyes.b@upds.net.bo'}
                  className="w-full text-left"
                >
                  <HiMail className="mr-3 text-xl" />
                  <div>
                    <p className="font-medium">Escríbenos un email</p>
                    <p className="text-sm text-gray-500">tj.juan.reyes.b@upds.net.bo</p>
                  </div>
                </Button>

                <Button 
                  color="success" 
                  onClick={() => window.open('https://wa.me/59179288555', '_blank')}
                  className="w-full bg-green-600 hover:bg-green-700 text-left"
                >
                  <HiPhone className="mr-3 text-xl" />
                  <div>
                    <p className="font-medium">Háblanos por WhatsApp</p>
                    <p className="text-sm text-gray-100">+591 79288555</p>
                  </div>
                </Button>
              </div>
            </Card>

            {/* Información adicional */}
            <Card className="hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-3">
                Horario de atención
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Lunes a Viernes: 9:00 - 18:00 hrs<br />
                Sábados: 10:00 - 14:00 hrs
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}