import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";

const ContactPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 px-6 py-16 max-w-7xl mx-auto">
            <h1 className="text-4xl font-extrabold text-center mb-16">
                Got Questions? We've Got Answers!
            </h1>

            <div className="flex flex-col md:flex-row justify-center gap-10 mb-20">
                {[
                    {
                        icon: <LocationOnIcon style={{ fontSize: 48, color: "#3b82f6"}} />,
                        title: "Visit Us",
                        description: ( 
                                <>
                                    123 BookNook St.<br /> Booktown, BK 45678 
                                </>
                            ),
                    },
                    {
                        icon: <CallIcon style={{ fontSize: 48, color: "#3b82f6"}} />,
                        title: "Call Us",
                        description: "+00 123 456 789",
                    },
                    {
                        icon: <EmailIcon style={{ fontSize: 48, color: "#3b82f6"}} />,
                        title: "Email Us",
                        description: "info@booknook.com",
                    },
                ].map((props, idx) => (
                    <ContactCard key={idx} {...props} />
                ))}
            </div>

            <div className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto justify-center">
                
                <div className="flex-1 max-w-lg bg-gray-100 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-3 mt-10">Get In Touch</h2>
                    <p className="mb-6 text-gray-600 text-justified px-6">
                        Contact us directly for inquiries, suggestions, or to share your thoughts. We're eager to hear from you.
                    </p>
                    <ContactForm />
                </div>

                <div className="flex-1 max-w-lg bg-gray-100 rounded-lg shadow-md p-6 flex flex-col items-center justify-center text-gray-400">
                    <EngineeringIcon style={{ fontSize: 48, color: "#3b82f6"}} className="mb-4" />
                    <p className="text-xl font-semibold text-gray-500 text-center italic">Something awesome is coming soon!</p>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;