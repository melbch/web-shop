import React from 'react';
import { useProducts } from '../../context/useProduct';
import { useCart } from '../../context/useCart';
import SearchBar from './SearchBar';
import WishlistModal from '../Modals/WishlistModal';
import UserModal from '../Modals/UserModal';
import CartModal from '../Cart/CartModal';

import NavLinks from './NavLinks';
import MobileMenuToggle from './MobileMenuToggle';
import Logo from './Logo';
import UserActions from './UserActions';
import MobileDrawer from './MobileDrawer';
import { useNavbarUI } from './hooks/useNavbarUI';

const Navbar: React.FC = () => {
    const { products } = useProducts();
    const { cartItems } = useCart();
    
    const {
        isMenuOpen, toggleMenu,
        isSearchOpen, toggleSearch,
        isWishlistOpen, toggleWishlist,
        isUserOpen, toggleUser,
        isCartOpen, toggleCart,
    } = useNavbarUI();

    const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    const openLoginFromWishlist = () => {
        toggleWishlist();
        toggleUser();
    }
    
    return (
        <div className="bg-gray-800 w-full relative z-[1300] shadow-md">
           
            {/* Top row */}
            <div className="flex items-center justify-between px-4 md:px-0 py-6 space-x-4 md:space-x-6">
                <MobileMenuToggle 
                    isMenuOpen={isMenuOpen}
                    isSearchOpen={isSearchOpen}
                    toggleMenu={toggleMenu}
                    toggleSearch={toggleSearch}
                />

                <div className="hidden md:block">
                    <Logo />
                </div>
                
                <div className="block md:hidden relative w-full">
                    <Logo isMobile />
                </div>

                {/* Desktop search */}
                <div className="hidden md:flex flex-grow justify-center max-w-2xl">
                    <SearchBar products={products} />
                </div>

                <UserActions 
                    cartCount={cartCount}
                    toggleWishlist={toggleWishlist}
                    toggleUser={toggleUser}
                    toggleCart={toggleCart}
                />
            </div>

            {/* Mobile search */}
            {isSearchOpen && (
                <div className="md:hidden px-4 pb-4 mt-2">
                    <SearchBar products={products} />
                </div>
            )}

            {/* Desktop nav */}
            <div className="hidden md:flex flex-col border-t border-gray-600 bg-gray-800 px-6 py-3">
                <NavLinks className="flex justify-evenly items-center w-full px-6" />
            </div>

            {/* Mobile nav */}
            <MobileDrawer isOpen={isMenuOpen} onClose={toggleMenu}>
                <NavLinks onClick={toggleMenu} className="flex flex-col space-y-2" />
            </MobileDrawer>

            {/* Modals */}
            {isWishlistOpen && (
                <WishlistModal 
                    onClose={toggleWishlist}
                    openLoginModal={openLoginFromWishlist}
                />
            )}
            {isUserOpen && <UserModal onClose={toggleUser} />}
            {isCartOpen && <CartModal onClose={toggleCart} />}
        </div>
    );
};
        
export default Navbar;