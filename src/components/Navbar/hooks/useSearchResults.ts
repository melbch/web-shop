import { useState, useEffect } from "react";
import type { Product } from "../../../types/productTypes";

export function useSearchResults(query: string, products: Product[]) {
    const [bookResults, setBookResults] = useState<Product[]>([]);
    const [authorResults, setAuthorResults] = useState<string[]>([]);
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        if (!query) {
            setBookResults([]);
            setAuthorResults([]);
            setShowDropdown(false);
            return;
        }
        const lowerQuery = query.toLowerCase();
        const books = products.filter(p => p.title.toLowerCase().includes(lowerQuery));
        const uniqueAuthors = Array.from(new Set(products.map(p => p.author)));
        const authors = uniqueAuthors.filter(
            author => author.toLowerCase().includes(lowerQuery) && !books.some(book => book.author === author)
        );

        setBookResults(books.slice(0, 5));
        setAuthorResults(authors.slice(0, 5));
        setShowDropdown(true);
    }, [query, products]);

    return { bookResults, authorResults, showDropdown, setShowDropdown };
}