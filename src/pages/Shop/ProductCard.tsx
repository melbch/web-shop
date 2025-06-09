import React from "react";
import type { Product } from "../../types/productTypes";
import { Link } from "react-router-dom";
import { useCart } from "../../context/useCart";
import { Rating } from "@mui/material";


interface ProductCardProps {
    product: Product;
    compact?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, compact = false }) => {
    const imageUrl = product.image || "https://marketplace.canva.com/EAFZJKlK37k/1/0/1067w/canva-grey-minimalist-e-book-business-book-cover-7XXbQVOIgfg.jpg";
    
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        const item = {
            id: product.id,
            title: product.title,
            price: product.onSale ? product.salePrice : product.price,
            image: imageUrl,
            quantity: 1,
        };

        addToCart(item);
    };

    return (
        <div
            className={`product-card p-4 border border-gray-300 rounded-lg bg-gray-50 hover:border-gray-500 hover:shadow-md focus-within:border-gray-500 transition duration-200
                ${compact ? "max-w-xs text-sm flex flex-col h-full" : "max-w-md text-base flex flex-col h-full"}`}
        >
    
            <Link to={`/product/${product.id}`} className="flex flex-col flex-grow">
                <div>
                    <div className="overflow-hidden rounded-md">
                        <img
                            src={imageUrl}
                            alt={product.title}
                            className={`w-full transition-transform duration-300 hover:scale-105 hover:shadow-lg
                                ${compact ? "h-64 w-full object-contain" : "h-auto w-full object-contain"}`}
                        />
                    </div>
                    <h3
                        className={`font-bold italic mt-2 mb-2 text-gray-900
                            ${compact ? "text-lg" : "text-xl"}`}
                    >
                        {product.title}
                    </h3>
                    <h2
                        className={`mb-2 text-gray-700 font-medium
                            ${compact ? "text-sm" : "text-lg"}`}
                    >
                        {product.author}
                    </h2>
                </div>

                <div className="flex justify-center mb-2">
                    <Rating
                        name="read-only"
                        size={compact ? "small" : "medium"}
                        value={product.rating}
                        precision={0.5}
                        readOnly
                    />
                </div>

                <p
                    className={`mb-2 text-gray-600 flex-grow
                        ${compact ? "text-xs leading-tight" : "text-sm"}`}
                    style={{ minHeight: '3.5rem' }}
                >
                    {product.shortDescription}
                </p>

                <p className={`font-semibold ${compact ? "text-sm" : "text-base"}`}>
                    {product.onSale ? (
                        <>
                            <span className="line-through mr-2">${product.price}</span>
                            <span className="text-red-500">${product.salePrice}</span>
                        </>
                    ) : (
                        `$${product.price}`
                    )}
                </p>
            </Link>

            <button
                onClick={handleAddToCart}
                className={`mt-2 py-1 px-2 font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400
                    ${compact ? "text-xs bg-blue-500 hover:bg-blue-600" : "text-sm bg-blue-600 hover:bg-blue-700"} text-white`}
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;