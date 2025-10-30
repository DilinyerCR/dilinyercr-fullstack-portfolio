
const StackCard = ({ icon: IconComponent, title, subtitle, iconColor }) => {
    //icon es renombrado a IconComponent para poder usarse como componente
    return (
        <div 
            className="p-6 bg-card rounded-2xl shadow-xl transition duration-300 transform hover:-translate-y-1 text-center border border-gray-100 dark:border-gray-700 hover:shadow-primary/50 dark:hover:shadow-primary/20 "
        >
            <div className="m-3 flex justify-center">
                <IconComponent size={40} className={iconColor} />
            </div>
            
            <p className="text-lg font-semibold text-text-light dark:text-text-dark">{title}</p>
            
            <p className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>
        </div>
    );
};

export default StackCard;