import { useEffect, useState } from "react";
import type { Product } from "../../../../types/productTypes";
import type { Review } from "../ProductReviews";

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
        const fetchAllData = async () => {
            setLoading(true);
            try {
                const [productResponse, publishersResponse, reviewsResponse] = await Promise.all([
                    fetch(`http://localhost:5000/books/${id}`),
                    fetch(`http://localhost:5000/publishers`),
                    fetch(`http://localhost:5000/reviews`),
                ]);

                const productData = await productResponse.json();
                const publishersData = await publishersResponse.json();
                const allReviews = await reviewsResponse.json();

                setProduct(productData);
                setPublishers(publishersData);

                const shuffled = [...allReviews].sort(() => 0.5 - Math.random());
                const randomCount = Math.floor(Math.random() * 4) + 2;
                const selected = shuffled.slice(0, randomCount);
                setReviews(selected);

            } catch (error) {
                console.error("Error fetching product details:", error);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchAllData();
        }
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