import React from "react";

interface MembershipPerksProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const MembershipPerks: React.FC<MembershipPerksProps> = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded shadow max-w-sm mx-auto">
        <div className="pb-2">{icon}</div>
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

export default MembershipPerks;