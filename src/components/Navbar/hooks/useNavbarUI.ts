import { useState } from "react";

export const useNavbarUI = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isSearchOpen, setSearchOpen] = useState(false);
    const [isWishlistOpen, setWishlistOpen] = useState(false);
    const [isUserOpen, setUserOpen] = useState(false);
    const [isCartOpen, setCartOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(prev => !prev);
    const toggleSearch = () => setSearchOpen(prev => !prev);
    const toggleWishlist = () => setWishlistOpen(prev => !prev);
    const toggleUser = () => setUserOpen(prev => !prev);
    const toggleCart = () => setCartOpen(prev => !prev);

    return {
        isMenuOpen, toggleMenu,
        isSearchOpen, toggleSearch,
        isWishlistOpen, toggleWishlist,
        isUserOpen, toggleUser,
        isCartOpen, toggleCart,
    };
};