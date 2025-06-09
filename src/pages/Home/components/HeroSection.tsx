import { Link } from "react-router-dom";
import useBooks from "../hooks/useLatestBooks";
import BookCarousel from "./BookCarousel";

const HeroSection: React.FC = () => {
    const { books, loading, error } = useBooks(4);

    return (
        <section className="w-full bg-gray-100 pt-20 py-8 px-4 pb-12 md:px-16">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">

                {/* Left side */}
                <div className="md:w-[40%] text-center md:text-left ml:auto mb-8 md:mb-0 md:ml-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
                        Meet Your New Favorite Book
                    </h1>
                    <p className="text-gray-600 text-lg mb-5">
                        Handpicked from our latest releases — discover a story worth getting lost in.
                    </p>
                    <Link
                        to="/shop?sort=newest"
                        className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded hover:bg-blue-700 transition duration-300"
                    >
                        Browse Now
                    </Link>
                </div>

                {/* Right side */}
                <div className="md:w-1/2 flex justify-center">
                    {loading && <p>Loading books...</p>}
                    {error && <p className="text-red-600">Error: {error}</p>}
                    {!loading && !error && <BookCarousel books={books} />}
                </div>

            </div>
        </section>
    );
};

export default HeroSection;