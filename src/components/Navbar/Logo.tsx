import React from "react";
import { Link } from "react-router-dom";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

interface LogoProps {
    isMobile?: boolean;
}

const Logo: React.FC<LogoProps> = ({ isMobile = false }) => {
    const containerClasses = isMobile
        ? "absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 md:hidden"
        : "hidden md:flex items-center space-x-2";

    const wrapperClasses = "flex items-center space-x-2 text-neutral-300 font-bold select-non"

    return (
        <Link 
            to="/" 
            className={`${containerClasses}`} 
            style={{ fontFamily: "'Special Elite', sans-serif" }}
        >
            <div className={wrapperClasses}>
                <AutoStoriesIcon style={{ color: "#d1d5db", fontSize: isMobile ? 24 : 28 }} />
                <span className="text-[1.5rem] leading-none relative top-[3px]">
                    BookNook
                </span>
            </div>
        </Link>
    );
};

export default Logo;