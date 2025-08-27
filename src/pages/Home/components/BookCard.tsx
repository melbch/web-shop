import { Link } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa";
import type { Product } from "../../../types/productTypes";

type BookCardProps = {
    book: Product;
};

const BookCard: React.FC<BookCardProps> = ({ book }) => {
    return (
       <div className="border bg-white rounded p-4 shadow-sm flex flex-col">
            <div className="relative p-2 bg-white rounded-lg shadow-lg mb-3">
                <img
                    src={book.image}
                    alt={`${book.title} book cover`}
                    className="max-h-full object-cover rounded-lg"
                />
            </div>
            <h3 className="text-base font-semibold">{book.title}</h3>
            <p className="text-gray-600 text-sm mb-1 italic">{book.author}</p>
            <div className="flex items-center justify-center text-yellow-500 text-sm mb-1">
                {Array.from({ length: 5 }).map((_, i) =>
                    i < Math.round(book.rating) ? <FaStar key={i} /> : <FaRegStar key={i} />
                )}
                <span className="ml-1 text-gray-600 text-xs">({book.rating.toFixed(1)})</span>
            </div>
            <div className="text-sm mt-1 mb-2">
                {book.onSale ? (
                    <>
                        <span className="line-through text-xs text-gray-500 mr-2">${book.price.toFixed(2)}</span>
                        <span className="text-red-500 font-semibold">${book.salePrice.toFixed(2)}</span>
                    </>
                ) : (
                    <span className="text-gray-800 font-medium">${book.price.toFixed(2)}</span>
                )}
            </div>
            <Link
                to={`/product/${book.id}`}
                className="mt-auto inline-block text-xs mt-4 px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-center w-fit mx-auto"
            >
                View Details
            </Link>
        </div> 
    );
};

export default BookCard;