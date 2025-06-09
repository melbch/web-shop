import React, { useState, useEffect } from 'react';
import { ProductContext } from './ProductContext';
import type { Product } from '../types/productTypes';

import books from '../data/books';

interface Props {
    children: React.ReactNode;
}

export const ProductProvider: React.FC<Props> = ({ children }) => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        setProducts(books);
    }, []);

    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    );
};