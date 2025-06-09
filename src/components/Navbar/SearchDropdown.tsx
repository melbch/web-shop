import React from "react";
import type { Product } from "../../types/productTypes";

interface Props {
    bookResults: Product[];
    authorResults: string[];
    onSelectBook: (product: Product) => void;
    onSelectAuthor: (author: string) => void;
}

const SearchDropdown: React.FC<Props> = ({ bookResults, authorResults, onSelectBook, onSelectAuthor }) => {
    if (bookResults.length === 0 && authorResults.length === 0) return null;

    return (
        <ul className="absolute top-full left-0 right-0 bg-gray-200 border border-neutral-500 rounded shadow-lg z-50 max-h-60 overflow-y-auto">
            {bookResults.map(book => (
                <li 
                    key={book.id}
                    onClick={() => onSelectBook(book)}
                    className="px-4 py-2 hover:bg-gray-300 cursor-pointer text-gray-800"
                >
                    <span className="font-semibold">{book.title}</span> by {book.author}
                </li>
            ))}
            {authorResults.map(authorName => (
                <li
                    key={authorName}
                    onClick={() => onSelectAuthor(authorName)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer italic"
                >
                    <span className="font-semibold">{authorName}</span> (author)
                </li>
            ))}
        </ul>
    );
};

export default SearchDropdown;