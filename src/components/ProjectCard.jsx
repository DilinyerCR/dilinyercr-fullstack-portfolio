

const ProjectCard = ({ project }) => {
    return (
        <div 
            className="flex flex-col rounded-xl shadow-xl overflow-hidden bg-card border border-gray-200 dark:border-gray-700 transition duration-300 transform hover:shadow-2xl hover:-translate-y-1 hover:shadow-primary/50"
        >
            {/* 1. Imagen del Proyecto */}
            <div className="h-46 w-full overflow-hidden">
                <img 
                    src={project.image} 
                    alt={`Captura del proyecto ${project.title}`}
                    className="w-full h-full object-cover" 
                    loading="lazy"
                />
            </div>

            {/* 2. Contenido y Texto */}
            <div className="p-5 flex flex-col grow">
                <h3 className="text-xl font-bold mb-2 text-text-light dark:text-gray-100">
                    {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 grow">
                    {project.description}
                </p>

                {/* 3. Tecnologías (Botones/Badges) */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.techs.map((tech) => (
                        <span 
                            key={tech} 
                            className="text-xs font-medium px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* 4. Botones de Acción */}
                <div className="flex space-x-3 mt-auto pt-2">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                       className="flex-1 text-center py-2 px-4 rounded-lg bg-primary text-white font-medium hover:bg-indigo-700 transition duration-200"
                    >
                        Sitio Vivo
                    </a>
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer"
                       className="flex-1 text-center py-2 px-4 rounded-lg bg-gray-100 text-gray-800 font-medium hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 transition duration-200"
                    >
                        Código
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;