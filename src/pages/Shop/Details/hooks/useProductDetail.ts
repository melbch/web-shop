import { useEffect, useState } from "react";
import type { Product } from "../../../../types/productTypes";
import type { Review } from "../ProductReviews";

import books from "../../../../data/books";
import publishersData from "../../../../data/publishers";
import reviewsData from "../../../../data/reviews";

interface UseProductDetailResult {
    product: Product | null;
    publishers: { id: number; name: string }[];
    reviews: Review[];
    loading: boolean;
    assignedPublisher: string;
    addReview: (newReview: Review) => void;
}

export const useProductDetail = (id: string | undefined): UseProductDetailResult => {
    const [product, setProduct] = useState<Product | null>(null);
    const [publishers, setPublishers] = useState<{ id: number; name: string }[]>([]);
    const [reviews, setReviews] = useState<Review[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
       if (!id) {
            setLoading(false);
            return;
        }
            
        setLoading(true);
            
        setTimeout(() => {
            const foundBook = books.find(book => book.id.toString() === id);
            const productData = foundBook !== undefined ? foundBook : null;
            setProduct(productData);

            setPublishers(publishersData);

            const shuffled = [...reviewsData].sort(() => 0.5 - Math.random());
            const randomCount = Math.floor(Math.random() * 4) + 2;
            const selected = shuffled.slice(0, randomCount);
            setReviews(selected);

            setLoading(false);
        }, 300);

    }, [id]);

    const addReview = (newReview: Review) => {
        setReviews(prevReviews => [newReview, ...prevReviews]);
    };

    const assignedPublisher =
        product && publishers.length > 0
            ? publishers[product.id % publishers.length].name
            : "";

    return { product, publishers, reviews, loading, assignedPublisher, addReview };
};