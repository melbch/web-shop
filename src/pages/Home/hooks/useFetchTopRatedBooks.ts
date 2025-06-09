import { useEffect, useState } from "react";
import type { Product } from "../../../types/productTypes";

function useFetchBooks(maxBooks: number) {
    const [books, setBooks] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBooks = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch('http://localhost:5000/books');
                if (!response.ok) throw new Error("Failed to fetch books");
                const data = await response.json();
                const sorted = data
                    .filter((book: Product) => book.rating !== undefined && book.rating !== null)
                    .sort((a: Product, b: Product) => b.rating - a.rating)
                    .slice(0, maxBooks);
                setBooks(sorted);
            } catch (err) {
                if (err instanceof Error) setError(err.message);
                else setError(String(err));
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, [maxBooks]);

    return { books, loading, error };
}

export default useFetchBooks;