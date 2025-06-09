import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import type { Product } from "../../types/productTypes";
import SearchInput from "./SearchInput";
import SearchDropdown from "./SearchDropdown";
import { useSearchResults } from "./hooks/useSearchResults";

const SearchBar: React.FC<{ products: Product[] }> = ({ products }) => {
    const [query, setQuery] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const navigate = useNavigate();
    const containerRef = useRef<HTMLDivElement>(null);

    const { bookResults, authorResults, showDropdown, setShowDropdown } = useSearchResults(query, products);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsFocused(false);
                setShowDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setShowDropdown]);

    const handleSelectBook = (product: Product) => {
        navigate(`/product/${product.id}`);
        setQuery('');
        setShowDropdown(false);
    }

    const handleSelectAuthor = (authorName: string) => {
        navigate(`/product/list?author=${encodeURIComponent(authorName)}`);
        setQuery('');
        setShowDropdown(false);
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim()) return;
        navigate(`/product/list?q=${encodeURIComponent(query)}`);
        setShowDropdown(false)
    }    

    return (
        <div ref={containerRef} className="relative w-full max-w-2xl">
            <SearchInput 
                query={query} 
                setQuery={setQuery} 
                onSubmit={handleSubmit} 
                onFocus={() => setIsFocused(true)} 
            />
            {showDropdown && isFocused && (
                <SearchDropdown 
                    bookResults={bookResults}
                    authorResults={authorResults}
                    onSelectBook={handleSelectBook}
                    onSelectAuthor={handleSelectAuthor}
                />
            )}
        </div>
    );
};

export default SearchBar;