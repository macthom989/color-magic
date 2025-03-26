const FeatureCard = ({
                         icon,
                         title,
                         description,
                         delay
                     }: {
    icon: React.ReactNode;
    title: string;
    description: string;
    delay: string;
}) => {
    return (
        <div
            className="rounded-xl p-6 border border-border bg-card hover:shadow-md transition-all duration-300 animate-fade-up"
            style={{animationDelay: delay}}
        >
            <div className="p-3 bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center text-primary mb-5">
                {icon}
            </div>
            <h3 className="text-xl font-medium mb-2">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
        </div>
    );
};

export default FeatureCard;