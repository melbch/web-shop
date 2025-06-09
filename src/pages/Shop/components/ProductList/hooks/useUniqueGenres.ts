import { useMemo } from "react";
import type { Product } from "../../../../../types/productTypes";

const normalizeGenre = (genre: string | string[]) => Array.isArray(genre) ? genre : [genre];

export const useUniqueGenres = (products: Product[]) =>
    useMemo(() => {
        const genres = products.flatMap(p => normalizeGenre(p.genre));
        return Array.from(new Set(genres)).sort((a, b) => a.localeCompare(b));
    }, [products]);