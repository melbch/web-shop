import { useState } from "react";

const NewsletterSubscription: React.FC = () => {
    const [email, setEmail] = useState("");
    const [showAlert, setShowAlert] = useState(false);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);

    const handleSubmit = () => {
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 2000);
    };

    return (
        <>
            {showAlert && (
                <div className="fixed bottom-4 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50 animate-fadeInOut">
                    Subscribed with email: {email}
                </div>
            )}

            <div className="flex">
                <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                    className="px-4 py-2 text-black rounded-l-md"
                    aria-label="Email address for newsletter subscription"
                />
                <button
                    onClick={handleSubmit}
                    className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600"
                >
                    Subscribe
                </button>
            </div>
        </>
    );
};

export default NewsletterSubscription;