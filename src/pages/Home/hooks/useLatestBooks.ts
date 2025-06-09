import { useState, useEffect } from "react";
import type { Product } from "../../../types/productTypes";
import booksData from "../../../data/books";

const useBooks = (limit = 4) => {
    const [books, setBooks] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        try {
                setLoading(true);
                setError(null);

                const filteredBooks = booksData.filter(book => book.availability !== 'pre_order');
                
                const sortedBooks = filteredBooks
                    .sort(
                      (a, b) =>
                        new Date(b.publishedDate).getTime() -
                        new Date(a.publishedDate).getTime()
                    )
                    .slice(0, limit); 
                setBooks(sortedBooks);
            } catch (err) {
                if (err instanceof Error) setError(err.message);
                else setError(String(err));
            } finally {
                setLoading(false);
            }
    }, [limit]);

    return { books, loading, error };
};

export default useBooks;