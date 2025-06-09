import React, { useState } from "react";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import type { Product } from "../../../types/productTypes";
import { Link } from "react-router-dom";

interface BookCarouselProps {
    books: Product[];
}

const BookCarousel: React.FC<BookCarouselProps> = ({ books }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (books.length === 0) return <p>Loading books...</p>;

    const nextBook = () => {
        setCurrentIndex((prev) => (prev + 1) % books.length);
    };

    const prevBook = () => {
        setCurrentIndex((prev) => (prev - 1 + books.length) % books.length);
    };

    return (
        <div className="max-w-[360px] w-full bg-white shadow-lg rounded-lg p-5 flex flex-col items-center">

            <div className="relative flex items-center justify-center mb-4 h-[320px]">

                <button
                    onClick={prevBook}
                    className="absolute left-[-60px] top-1/2 -translate-y-1/2 text-gray-900 hover:text-emerald-800 z-20"
                    aria-label="Previous Book"
                >
                    <ArrowCircleLeftIcon style={{ fontSize: 40 }} />
                </button>

                {books.length > 1 && (
                    <img
                        src={books[(currentIndex - 1 + books.length) % books.length].image}
                        alt={books[(currentIndex - 1 + books.length) % books.length].title}
                        className="w-40 h-auto object-cover rounded-md opacity-70 scale-30 -mr-12"
                        style={{ zIndex: 1 }}
                        aria-hidden="true"
                    />
                )}

                <img
                    src={books[currentIndex].image}
                    alt={books[currentIndex].title}
                    className="w-64 h-auto object-cover rounded-md z-10 shadow-lg"
                    style={{ position: 'relative' }}
                />

                {books.length > 1 && (
                    <img
                        src={books[(currentIndex + 1) % books.length].image}
                        alt={books[(currentIndex + 1) % books.length].title}
                        className="w-40 h-auto object-cover rounded-md opacity-70 scale-30 -ml-12"
                        style={{ zIndex: 1 }}
                        aria-hidden="true"
                    />
                )}

                <button
                    onClick={nextBook}
                    className="absolute right-[-60px] top-1/2 -translate-y-1/2 text-gray-900 hover:text-emerald-800 z-20"
                    aria-label="Next Book"
                >
                    <ArrowCircleRightIcon style={{ fontSize: 40}} />
                </button>
            </div>

            <div className="text-center space-y-1 w-full">
                <h2 className="text-xl font-semibold text-gray-800">{books[currentIndex].title}</h2>
                <p className="text-sm text-gray-500 italic">{books[currentIndex].author}</p>
                <p className="text-md text-gray-700 font-medium">${books[currentIndex].price.toFixed(2)}</p>
                <Link
                    to={`/product/${books[currentIndex].id}`}
                    className="text-blue-600 font-medium hover:underline mt-2 inline-block"
                >
                    View Details
                </Link>
            </div>
        </div>
    );    
};

export default BookCarousel;