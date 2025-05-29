import { FiUsers, FiTarget, FiAward, FiGlobe } from 'react-icons/fi';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-gray-900 to-black text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Sobre Nosotros</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Transformando ideas en soluciones tecnológicas innovadoras desde Hoy
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Nuestra Historia</h2>
            <p className="text-gray-600 mb-6">
              Black Shadows nació de la visión de un grupo de jovenes apasionados por la tecnología
              y la innovación. Desde nuestros inicios, nos hemos dedicado a crear soluciones digitales
              que transforman la manera en que las empresas operan y crecen.
            </p>
            <p className="text-gray-600 mb-6">
              Nuestro compromiso con la excelencia y la innovación nos ha permitido crecer y convertirnos
              en un referente en el sector tecnológico, ayudando a empresas de todos los tamaños a
              alcanzar su máximo potencial digital.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <FiUsers className="text-4xl text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trabajo en Equipo</h3>
              <p className="text-gray-600">
                Colaboración y sinergia para alcanzar objetivos comunes
              </p>
            </div>
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <FiTarget className="text-4xl text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovación</h3>
              <p className="text-gray-600">
                Búsqueda constante de nuevas soluciones y mejoras
              </p>
            </div>
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <FiAward className="text-4xl text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excelencia</h3>
              <p className="text-gray-600">
                Compromiso con la calidad en cada proyecto
              </p>
            </div>
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <FiGlobe className="text-4xl text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visión Global</h3>
              <p className="text-gray-600">
                Soluciones adaptadas a mercados internacionales
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestro Equipo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200"></div>
              <h3 className="text-xl font-semibold mb-2">Juan Del Carmen</h3>
              <p className="text-gray-600 mb-2">CEO & Fundador</p>
              <p className="text-sm text-gray-500">
                Más de 2 días de experiencia en tecnología y liderazgo
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200"></div>
              <h3 className="text-xl font-semibold mb-2">Gotita Moredia Lira</h3>
              <p className="text-gray-600 mb-2">CTO</p>
              <p className="text-sm text-gray-500">
                Experto en arquitectura de lego y desarrollo de bugs
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200"></div>
              <h3 className="text-xl font-semibold mb-2">Pollo Huerta Rodríguez</h3>
              <p className="text-gray-600 mb-2">Director de Proyectos</p>
              <p className="text-sm text-gray-500">
                Especialista en metodologías ágiles y gestión de equipos de basket
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200"></div>
              <h3 className="text-xl font-semibold mb-2">Kirby Santiago Ortíz</h3>
              <p className="text-gray-600 mb-2">Empleado</p>
              <p className="text-sm text-gray-500">
                Especialista en hacer tortas y atoles
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
