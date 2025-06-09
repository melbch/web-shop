import React from "react";
import { FaTruck, FaLock, FaUndo, FaTag } from "react-icons/fa";

const iconClass = "text-4xl text-indigo-800 mb-4"

type CardProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
};

const Card: React.FC<CardProps> = ({ icon, title, description }) => (
    <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
        {icon}  
        <h3 className="text-xl font-semibold mb-2 text-gray-700">
            {title}
            </h3>
        <p className="text-gray-600 text-sm">{description}</p>
    </div>
);

const JoinTheFamily: React.FC = () => {
    return (
        <section className="py-12 bg-white text-center px-4 sm:px-6 lg:px-8 mt-16 mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10">
                Join The BookNook Family!
            </h2>

            <div 
                className="grid gap-6 max-w-7xl mx-auto px-2 sm:px-4 lg:px-6"
                style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}
            >
                <Card
                  icon={<FaTruck className={iconClass} />}
                  title="Free Shipping"
                  description="Available for orders of $50 or more."
                />
                <Card
                  icon={<FaLock className={iconClass} />}
                  title="100% Secure Payment"
                  description="Guaranteed secure payment process for your peace of mind."
                />
                <Card
                  icon={<FaUndo className={iconClass} />}
                  title="Money Back Guarantee"
                  description="You have a 30-day return guarantee for every single order."
                />
                <Card
                  icon={<FaTag className={iconClass} />}
                  title="Exclusive Member Deals"
                  description="Get access to special discounts and early releases."
                />
            </div>
        </section>
    );
};

export default JoinTheFamily; 