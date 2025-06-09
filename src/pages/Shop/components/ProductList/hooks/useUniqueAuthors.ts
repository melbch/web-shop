import { useMemo } from "react";
import type { Product } from "../../../../../types/productTypes";

export const useUniqueAuthors = (products: Product[]) =>
    useMemo(() => {
        const authors = products.map(p => p.author);
        return Array.from(new Set(authors)).sort((a, b) => a.localeCompare(b));
    }, [products]);