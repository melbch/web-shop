import React from "react";
import { Link } from "react-router-dom";

interface NavLinksProps {
    className?: string;
    onClick?: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ className = '', onClick }) => {
    const links = [
        { to: "/shop?sort=newest", label: "New Releases" },
        { to: "/shop?sort=bestsellers", label: "Best Sellers" },
        { to: "/shop", label: "Shop All" },
        { to: "/shop?sort=onsale", label: "Special Offers" },
        { to: "/shop?sort=leavingsoon", label: "Leaving Soon" },
        { to: "/contact", label: "Contact" },
        { to: "/membership", label: "Membership" },
  ];

  return (
    <div className={`text-md text-gray-300 ${className}`}>
        {links.map(({ to, label }, idx) => (
            <React.Fragment key={to}>
                <Link
                    to={to}
                    onClick={onClick}
                    className="hover:text-white hover:underline underline-offset-4 px-2 tracking-wide"
                >
                        {label}
                </Link>
                {idx < links.length - 1 && !className?.includes("flex-col") && (
                    <span className="h-6 border-l border-gray-500 mx-2 hidden md:inline" />
                )}
            </React.Fragment>
        ))}
    </div>
  );
};

export default NavLinks;