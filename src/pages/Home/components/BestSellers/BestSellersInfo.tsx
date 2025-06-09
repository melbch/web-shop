import { Link } from "react-router-dom"; 

const BestSellersInfo = () => (
    <div className="lg:w-1/3 flex flex-col justify-center px-4 order-2 lg:order-1">
        <div className="mb-4">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-left">
                Readers' Favorites
            </h3>
            <p className="text-gray-600 text-medium md:text-lg leading-relaxed text-left">
                Need help choosing your next read? This is a great place to start. These beloved reads have earned their stars.
            </p>
        </div>    
        <div className="flex justify-start md:justify-start">
            <Link 
                to="/shop?sort=bestsellers"
                className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition"
            >
                Shop Our Best Sellers
            </Link>
        </div>
    </div>
);

export default BestSellersInfo;