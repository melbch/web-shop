import React, { useState, useEffect } from 'react';
import { ProductContext } from './ProductContext';
import type { Product } from '../types/productTypes';

interface Props {
    children: React.ReactNode;
}

export const ProductProvider: React.FC<Props> = ({ children }) => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch');
                return res.json();
            })
            .then(data => setProducts(data))
            .catch(console.error);
    }, []);

    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    );
};