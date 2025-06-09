import React, { useState } from "react";
import { useParams } from "react-router-dom";
import type { Review } from "./ProductReviews";
import ProductReviews from "./ProductReviews";
import ReviewForm from "./ReviewForm";
import OtherBooksByAuthor from "./OtherBooksByAuthor";
import { useCart } from "../../../context/useCart";
import ProductNavigationButtons from "./ProductNavigationButtons";
import ProductInfoSection from "./ProductInfoSection";
import ProductPurchaseControls from "./ProductPurchaseControls";
import { useProductDetail } from "./hooks/useProductDetail";

import { CircularProgress } from "@mui/material";

const ProductDetail = () => {
    const { id } = useParams<{ id: string }>();
    const {
        product,
        reviews,
        loading,
        assignedPublisher,
        addReview,
    } = useProductDetail(id);
    
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    const currentId = parseInt(id || "1");

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(1, Number(e.target.value));
        setQuantity(value);
    };
    
    const handleAddToCart = async () => {
        if (!product) return;

        const cartItem = {
            id: product.id,
            title: product.title,
            price: product.onSale ? product.salePrice : product.price,
            image: product.image,
            quantity: quantity,
        };

        addToCart(cartItem);
    };

    const handleReviewSubmit = (newReview: Review) => {
        addReview(newReview);
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <CircularProgress />
            </div>
        )
    }

    if (!product) {
        return <div>Product not found.</div>;
    }

    const filteredReviews = reviews
        .filter((review) => new Date(review.date) >= new Date(product.publishedDate))
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <div className="product-detail px-4 pt-12">
            <ProductNavigationButtons currentId={currentId} />
            
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-shrink-0">
                        <img 
                            src={product.image} 
                            alt={product.title} 
                            className="w-full max-w-[200px] sm:max-w-[240px] md:max-w-[300px] lg:max-w-[380px] h-auto" />
                    </div>

                    <div className="flex flex-col max-w-2xl w-full text-left">
                        <ProductInfoSection 
                            product={product}
                            publisher={assignedPublisher}
                        />
                        <ProductPurchaseControls 
                            quantity={quantity}
                            onQuantityChange={handleQuantityChange}
                            onAddToCart={handleAddToCart}
                        />
                    </div>
                </div>
            </div>

            <ProductReviews reviews={filteredReviews} />
            <ReviewForm onSubmit={handleReviewSubmit} />
            <OtherBooksByAuthor author={product.author} currentProductId={product.id} />
        </div>
    );
};

export default ProductDetail;