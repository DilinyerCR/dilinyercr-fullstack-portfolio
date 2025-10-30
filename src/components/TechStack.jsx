import StackCard from './StackCard';
import { stackData } from '../data/stackData';


const StackSection = () => {

    return (
        <section id="stack" className="py-16 lg:py-24 px-4 sm:px-12 lg:px-8 border-t border-b border-gray-200 dark:border-gray-800 transition-colors duration-500 bg-gray-100 dark:bg-bg">

            <h2 className="text-4xl font-extrabold text-center mb-12 text-primary dark:text-primary">
                Mi Stack de Desarrollo
            </h2>

            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
                {stackData.map((tech) => (
                    <StackCard
                        key={tech.title}
                        icon={tech.icon}
                        title={tech.title}
                        subtitle={tech.subtitle}
                        iconColor={tech.color}
                    />
                ))}
            </div>
        </section>
    );
};

export default StackSection;