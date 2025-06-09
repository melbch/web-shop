import { useEffect, useState } from "react";
import type { Product } from "../../../types/productTypes";
import booksData from "../../../data/books";

const useLeavingSoonBooks = (maxBooks: number) => {
    const [books, setBooks] = useState<Product[]>([]);

    useEffect(() => {
        try {
                const filteredBooks = booksData.filter(book => book.availability === "leaving_soon");
                const limitedBooks = filteredBooks.slice(0, maxBooks);
                setBooks(limitedBooks);    
            } catch (error) {
                console.error('Error processing books:', error);
                setBooks([]);
            }
    }, [maxBooks]);

    return books;
};

export default useLeavingSoonBooks;