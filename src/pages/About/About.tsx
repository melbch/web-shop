import React from "react";;
import { Link } from "react-router-dom";
import JoinTheFamily from "../../components/JoinTheFamily";

const About: React.FC = () => {
    return (
        <main>
            <section className="flex flex-col md:flex-row items-center p-8 mb-20 bg-white relative gap-y-12 md:gap-x-16">
                <div 
                    className="relative flex justify-center items-center w-full md:w-[45%] px-6 md:px-10"
                    style={{ minWidth: '280px', maxWidth: '45%' }}
                >
                    <div
                        className="flex flex-row md:flex-col lg:flex-row justify-center items-center relative"
                        style={{ maxWidth: '100%', flexShrink: 1, overflow: 'visible' }}
                    >
                        <img 
                            src="/images/bookstore.jpg"
                            alt="image depicting the interior of a brightly lit bookstore"
                            className="  
                                block
                                shadow-lg rounded-lg 
                                z-0 
                                object-cover
                                transform -rotate-3 lg:-translate-x-6
                                flex-shrink-0
                                w-full max-w-[300px] md:max-w-[360px] lg:max-w-[380px]  
                                h-auto
                                mb-0 md:mb-[-3rem] lg:mb-0
                                mr-0 sm:mr-[-2rem] md:mr-0 lg:mr-0
                            "
                        />
                        <img 
                            src="/images/girl-carrying-books-smile.jpg"
                            alt="woman looking through a bookshelf where the books have been placed in a circle"
                            className="
                                block
                                rounded-lg shadow-lg 
                                z-10 
                                object-cover
                                transform rotate-2
                                flex-shrink-0
                                w-full max-w-[260px] md:max-w-[310px] lg:max-w-[350px] 
                                h-auto
                                relative -ml-6 sm:-ml-8
                                md:mt-[-3rem] md:ml-12
                                lg:absolute lg:top-[17%] lg:left-auto lg:translate-x-6 lg:right-[-6rem]
                            "
                        />
                    </div>
                </div>
                <div 
                    className="mt-5 md:mt-0 px-3 md:px-12 max-w-[600px] w-full md:w-[55%]"
                    style={{ minWidth: '320px' }}
                >
                    <h1 className="text-4xl font-bold text-gray-800 mb-3 mt:0 md:mt-10">Welcome to BookNook!</h1>
                    <p className="text-justify leading-relaxed">Since travelling the streets in our book bus in 1995 and opening the doors of our first physical store in 2015, BookNook has grown from a cozy corner shop into a thoughtfully curated destination for book lovers of all kinds. Every title on our shelves has been handpicked to reflect our passion for storytelling, our support for independent voices, and our commitment to building a reading community. Whether you're after a timeless classic, an under-the-radar gem, or your next comfort read, you'll find something special waiting here for you. Welcome to our story — we're so glad you're a part of it.</p>
                    <ul className="mt-4 space-y-1 text-sm text-gray-700">
                        <li>📖 Handpicked collection of quality reads</li>
                        <li>📦 Fast and secure shipping, wherever you are</li>
                        <li>🏡 Family-owned and community-driven since 1995</li>
                        <li>🎁 Special promotions and surprises for our loyal customers</li>
                    </ul>
                    <Link to="/contact">
                        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                            Contact Us
                        </button>
                    </Link>
                </div>
            </section>

            <section className="bg-gray-50 py-12 px-6">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Journey</h2>
                <div className="max-w-4xl mx-auto space-y-6">
                    {[
                        { year: "1995", description: "We hit the road with our little book bus, bringing stories and smiles to neighborhoods all around."},
                        { year: "2002", description: "Began re-selling carefully curated books at local street markets, connecting directly with readers and sharing our love for unique and timeless stories." },
                        { year: "2005", description: "Opened our very first cozy physical bookstore, creating a welcoming space where book lovers from the local community could gather, explore, and share their passion for reading." },
                        { year: "2008", description: "Kicked off fun in-store events like author readings, book clubs, kids' read-alongs, and trivia nights." },
                        { year: "2012", description: "Launched our online store, so you could shop your favorite books from the comfort of your couch." },
                        { year: "2013", description: "Released our first mobile app — now you can browse and buy books anytime, anywhere." },
                        { year: "2015", description: "Started a monthly newsletter packed with staff picks, book recs, and stories from our awesome community." },
                        { year: "2018", description: "Launched the BookNook Club — our special membership with perks like exclusive discounts and early event access." },
                        { year: "2020", description: "With more readers joining in, we expanded international shipping and stocked up to reach book lovers worldwide." },
                        { year: "2024", description: "Stepped up community efforts by teaming up with schools and libraries to spread the joy of reading even further." },
                        { year: "2026", description: "By the fall of 2026 we will have expanded and launched physical stores in the UK, Sweden and Australia!" },
                    ].map((event, index) => (
                        <div key={index} className="grid grid-cols-[auto,1fr] gap-x-4 items-start text-left">
                            <div className="text-blue-600 font-bold">{event.year}</div>
                            <p className="text-gray-700 leading-relaxed">{event.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section
                className="relative bg-cover bg-center text-white py-24 px-6 mt-10"
                style={{ backgroundImage: "url('/images/woman-grabbing-book.jpg')" }}
            >
                <div className="bg-black bg-opacity-50 p-10 rounded max-w-xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-4">New Customers Get 40% Off!</h2>
                    <p className="mb-6">Sign up today and enjoy your first purchase with a big discount.</p>
                    <Link to="/shop">
                        <button className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 rounded font-semibold">
                            Visit Our Shop
                        </button>
                    </Link>
                </div>
            </section>

            <JoinTheFamily />
        </main>
    );
};

export default About;