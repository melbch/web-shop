import { Link } from "react-router-dom";
import BookCarousel from "./BookCarousel";
import usePreOrderBooks from "../hooks/usePreOrderBooks";

const PreOrderSection = () => {
    const { books, loading } = usePreOrderBooks();

    return (
        <section className="w-full pt-20 py-8 px-4 pb-12 md:px-16">
            <h2 className="text-2xl md:text-4xl font-bold [font-variant:small-caps] text-gray-900 mb-10 border-b-4 inline-block pb-1 md:mb-20">
                Pre-Orders
            </h2>    
        
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
                {/* Left side */}
                <div className="md:w-1/2 flex justify-center order-1 md:order-1">
                    {loading ? <p>Loading books...</p> : <BookCarousel books={books} />}
                </div>
                
                {/* Right side */}
                <div className="md:w-[40%] text-center md:text-left ml:auto mb-8 md:mb-0 md:ml-10 order-2 md:order-2">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
                        New Stories Are On Their Way!
                    </h1>
                    <p className="text-gray-600 text-lg mb-5">
                        Don't wait — pre-order the latest releases and get excited for what's coming soon.
                    </p>
                    <Link
                        to="/shop?sort=pre_order"
                        className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded hover:bg-blue-700 transition duration-300"
                    >
                        Browse All Pre-Orders
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PreOrderSection; 