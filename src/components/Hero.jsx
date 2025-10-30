import { Download, Mail } from 'lucide-react';


const Hero = () => {


    return (
        <section id="inicio" className="py-20 md:py-32 lg:py-62 px-4 sm:px-12 lg:px-8 overflow-hidden flex items-center">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                    <p className="text-xl font-medium text-accent mb-4">¡Hola! Soy DilinyerCR</p>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-18 mb-6 dark:text-gray-100">
                        Desarrollador Web <span className="text-primary">Full-Stack</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
                        Apasionado por construir aplicaciones web robustas y escalables, desde la base de datos hasta la interfaz de usuario. Mi enfoque es en la eficiencia y la experiencia de usuario.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                        <a href="/curriculo.pdf" download 
                            className="inline-flex items-center justify-center px-8 py-3 border border-transparent font-medium rounded-xl shadow-lg text-white bg-primary hover:bg-indigo-700 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-bg">
                            <Download size={18} className='mr-2'/>
                            Descargar CV
                        </a>
                        <a href="#contacto" className="inline-flex items-center justify-center px-8 py-3 border border-primary font-medium rounded-xl shadow-lg text-primary bg-white hover:bg-indigo-50 transition duration-300 transform hover:scale-105 dark:bg-card dark:text-primary dark:hover:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-bg">
                            <Mail size={17} className='mr-2'/>
                            Contactar
                        </a>
                    </div>
                </div>

                <div className="hidden lg:flex justify-center">
                    <div className="w-full max-w-md rounded-4xl shadow-2xl overflow-hidden flex items-center justify-center border-4 border-primary/50 bg-bg transition-colors duration-500">
                        <img 
                            src="/logo-light.png" 
                            alt="logo de dilinyer" 
                            className="dark:hidden" 
                        />

                        <img 
                            src="/logo-dark.png" 
                            alt="logo de dilinyer" 
                            className="hidden dark:block" 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;