import { Link } from "react-router-dom";

const MembershipBanner = () => {
    return (
        <section className="relative w-full bg-gradient-to-r from-black via-purple-800 to-emerald-600 text-white py-6 px-6 sm:px-8 lg:px-14 flex items-center justify-between mt-14">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full">
                {/* Left section */}
                <div className="hidden md:block absolute top-1/2 transform -translate-y-1/2 -mt-2.5 h-32 w-auto object-contain">
                    <img 
                        src="/web-shop/images/colorful-open-book.png"
                        alt="Illustration of a colorful open book"
                        className="w-36 h-36 object-contain"
                    />
                </div>

                <div className="flex-1 flex justify-center">
                    {/* Middle section */}
                    <div className="flex flex-col flex-1 text-center justify-center md:static md:items-center sm:text-left md:text-center h-full">
                        <h2 className="text-2xl md:text-3xl font-bold tracking-wide uppercase mb-2">The BookNook Club</h2>
                        <p className="text-gray-300 text-sm md:text-lg max-w-md mx-auto sm:mx-0 sm:text-left sm:text-lg md:text-center">
                            Exclusive discounts, early access to new releases, personalized recommendations & more
                        </p>
                    </div>
                </div>

                {/* Right section */}
                <div className="mt-4 sm:mt-0 relative sm:absolute sm:right-4 lg:right-16 sm:top-1/2 sm:transform sm:-translate-y-1/2">
                    <Link
                        to="/membership"
                        className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full hover:bg-indigo-100 transition"
                        aria-label="Sign up for membership"
                    >
                        Sign Up - It&apos;s Free!
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default MembershipBanner; 