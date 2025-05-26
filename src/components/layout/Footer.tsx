import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-3 lg:px-2 py-1">
        {/* Top Section with Glow Effect */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-gray-500/5 blur-3xl"></div>
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Company Info with Animation */}
              <div className="space-y-4 transform hover:scale-105 transition-transform duration-300">
                <Link to="/" className="block">
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                    Black Shadows
                  </h3>
                </Link>
                <p className="text-gray-300">
                  Tu portal definitivo para el entretenimiento digital.
                </p>
                <div className="flex space-x-6">
                  {/* Facebook Icon */}
                  <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-3">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" fill="currentColor"/>
                    </svg>
                  </a>
                  {/* Twitter/X Icon */}
                  <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-3">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor"/>
                    </svg>
                  </a>
                  {/* Instagram Icon */}
                  <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-3">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Contact Links with Icons */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Contacto</h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="/views/About" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group">
                      <svg className="w-6 h-6 mr-3 text-white group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="currentColor"/>
                      </svg>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">Sobre Nosotros</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/views/Contact" className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group">
                      <svg className="w-6 h-6 mr-3 text-white group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
                      </svg>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">Contáctanos</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Gradient Border */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Black Shadows. Todos los derechos reservados.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-sm flex items-center">
                Desarrollado con 
                <span className="mx-1 text-white animate-pulse">❤️</span> 
                por Black Shadows Team
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;