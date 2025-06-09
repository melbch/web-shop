import { useEffect, useState } from "react";
import type { Product } from "../../../types/productTypes";

const useSpecialOfferBooks = (maxBooks: number) => {
    const [books, setBooks] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch("http://localhost:5000/books?onSale=true");
                const data = await response.json();
                setBooks(data.slice(0, maxBooks));
            } catch (error) {
                console.error("Error fetching special offer books:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, [maxBooks]);

    return { books, loading };
};

export default useSpecialOfferBooks;