import { useState, useEffect } from "react";
import type { Product } from "../../../types/productTypes";

const useBooks = (limit = 4) => {
    const [books, setBooks] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                setLoading(true);
                const response = await fetch('http://localhost:5000/books');
                if (!response.ok) throw new Error("Failed to fetch books");
                const data: Product[] = await response.json();
                
                const filteredBooks = data.filter(book => book.availability !== 'pre_order');
                
                const sortedBooks = filteredBooks
                    .sort(
                      (a, b) =>
                        new Date(b.publishedDate).getTime() -
                        new Date(a.publishedDate).getTime()
                    )
                    .slice(0, limit); 
                setBooks(sortedBooks);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, [limit]);

    return { books, loading, error };
};

export default useBooks;