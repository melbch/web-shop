import React from "react";

interface CategoryButtonProps {
    name: string;
    icon: React.ReactNode;
    onClick: (category: string) => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ name, icon, onClick }) => {
    return (
        <button
            onClick={() => onClick(name)}
            className="flex flex-col items-center justify-center p-4 border rounded hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
            aria-label={`Browse ${name} books`}
        >
            <div className="text-3xl mb-2 text-blue-600">{icon}</div>
            <span className="text-sm sm:text-xs md:text-sm font-medium text-center">{name}</span>
        </button>
    );
};

export default CategoryButton;