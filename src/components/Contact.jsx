import { Phone, Mail, MessageSquareMore } from 'lucide-react';
import { useState } from 'react';

const MailIcon = () => (
    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-1 10a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h12a2 2 0 012 2v10z"></path></svg>
);

const ChatIcon = () => (
    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
);

const LinkedInIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.136-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
);

const GithubIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.163 6.83 9.493.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.698-2.782.605-3.369-1.34-3.369-1.34-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.068-.608.068-.608 1.007.07 1.532 1.033 1.532 1.033.89 1.528 2.341 1.087 2.913.829.091-.643.349-1.087.635-1.34-2.22-.252-4.555-1.11-4.555-4.938 0-1.089.389-1.983 1.025-2.686-.102-.254-.445-1.272.097-2.658 0 0 .835-.27 2.73.99A9.689 9.689 0 0112 5.75c.85.006 1.706.115 2.502.34a9.689 9.689 0 012.498-.34c1.895 1.26 2.73.99 2.73.99.542 1.386.199 2.404.097 2.658.636.703 1.025 1.597 1.025 2.686 0 3.837-2.338 4.681-4.564 4.931.359.309.678.919.678 1.852 0 1.34-.012 2.417-.012 2.747 0 .267.18.577.688.484C21.136 20.154 24 16.418 24 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" /></svg>
);

const XIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.261 8.27 11.239h-6.76l-5.833-7.531-7.16 7.531h-3.308l7.658-8.625L1.875 2.25H8.72l4.717 6.231L18.244 2.25zM17.818 20.749H19.98L7.864 3.25H5.53l12.288 17.499z" /></svg>
);


const Contact = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true);
        event.target.reset();
        setTimeout(() => setFormSubmitted(false), 5000); // Hide message after 5 seconds
    };

    return (
        <section id="contacto" className="py-16 lg:py-24 px-4 sm:px-12 lg:px-8 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary dark:text-primary">Conversemos</h2>

            <div className="grid lg:grid-cols-2 gap-12">
                <div className="p-8 bg-card rounded-xl shadow-xl border border-gray-100 dark:border-gray-700">
                    <h3 className="text-2xl font-semibold mb-6">Envíame un mensaje</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nombre</label>
                            <input type="text" id="name" name="name" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                            <input type="email" id="email" name="email" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Mensaje</label>
                            <textarea id="message" name="message" rows={4} required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"></textarea>
                        </div>
                        <button type="submit" className="w-full py-3 px-4 border border-transparent rounded-lg shadow-lg text-white bg-primary hover:bg-indigo-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-gray-900">
                            Enviar Mensaje
                        </button>
                        {formSubmitted && (
                            <div className="mt-4 p-3 bg-accent/20 text-accent rounded-lg text-center font-medium">
                                ¡Mensaje enviado! (Demo: El formulario real requiere un servicio backend).
                            </div>
                        )}
                    </form>
                </div>

                <div className="lg:p-8 space-y-8">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold mb-4 dark:text-gray-100">Información de Contacto</h3>

                        <div className="flex items-center space-x-4 p-4 bg-card rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
                            <Mail size={22} className='text-red-400'/>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                                <a href="mailto:dilinyercr@gmail.com" className="font-medium text-text-light dark:text-text-dark hover:text-red-400 transition duration-300">dilinyercr@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 p-4 bg-card rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
                            <Phone size={22} className='text-green-500'/>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">WhatsApp</p>
                                <a href="https://wa.me/+584140598943" target="_blank" rel="noopener noreferrer" className="font-medium text-text-light dark:text-text-dark hover:text-green-500 transition duration-300">+58 414-0598943</a>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 p-4 bg-card rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
                            <MessageSquareMore size={22} className='text-blue-700'/>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Messenger</p>
                                <a href="https://m.me/DilinyerCR" target="_blank" rel="noopener noreferrer" className="font-medium text-text-light dark:text-text-dark hover:text-blue-700 transition duration-300">Mensaje Directo</a>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold mb-4 dark:text-gray-100">Redes Profesionales</h3>
                        <div className="flex space-x-6 justify-start">
                            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-700 transition duration-300 transform hover:scale-110">
                                <LinkedInIcon className="w-8 h-8" />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-accent transition duration-300 transform hover:scale-110">
                                <GithubIcon className="w-8 h-8" />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition duration-300 transform hover:scale-110">
                                <XIcon className="w-8 h-8" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;