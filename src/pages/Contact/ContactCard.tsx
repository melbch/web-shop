import React from "react";

interface ContactCardProps {
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, description }) => (
    <div className="relative bg-white rounded-lg shadow-md p-6 pt-12 w-full max-w-xs mx-auto md:mx-0">
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 shadow-lg">
            {icon}
        </div>
        <h3 className="text-xl font-semibold text-center mb-2">{title}</h3>
        <p className="text-center text-gray-600">{description}</p>
  </div>
);

export default ContactCard;