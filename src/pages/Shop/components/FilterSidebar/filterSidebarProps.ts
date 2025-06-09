import React from "react";

export interface FilterSidebarProps {
    filters: {
        genre: string[];
        author: string;
        title: string;
        minPrice: number;
        maxPrice: number;
        featured: string;
    };
    setFilters: React.Dispatch<React.SetStateAction<{
        genre: string[];
        author: string;
        title: string;
        minPrice: number;
        maxPrice: number;
        featured: string,
    }>>;
    genres: string[];
    authors: string[];
}