import React from "react";
import ReviewItem from "./ReviewItem";

export interface Review {
    id: number;
    author: string;
    rating: number;
    email: string;
    comment: string;
    date: string;
}

interface ProductReviewsProps {
    reviews: Review[];
}

const ProductReviews: React.FC<ProductReviewsProps> = ({ reviews }) => {
    return (
        <section className="product-reviews my-10 px-2 max-w-2xl mx-auto mt-16 mb-16">
            <h3 className="text-xl font-bold mb-6">Reader Reviews</h3>
            
            {reviews.length === 0 ? (
                <p className="text-gray-600">No reviews yet.</p>
            ) : (
                <div className="reviews-scroll max-h-96 overflow-y-auto pr-2 space-y-4">
                    {reviews.map((review) => (
                        <ReviewItem key={review.id} review={review} />
                    ))}
                </div>
            )}
        </section>
    );
};

export default ProductReviews;