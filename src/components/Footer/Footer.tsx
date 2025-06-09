import React from "react";
import { Link } from "react-router-dom";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ContactInfo from "./ContactInfo";
import LinkList from "./LinkList";
import NewsletterSubscription from "./NewsletterSubscription";
import SocialMediaLinks from "./SocialMediaLinks";


const Footer: React.FC = () => {
  return (
    <footer className="w-full relative z-[1400]">
        <div className="bg-gray-800 text-neutral-300 py-8 w-full">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* Left Section */}
                    <div className="text-left">
                        <div className="flex items-center space-x-2 mb-4">
                            <AutoStoriesIcon style={{ color: "#d1d5db", fontSize: "28px" }} />
                            <Link 
                                to="/" 
                                className="text-neutral-300 text-2xl font-bold hover:text-blue-400"
                                style={{ fontFamily: "'Special Elite', sans-serif", position: "relative", top: "4px" }}
                            >
                                BookNook
                            </Link>
                        </div>
                        <p className="mb-4">
                            BookNook brings you a handpicked selection of books to discover your next great read. Dive into a world of hidden gems and unforgettable reads — all just a click away.
                        </p>
                        <ContactInfo />
                    </div>

                    {/* Center section */}
                    <div className="grid grid-cols-2 gap-8 text-left">
                        <LinkList title="Helpful Links" links={[
                            { to: "/", label: "Home" },
                            { to: "/about", label: "About" },
                            { to: "/membership", label: "Membership" },
                            { to: "/shop?sort=pre_order", label: "Pre-Orders" }
                        ]} />
                        <LinkList title="Other Links" links={[
                            { to: "/faq", label: "FAQ" },
                            { to: "/shop", label: "Shop" },
                            { to: "/signup", label: "Sign Up" },
                            { to: "/contact", label: "Contact" }
                        ]} />
                    </div>

                    {/* Right section */}
                    <div className="text-left">
                        <h3 className="text-lg font-bold mb-2">Join the family!</h3>
                        <NewsletterSubscription />
                    
                        <label className="text-lg font-bold block mb-2 mt-3">Social Community</label>
                        <SocialMediaLinks />
                    </div>
                
                </div>

                {/* Divider */}
                <div className="border-t border-gray-600 mt-8 mb-4"></div>

                {/* Copyright */}
                <div className="text-center text-sm text-gray-400">
                    <p>&copy; 2025 Melina Hansson. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;