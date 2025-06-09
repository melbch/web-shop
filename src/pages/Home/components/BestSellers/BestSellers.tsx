import { useState} from "react";
import type { Product } from "../../../../types/productTypes";
import BookCard from "../BookCard";
import useResponsiveBooksPerSlide from "../../hooks/useResponsiveBooksPerSlide";
import useFetchBooks from "../../hooks/useFetchTopRatedBooks";
import SlideDots from "../SlideDots";
import BestSellersInfo from "./BestSellersInfo";

const BestSellers = () => {
    const { booksPerSlide, maxBooks } = useResponsiveBooksPerSlide();
    const { books, loading, error } = useFetchBooks(maxBooks);
    const [slideIndex, setSlideIndex] = useState(0);

    if (loading) return <div role="status" className="text-center py-10">Loading bestsellers...</div>;
    if (error) return <div role="alert" className="text-center py-10 text-red-600">Error: {error}</div>;

    const maxSlide = Math.floor((books.length - 1) / booksPerSlide);
    const start = slideIndex * booksPerSlide;
    const visibleBooks = books.slice(start, start + booksPerSlide);

    return (
        <section className="px-6 py-10 mt-20">
            <h2 className="text-2xl md:text-4xl font-bold [font-variant:small-caps] text-gray-900 mb-6 border-b-4 inline-block pb-1">
                Best Sellers
            </h2>

            <div className="flex flex-col lg:flex-row gap-6">
                {/* Left section */}
                <BestSellersInfo />

                {/* Right section */}
                <div className="flex-1 order-1 lg:order-2">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                        {visibleBooks.map((book: Product) => (
                            <BookCard key={book.id} book={book} />
                        ))}
                    </div>

                    <SlideDots maxSlide={maxSlide} currentIndex={slideIndex} onSelect={setSlideIndex} />
                </div>
            </div>
        </section>
    );
};

export default BestSellers; 