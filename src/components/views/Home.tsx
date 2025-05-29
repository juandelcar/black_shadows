"use client"

import { FiCode, FiServer, FiShield, FiCloud } from "react-icons/fi"
import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-r from-gray-900 to-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Black Shadows</h1>
              <p className="text-xl mb-6">Innovación y tecnología al servicio de tu negocio. Soluciones digitales que transforman realidades.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn text-white-900">
                  Contáctanos
                </Link>
                <Link to="/about" className="btn text-white-900">
                  Sobre Nosotros
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md h-64 md:h-80">
                <div className="relative h-64 w-full">
                  <img
                    src="/tech-company.jpg"
                    alt="Black Shadows Technology"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">¿Por qué elegir Black Shadows?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <FiCode className="text-primary-600 text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Desarrollo ágil</h3>
              <p className="text-gray-600">Metodologías modernas para entregas rápidas y eficientes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <FiServer className="text-primary-600 text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Infraestructura robusta</h3>
              <p className="text-gray-600">Soluciones escalables y de alto rendimiento.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <FiShield className="text-primary-600 text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Seguridad garantizada</h3>
              <p className="text-gray-600">Protección avanzada para tus datos y aplicaciones.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <FiCloud className="text-primary-600 text-4xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cloud Native</h3>
              <p className="text-gray-600">Soluciones en la nube para máxima flexibilidad.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
