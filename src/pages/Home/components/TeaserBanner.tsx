const TeaserBanner = () => {
    return (
        <section className="relative w-full bg-gradient-to-r from-emerald-800 via-neutral-800 to-violet-700 text-white pt-2 pb-0 sm:py-6 px-6 sm:px-8 lg:px-20 mt-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full sm:max-w-7xl mx-auto">
                {/* Left section */}
                <div className="order-2 sm:order-3 md:order-1 flex justify-center md:justify-start w-full sm:w-auto md:w-[192px] mt-0 sm:mt-0">
                    <img
                        src="/images/coming-soon-teal.png"
                        alt="The Words 'Coming Soon' with a teal-colored background and asymetrical borders"
                        className="w-[9rem] h-[9rem] sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain m-0"
                    />
                </div>

                {/* Middle section */}
                <div className="order-1 sm:order-1 md:order-2 w-full sm:w-3/4 md:flex-1 flex flex-col justify-center text-center items-center sm:text-left md:text-center sm:items-start md:items-center space-y-1 mt-0 sm:mt-0">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-wide uppercase m-0 leading-tight mt-5 mb-1 animate-pulse">
                        Something Bookish is Coming...
                    </h2>
                    <p className="text-gray-300 text-md md:text-lg w-full max-w-[90%] sm:max-w-md m-0 leading-snug">
                        Our blog is launching soon — filled with author interviews, reading lists, behind-the-scenes stories, sneak peeks and everything we can't fit on the shelf. Stay tuned!
                    </p>
                </div>

                {/* Right image */}
                <div className="hidden md:flex order-3 md:order-3 items-center justify-end md:w-auto">
                    <img
                        src="/images/stacked-books.png"
                        alt="Colorful illustration of a stack of books"
                        className="w-36 h-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default TeaserBanner; 