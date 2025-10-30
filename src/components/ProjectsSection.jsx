import React from 'react';
import ProjectCard from './ProjectCard'; // Asegúrate de que la ruta sea correcta
import { projectData } from '../data/projectData'; // Asegúrate de que la ruta sea correcta

const ProjectsSection = () => {
    return (
        <section id="proyectos" className="py-16 lg:py-24 px-10 sm:px-12 lg:px-8 bg-bg transition-colors duration-500">

            <h2 className="text-4xl font-extrabold text-center mb-12 text-primary dark:text-primary">
                Proyectos Destacados
            </h2>

            {/* Contenedor Grid: 4 columnas en desktop, 2 en tablet, 1 en móvil (ajusta según tu necesidad) */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* 💡 Mapeo de Datos: La clave de la reutilización */}
                {projectData.map((project, index) => (
                    <ProjectCard
                        key={index} // Usar el índice como key si los proyectos son estáticos
                        project={project} // Pasamos todo el objeto proyecto como una única prop
                    />
                ))}
            </div>

            <div className="mt-12 text-center">
                <a href="#" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl shadow-lg text-white bg-primary hover:bg-indigo-700 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-bg-dark">

                    <span>Ver más Proyectos...</span>
                </a>
            </div>
        </section>
    );
};

export default ProjectsSection;
