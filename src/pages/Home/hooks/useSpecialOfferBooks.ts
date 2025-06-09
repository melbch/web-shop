import { useEffect, useState } from "react";
import type { Product } from "../../../types/productTypes";
import booksData from "../../../data/books";

const useSpecialOfferBooks = (maxBooks: number) => {
    const [books, setBooks] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        try {
            const specialOfferBooks = booksData.filter(book => book.onSale).slice(0, maxBooks);
            setBooks(specialOfferBooks);
        } catch (error) {
            console.error("Error loading special offer books:", error);
            setBooks([]);
        } finally {
            setLoading(false);
        }
    }, [maxBooks]);

    return { books, loading };
};

export default useSpecialOfferBooks;