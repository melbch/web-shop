import { useEffect, useState } from "react";
import type { Product } from "../../../types/productTypes";

const useLeavingSoonBooks = (maxBooks: number) => {
    const [books, setBooks] = useState<Product[]>([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch('http://localhost:5000/books?availability=leaving_soon');
                const data = await response.json();
                setBooks(data.slice(0, maxBooks));
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchBooks();
    }, [maxBooks]);

    return books;
};

export default useLeavingSoonBooks;