interface CommunityCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const CommunityCard = ({ icon, title, description }: CommunityCardProps) => (
    <div className="bg-gray-200 p-6 rounded shadow max-w-sm mx-auto">
        <div className="pb-2">{icon}</div>
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
    </div>
);

export default CommunityCard;