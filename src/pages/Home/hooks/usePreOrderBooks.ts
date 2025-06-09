import { useEffect, useState } from "react";
import type { Product } from "../../../types/productTypes";
import booksData from "../../../data/books";

const usePreOrderBooks = () => {
    const [books, setBooks] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        try {
                const preOrderBooks = booksData.filter(book => book.availability === "pre_order");
                setBooks(preOrderBooks);
            } catch (error) {
                console.error("Error loading pre-order books:", error);
                setBooks([]);
            } finally {
                setLoading(false);
            }
    }, []);

    return { books, loading };
};

export default usePreOrderBooks;