import { useState } from "react";
import { Link } from "react-router-dom";
import type { Product } from "../../../types/productTypes";
import useResponsiveBooksPerSlide from "../hooks/useResponsiveBooksPerSlide";
import useSpecialOfferBooks from "../hooks/useSpecialOfferBooks";
import BookCard from "./BookCard";
import SlideDots from "./SlideDots";

const SpecialOffers = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const { booksPerSlide, maxBooks } = useResponsiveBooksPerSlide();
    const { books, loading } = useSpecialOfferBooks(maxBooks);

    const maxSlide = Math.floor((books.length - 1) / booksPerSlide);
    const start = slideIndex * booksPerSlide;
    const visibleBooks = books.slice(start, start + booksPerSlide);

    if (loading) {
        return <p>Loading special offers...</p>
    }
    
    return (
        <section className="px-6 py-10 mt-10 border border-gray-100 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M0%2020%20L20%200%22%20stroke%3D%22%23d1d5db%22%20stroke-width%3D%221%22%20opacity%3D%220.2%22/%3E%3Cpath%20d%3D%22M-5%205%20L5%20-5%20M15%2025%20L25%2015%22%20stroke%3D%22%23d1d5db%22%20stroke-width%3D%221%22%20opacity%3D%220.2%22/%3E%3C/svg%3E')]">
            <h2 className="text-2xl md:text-4xl font-bold [font-variant:small-caps] text-gray-900 mb-6 border-b-4 inline-block pb-1">
                Special Offers
            </h2>

            <div className="flex flex-col lg:flex-row gap-6">
                {/* Left section */}
                <div className="flex-1">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                        {visibleBooks.map((book: Product) => (
                            <BookCard key={book.id} book={book} />
                        ))}
                    </div>

                    <SlideDots 
                        maxSlide={maxSlide}
                        currentIndex={slideIndex}
                        onSelect={setSlideIndex}
                    />
                </div>

                {/* Right section */}
                <div className="lg:w-1/3 flex flex-col justify-center px-4">
                        <div className="mb-4 bg-white">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-left">
                                Great Deals on Great Reads
                            </h3>
                            <p className="text-gray-600 text-medium md:text-lg leading-relaxed text-left">
                                Our team picked these books because they're too good to miss — especially at these prices.
                            </p>
                        </div>

                        <div className="flex justify-start md:justify-end">
                            <Link
                                to="/shop?sort=onSale"
                                className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition"
                            >
                                See All Offers
                            </Link>
                        </div>
                </div>
            </div>
        </section>
    );
};

export default SpecialOffers; 