import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface Props {
    quantity: number;
    onQuantityChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onAddToCart: () => void;
}

const ProductPurchaseControls: React.FC<Props> = ({
    quantity,
    onQuantityChange,
    onAddToCart,
}) => {
    return (
        <div className="flex justify-between items-center mt-4 gap-1">
            <div className="flex items-center gap-2">
                <input
                    type="number"
                    min={1}
                    value={quantity}
                    onChange={onQuantityChange}
                    className="w-16 h-10 border rounded px-2 py-1 text-center text-sm"
                />
                <button
                    onClick={onAddToCart}
                    className="inline-flex h-10 bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 items-center gap-1 text-sm max-w-fit"
                >
                    Add to Cart
                    <AddShoppingCartIcon fontSize="small" />
                </button>
            </div>    
            <button className="inline-flex h-10 bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 items-center gap-1 text-sm max-w-fit">
                Wishlist
                <FavoriteIcon fontSize="small" />
            </button>
        </div>
    );
};

export default ProductPurchaseControls;