import React from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';

interface UserActionProps {
    cartCount: number;
    toggleWishlist: () => void;
    toggleUser: () => void;
    toggleCart: () => void;
}

const UserActions: React.FC<UserActionProps> = ({ cartCount, toggleWishlist, toggleUser, toggleCart }) => (
    <div className="flex items-center space-x-2 ml-auto pr-8">
        <button onClick={toggleWishlist} className="text-gray-300 hover:!text-rose-500 transition-colors duration-200" aria-label="Wishlist">
            <FavoriteIcon />
        </button>
        <button onClick={toggleUser} className="text-gray-300 hover:text-white" aria-label="User account">
            <PersonIcon />
        </button>
        <button onClick={toggleCart} className="relative text-gray-300 hover:text-white" aria-label="Shopping cart">
            <Badge badgeContent={cartCount} color="primary" max={999} showZero>
                <ShoppingCartIcon style={{ color: '#CFCFCF' }} color="action" />
            </Badge>
        </button>
    </div>
);

export default UserActions;