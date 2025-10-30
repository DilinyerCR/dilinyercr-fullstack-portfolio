import { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { Menu, X, Sun, Moon } from 'lucide-react';



const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [theme, toggleTheme] = useTheme()


    return (
        <header className="sticky top-0 z-50 bg-bg/90 border-b border-gray-200 transition-colors duration-500 backdrop-blur-md dark:border-gray-800">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex justify-between items-center h-20">

                    <a href="#inicio" className="text-3xl xs:text-3xl font-extrabold text-primary hover:text-accent transition duration-300">
                        &lt;DilinyerCR/&gt;
                    </a>

                    <nav className="hidden md:flex space-x-8 items-center">
                        <a href="#inicio" className='lg:text-lg font-medium text-text hover:text-primary transition duration-300 sm:text-base'>Inicio</a>

                        <a href="#sobre-mi" className='lg:text-lg font-medium text-text hover:text-primary transition duration-300 sm:text-base'>Sobre mi</a>

                        <a href="#stack" className='lg:text-lg font-medium text-text hover:text-primary transition duration-300 sm:text-base'>Mi Stack</a>

                        <a href="#proyectos" className='lg:text-lg font-medium text-text hover:text-primary transition duration-300 sm:text-base'>Proyectos</a>

                        <a href="#contacto" className='lg:text-lg font-medium text-text hover:text-primary transition duration-300 sm:text-base'>Contacto</a>
                    </nav>

                    <div className="flex items-center space-x-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300  cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary transition duration-300 dark:bg-gray-800 dark:hover:bg-gray-700"
                        >
                            {theme === 'dark' ? (
                                <Moon className="w-6 h-6 text-text" />
                            ) : (
                                <Sun className="w-6 h-6 text-text" />
                            )}
                        </button>

                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-primary">
                            {isMenuOpen ? (
                                <X
                                    className='text-text'
                                    size={24}
                                />
                            ) : (
                                <Menu
                                    className='text-text'
                                    size={24}
                                />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <nav className={`${isMenuOpen ? 'max-h-96' : 'max-h-0'} md:hidden border-b border-gray-200 bg-bg dark:border-gray-800 overflow-hidden transition-max-height duration-500 ease-linear`}>

                <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3 text-center">

                    <a href="" className="block px-3 py-2 rounded-md font-medium text-text  hover:bg-gray-100 dark:hover:bg-gray-800">Inicio</a>

                    <a href="" className="block px-3 py-2 rounded-md font-medium text-text hover:bg-gray-100 dark:hover:bg-gray-800">Sobre mi</a>

                    <a href="" className="block px-3 py-2 rounded-md font-medium text-text hover:bg-gray-100 dark:hover:bg-gray-800">Mi Stack</a>

                    <a href="" className="block px-3 py-2 rounded-md font-medium text-text hover:bg-gray-100 dark:hover:bg-gray-800">Proyectos</a>

                    <a href="" className="block px-3 py-2 rounded-md font-medium text-text hover:bg-gray-100 dark:hover:bg-gray-800">Contacto</a>

                </div>
            </nav>
        </header>
    );
};

export default Header;


