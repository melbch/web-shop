import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBook, FaDragon, FaSearch, FaHeart, FaRocket, FaTheaterMasks, FaChild, FaSkull, FaFileAlt, FaUserGraduate, FaArrowCircleRight } from "react-icons/fa";
import CategoryButton from "./CategoryButton";

const categories = [
    { name: "Fiction", icon: <FaBook /> },
    { name: "Fantasy", icon: <FaDragon /> },
    { name: "Mystery", icon: <FaSearch /> },
    { name: "Romance", icon: <FaHeart /> },
    { name: "Science Fiction", icon: <FaRocket /> },
    { name: "Non-fiction", icon: <FaFileAlt /> },
    { name: "Drama", icon: <FaTheaterMasks /> },
    { name: "Children", icon: <FaChild /> },
    { name: "Thriller", icon: <FaSkull /> },
    { name: "Young Adult", icon: <FaUserGraduate /> },
];

const CategorySection: React.FC = () => {
    const navigate = useNavigate();

    const handleCategoryClick = (category: string) => {
        navigate(`/shop?genre=${encodeURIComponent(category)}`);
    };

    const handleSeeMoreClick = () => {
        navigate(`/shop`);
    }

    return (
        <section className="category-section max-w-5xl mx-auto px-4 py-8">
            <div 
                className="mx-auto mb-6 flex items-center justify-center rounded-full bg-blue-100 px-8 py-3"
                style={{ width: 'fit-content', maxWidth: '300px', aspectRatio: '3 / 1' }}
            >
                <h2 className="text-lg font-semibold text-blue-700 select-none">
                    Categories
                </h2>
            </div>
            
            <div className="grid grid-cols-5 gap-4 mb-4">
                {categories.slice(0, 5).map(({ name, icon }) => (
                    <CategoryButton key={name} name={name} icon={icon} onClick={handleCategoryClick} />
                ))}
            </div>

            <div className="grid grid-cols-5 gap-4 mb-4">
                {categories.slice(5, 10).map(({ name, icon }) => (
                    <CategoryButton key={name} name={name} icon={icon} onClick={handleCategoryClick} />
                ))}
            </div>

            <div className="flex justify-end">
                <button 
                    onClick={handleSeeMoreClick}
                    className="flex items-center gap-2 px-4 py-2 border rounded bg-blue-600 text-white text-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                    See More <FaArrowCircleRight />
                </button>
            </div>
        </section>
    );
};

export default CategorySection; 