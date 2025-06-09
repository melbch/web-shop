import { useEffect, useState } from "react";
import type { Product } from "../../../types/productTypes";
import booksData from "../../../data/books";

function useTopRatedBooks(maxBooks: number) {
    const [books, setBooks] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        try {
            setLoading(true);
            setError(null);

            const sorted = booksData
            .filter(book => book.rating !== undefined && book.rating !== null)
            .sort((a, b) => b.rating - a.rating)
            .slice(0, maxBooks);

            setBooks(sorted);
        } catch (err) {
            if (err instanceof Error) setError(err.message);
            else setError(String(err));
        } finally {
            setLoading(false);
        }
    }, [maxBooks]);

    return { books, loading, error };
}

export default useTopRatedBooks;