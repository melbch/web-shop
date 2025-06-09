import React from "react";
import { Rating } from "@mui/material";
import type { Product } from "../../../types/productTypes";

interface Props {
    product: Product;
    publisher: string;
}

const ProductInfoSection: React.FC<Props> = ({ product, publisher }) => {
    return (
        <div className="flex flex-col max-w-2xl w-full text-left">
            <h3 className="text-1xl font-bold mb-2">By {product.author}</h3>
            <h2 className="text-2xl font-bold mb-2">{product.title}</h2>

            <Rating
                name="read-only"
                value={product.rating}
                precision={0.5}
                readOnly
                className="mb-2"
            />

            <p className="text-lg font-semibold mb-3">
                {product.onSale ? (
                    <>
                      <span className="line-through mr-2">${product.price}</span>
                      <span className="text-red-500">${product.salePrice}</span>
                    </>
                ) : (
                    `$${product.price}`
                )}
            </p>

            <div className="flex-1">
                {product.description.split("\n").map((paragraph, idx) => (
                    <p
                        key={idx}
                        className="mb-1.5 text-base text-gray-800 leading-relaxed text-justify"
                    >
                        {paragraph}
                    </p>
                ))}
            </div>

            <div className="border-l border-gray-300 pl-3 mb-4">
                <p className="text-sm text-gray-500">
                    <span className="font-semibold">Published:</span>{" "}
                    {product.publishedDate}
                </p>
                <p className="text-sm text-gray-500">
                    <span className="font-semibold">Publisher:</span> {publisher}
                </p>
                <p className="text-sm text-gray-500">
                    <span className="font-semibold">Language:</span> English
                </p>
                <p className="text-sm text-gray-500">
                    <span className="font-semibold">Genres:</span>{" "}
                    {Array.isArray(product.genre)
                        ? product.genre.join(", ")
                        : product.genre}
                </p>
            </div>
        </div>
    );
};

export default ProductInfoSection;