import * as React from 'react';
import { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-white-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contacto</h1>
          <p className="text-xl text-gray-600 mb-8">
            ¿Tienes un proyecto en mente? ¡Hablemos sobre cómo podemos ayudarte!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-1">
          <div className="bg-gradient-to-r from-gray-900 to-black text-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl text-center font-bold mb-6">Black Shadows</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-white-900">Dirección</h3>
                <p className="text-gray-400">Av. Tecnología 123, Ciudad Digital</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white-900">Email</h3>
                <p className="text-gray-400">contacto@blackshadows.com</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white-900">Teléfono</h3>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white-900">Horario</h3>
                <p className="text-gray-400">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-900 to-black text-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white-900">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-sm bg-gray-400"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white-900">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full  rounded-sm bg-gray-400"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white-900">
                  Asunto
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-sm bg-gray-400"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white-900">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-sm bg-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
