import { useMemo } from "react";
import type { Product } from "../../../../../types/productTypes";

export const useFilteredProducts = (
    products: Product[],
    filters: {
        genre: string[],
        author: string,
        title: string,
        minPrice: number,
        maxPrice: number,
        featured: string,
    }
): Product[] => {
    const normalizeGenre = (genre: string | string[]): string[] => Array.isArray(genre) ? genre : [genre];

    const normalize = (str: string) => {
        return str
        .toLowerCase()
        .replace(/[^a-z0-9]/gi, "")
        .trim();
    };

    const mergedProducts = products.map((product) => ({
        ...product,
        price: product.price ?? 0,
        image: product.image ?? "https://marketplace.canva.com/EAFZJKlK37k/1/0/1067w/canva-grey-minimalist-e-book-business-book-cover-7XXbQVOIgfg.jpg"
    }));

    const sortedProducts = useMemo(() => {
        const result = [...mergedProducts];

        switch (filters.featured) {
            case "leavingsoon":
                return result.filter(p => p.availability === "leaving_soon");
            case "onsale":
                return result.filter(p => p.onSale);
            case "newest":
                return result.sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());
            case "bestsellers":
                return result.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
            case "pre_order":
                return result.filter(p => p.availability === "pre_order");
            default:
                return result;
        }
    }, [mergedProducts, filters.featured]);

    return useMemo(() => {
        return sortedProducts.filter((product) => {
            const productGenres = normalizeGenre(product.genre).map(g => g.toLowerCase());
            const selectedGenres = filters.genre.map(g => g.toLowerCase());
            
            const matchesGenre = selectedGenres.length === 0 || selectedGenres.some(g => productGenres.includes(g));
            const matchesAuthor = !filters.author || normalize(product.author).includes(normalize(filters.author));
            const matchesTitle = !filters.title || normalize(product.title).includes(normalize(filters.title));
            const matchesPrice = product.price >= filters.minPrice && product.price <= filters.maxPrice;
            
            return matchesGenre && matchesAuthor && matchesTitle && matchesPrice;
        });
    }, [sortedProducts, filters]);
};