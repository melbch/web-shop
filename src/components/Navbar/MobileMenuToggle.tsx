import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';

interface MobileMenuToggleProps {
    isMenuOpen: boolean;
    isSearchOpen: boolean;
    toggleMenu: () => void;
    toggleSearch: () => void;
}

const MobileMenuToggle: React.FC<MobileMenuToggleProps> = ({ isMenuOpen, isSearchOpen, toggleMenu, toggleSearch }) => (
    <div className="flex items-center space-x-2 md:hidden">
        <button 
            onClick={toggleMenu} 
            className="text-white" 
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
        <button 
            onClick={toggleSearch} 
            className="text-gray-300 hover:text-white" 
            aria-label={isSearchOpen ? "Close search" : "Open search"}
        >
            <SearchIcon />
        </button>
    </div>
);

export default MobileMenuToggle;