import { createContext } from 'react';
import type { Product } from '../types/productTypes';

interface ProductContextType {
    products: Product[];
}

export const ProductContext = createContext<ProductContextType>({ products: [] });