import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserModal from "../../components/Modals/UserModal";
import JoinTheFamily from "../../components/JoinTheFamily";
import MembershipPerks from "./MembershipPerks";
import FAQItem from "../../components/FAQItem";
import membershipFAQs from "./membershipFAQs";
import CommunityCard from "./CommunityCard";

import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import MoneyIcon from '@mui/icons-material/Money';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const Membership: React.FC = () => {
    const navigate = useNavigate();
    const [isUserModalOpen, setUserModalOpen] = useState(false);
    const [openQuestions, setOpenQuestions] = useState<number | null>(null);
    
    const toggleQuestions = (index: number) => {
        setOpenQuestions(openQuestions === index ? null : index);
    };

    return (
        <div className="bg-white text-gray-800">
            {/* Hero section */}
            <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-16 gap-10 mt-10">
                <div className="md:w-1/2 space-y-6">
                    <h1 className="text-4xl font-bold text-gray-900 md:text-left pl-10">The BookNook Club</h1>
                    <p className="text-gray-600 text-lg md:text-left md:pl-10">
                        Welcome to the BookNook Club — a special membership created for our most passionate readers. Join us to unlock exclusive perks, special deals, and a whole lot of bookish fun. No fee, just plenty of stories (and savings)!
                    </p>
                    <div className="text-center md:text-left pl-10">
                        <button
                            onClick={() => navigate("/signup")}
                            className="bg-teal-500 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-full transition"
                        >
                            Sign Up, Get Reading
                        </button>
                    </div>
                    <p className="text-sm text-gray-600 text-center md:text-left pl-10">
                        Already a member?{" "}
                        <button onClick={() => setUserModalOpen(true)} className="text-blue-600 underline">
                            Login here
                        </button>
                    </p>
                </div>
                <div className="md:w-1/2 flex justify-center items-center">
                  <img src="/images/join-us-golden-teal.png" alt="Illustration inviting to join The BookNook Club" className="w-full max-w-xs" />
                </div>
            </section>

            {/* Perks section */}
            <section>
                <div className="max-w-5xl mx-auto text-center mt-16 mb-20">
                    <h2 className="text-3xl font-bold mb-8">Perks of Being a Member</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <MembershipPerks
                            icon={<EventAvailableIcon style={{ fontSize: 40 }} />}
                            title="Exclusive Member Days"
                            description="Enjoy private discounts and early access to new arrivals."
                        />
                        <MembershipPerks
                            icon={<MoneyIcon style={{ fontSize: 40 }} />}
                            title="Earn Points"
                            description="Get rewarded for every purchase. Earn points to spend on future purchases with every item you buy!"
                        />
                        <MembershipPerks
                            icon={<AccessTimeIcon style={{ fontSize: 40 }} />}
                            title="Early Access"
                            description="Be the first to know about exclusive releases and author events."
                        />
                    </div>
                </div>   
            </section>

            {/* Member exclusivity section */}
            <section className="bg-gray-900 py-24">
                <div className="max-w-3xl mx-auto text-center mt-26 mb-26">
                    <h2 className="text-3xl font-bold mb-8 text-gray-300">Be a Part of the Community!</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 place-content-center">
                        <CommunityCard
                            icon={<MenuBookIcon style={{ fontSize: 40 }} />}
                            title="The Book Club"
                            description="As a member, you can join our book club, engage in monthly discussions with other readers. As a member of the book club you'll get even bigger discounts on books that are chosen for the book club's monthly reading!"
                        />
                        <CommunityCard
                            icon={<EmojiEventsIcon style={{ fontSize: 40 }} />}
                            title="The Reading Challenge"
                            description="As a member you can join our year-long reading challenge! Earn points for every book you read that gets you closer to the goal and earn even more points when you finish the challenge!"
                        />
                    </div>
                </div>   
            </section>

            {/* FAQ section */}
            <section className="py-16 px-6 max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Membership FAQs</h2>
                <dl className="space-y-4">
                    {membershipFAQs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openQuestions === index}
                            onToggle={() => toggleQuestions(index)}
                        />
                    ))}
                </dl>
            </section>

            <JoinTheFamily />

            {isUserModalOpen && <UserModal onClose={() => setUserModalOpen(false)} />}
        </div>
    );
};

export default Membership;