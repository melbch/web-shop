import { useState } from "react";
import { Link } from "react-router-dom";
import type { Product } from "../../../types/productTypes";
import useResponsiveBooksPerSlide from "../hooks/useResponsiveBooksPerSlide";
import useLeavingSoonBooks from "../hooks/useLeavingSoonBooks";
import BookCard from "./BookCard";

const LeavingSoonSection = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const { booksPerSlide, maxBooks } = useResponsiveBooksPerSlide();
    const books = useLeavingSoonBooks(maxBooks);

    const maxSlide = Math.floor((books.length - 1) / booksPerSlide);
    const start = slideIndex * booksPerSlide;
    const visibleBooks = books.slice(start, start + booksPerSlide);

    return (
        <section className="px-6 py-10">
            <h2 className="text-2xl md:text-4xl font-bold [font-variant:small-caps] text-gray-900 mb-6 border-b-4 inline-block pb-1">Leaving Soon</h2>

            <div className="flex flex-col lg:flex-row gap-6">
                {/* Left section */}
                <div className="flex-1">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                        {visibleBooks.map((book: Product) => (
                            <BookCard key={book.id} book={book} />
                        ))}
                    </div>

                    <div className="flex justify-center gap-2 mt-2">
                        {Array.from({ length: maxSlide + 1 }).map((_, i) => (
                            <button 
                                key={i}
                                onClick={() => setSlideIndex(i)}
                                className={`w-3 h-3 rounded-full transition ${
                                    i === slideIndex
                                        ? 'bg-blue-600'
                                        : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                                aria-label={`Slide ${i + 1}`}
                            >
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right section */}
                <div className="lg:w-1/3 flex flex-col justify-center px-4">
                        <div className="mb-4">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-left">
                                Don't Miss Out
                            </h3>
                            <p className="text-gray-600 text-medium md:text-lg leading-relaxed text-left">
                                These books won't be around much longer! If something catches your eye, now's the perfect time to grab it before it's gone.
                            </p>
                        </div>

                        <div className="flex justify-start md:justify-end">
                            <Link
                                to="/shop?sort=leavingsoon"
                                className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition"
                            >
                                See What's Leaving Soon
                            </Link>
                        </div>
                </div>
            </div>
        </section>
    );
};

export default LeavingSoonSection; 