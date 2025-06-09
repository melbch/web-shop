import { useEffect, useState } from "react";
import type { Product } from "../../../types/productTypes";

const usePreOrderBooks = () => {
    const [books, setBooks] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch("http://localhost:5000/books");
                const data: Product[] = await response.json();
                const preOrderBooks = data.filter(
                    (book) => book.availability === "pre_order"
                );
                setBooks(preOrderBooks);
            } catch (err) {
                console.error("Error fetching pre-order books:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    return { books, loading };
};

export default usePreOrderBooks;