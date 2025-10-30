
import React from 'react';

const LinkedInIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.136-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
);

const GithubIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.163 6.83 9.493.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.698-2.782.605-3.369-1.34-3.369-1.34-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.068-.608.068-.608 1.007.07 1.532 1.033 1.532 1.033.89 1.528 2.341 1.087 2.913.829.091-.643.349-1.087.635-1.34-2.22-.252-4.555-1.11-4.555-4.938 0-1.089.389-1.983 1.025-2.686-.102-.254-.445-1.272.097-2.658 0 0 .835-.27 2.73.99A9.689 9.689 0 0112 5.75c.85.006 1.706.115 2.502.34a9.689 9.689 0 012.498-.34c1.895 1.26 2.73.99 2.73.99.542 1.386.199 2.404.097 2.658.636.703 1.025 1.597 1.025 2.686 0 3.837-2.338 4.681-4.564 4.931.359.309.678.919.678 1.852 0 1.34-.012 2.417-.012 2.747 0 .267.18.577.688.484C21.136 20.154 24 16.418 24 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg>
);

const XIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.261 8.27 11.239h-6.76l-5.833-7.531-7.16 7.531h-3.308l7.658-8.625L1.875 2.25H8.72l4.717 6.231L18.244 2.25zM17.818 20.749H19.98L7.864 3.25H5.53l12.288 17.499z" /></svg>
);


const Footer = () => {
    return (
        <footer className="bg-card border-t border-gray-200 dark:border-gray-800 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

                    <div className="col-span-2 md:col-span-1 space-y-4">
                        <a href="#inicio" className="text-2xl font-extrabold text-primary hover:text-accent transition duration-300">
                            &lt;DilinyerCR/&gt;
                        </a>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                            © {new Date().getFullYear()} DilinyerCR. Todos los derechos reservados.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-text">Navegación</h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                            <li><a href="#inicio" className="hover:text-primary transition duration-300">Inicio</a></li>
                            <li><a href="#sobre-mi" className="hover:text-primary transition duration-300">Sobre mí</a></li>
                            <li><a href="#stack" className="hover:text-primary transition duration-300">Mi Stack</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-text">Recursos</h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                            <li><a href="#proyectos" className="hover:text-primary transition duration-300">Proyectos</a></li>
                            <li><a href="/curriculo.pdf" download className="hover:text-primary transition duration-300">Descargar CV</a></li>
                            <li><a href="#contacto" className="hover:text-primary transition duration-300">Contacto</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-text">Conéctate</h4>
                        <div className="flex space-x-4">
                            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-700 transition duration-300 transform hover:scale-110">
                                <LinkedInIcon className="w-6 h-6" />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-accent transition duration-300 transform hover:scale-110">
                                <GithubIcon className="w-6 h-6" />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition duration-300 transform hover:scale-110">
                                <XIcon className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;