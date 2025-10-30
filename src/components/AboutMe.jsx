



const AboutMe = () => {
    return (
        <section id="sobre-mi" className="py-16 lg:py-24 px-4 sm:px-12 lg:px-8 border-t border-gray-200 dark:border-gray-800">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary dark:text-primary">Sobre Mí</h2>
            <div className="grid lg:grid-cols-3 gap-12 items-start">

                <div className="lg:col-span-1 flex flex-col items-center">
                    <div className="w-64 h-64 rounded-full bg-bg dark:bg-gray-700 mb-6 shadow-xl overflow-hidden flex items-center justify-center border-4 border-accent">
                        <img src="/perfil.png" alt="" />
                    </div>

                    <div className="mt-8 space-y-4 w-full max-w-xs text-center">
                        <div className="p-4 bg-card rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                            <p className="text-3xl font-extrabold text-primary">1+</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Año de Experiencia</p>
                        </div>
                        <div className="p-4 bg-card rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                            <p className="text-3xl font-extrabold text-primary">12+</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Proyectos Completados</p>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2 text-gray-700 dark:text-gray-300">
                    <p className="mb-6 text-lg">
                        Como desarrollador Full-Stack, mi misión es cerrar la brecha entre la estética de frontend y la funcionalidad robusta de backend. Poseo una sólida experiencia que me permite gestionar proyectos de principio a fin, garantizando una arquitectura eficiente y un código limpio y mantenible.
                    </p>
                    <h3 className="text-2xl font-semibold mb-4 text-text-light dark:text-text-dark">Mi Enfoque Full-Stack</h3>
                    <p className="mb-6">
                        Me especializo en el ecosistema JavaScript moderno, utilizando <strong>Next.js</strong> para interfaces de usuario rápidas y optimizadas (Frontend) y <strong>Node.js con ExpressJS</strong> para construir APIs RESTful escalables (Backend). Para la persistencia de datos, prefiero la confiabilidad de <strong>PostgreSQL/SQL</strong> junto con ORMs como <strong>Sequelize</strong>.
                    </p>
                    <h3 className="text-2xl font-semibold mb-4 text-text-light dark:text-text-dark">Metodología de Trabajo</h3>
                    <ul className="space-y-3 list-disc list-inside ml-4">
                        <li><strong>Desarrollo Ágil:</strong> Implemento metodologías ágiles (Scrum/Kanban) para iterar rápidamente y entregar valor de manera continua.</li>
                        <li><strong>Pruebas Rigurosas:</strong> Siempre priorizo las pruebas unitarias y de integración para asegurar la calidad y evitar regresiones.</li>
                        <li><strong>Diseño Responsive:</strong> Creo interfaces que se ven y funcionan perfectamente en cualquier dispositivo, usando <strong>Tailwind CSS</strong> para un desarrollo rápido y estilizado.</li>
                        <li><strong>Gestión de Estado:</strong> Utilizo herramientas modernas como <strong>Zustand o Redux</strong> para manejar el estado complejo de la aplicación de manera predecible.</li>
                        <li><strong>Control de Versiones:</strong> <strong>Git y GitHub</strong> son esenciales en mi flujo de trabajo para la colaboración y el historial de código.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;