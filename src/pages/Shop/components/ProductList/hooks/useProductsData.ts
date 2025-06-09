import { useEffect, useState } from "react";
import type { Product } from "../../../../../types/productTypes";
import books from "../../../../../data/books";

export const useProductsData = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setProducts(books);
            setLoading(false);
        }, 300);

        return () => clearTimeout(timeout);
    })

    return { products, loading };
};