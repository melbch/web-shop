import { useState } from "react";
import JoinTheFamily from "../../components/JoinTheFamily";
import FAQItem from "../../components/FAQItem";
import SupportForm from "./SupportForm";

const faqs = [
    {
        question: "How can I purchase your books?",
        answer: "You can purchase our books here through the online store, our you can visit our physical store in Booktown.",
    },
    {
        question: "What is your return policy?",
        answer: "You can return any book within 30 days for a full refund.",
    },
    {
        question: "Can I return books I bought online in your physical store?",
        answer: "Yes! All you need is the digital receipt you received with the email you recieved upon placing your order in our online store.",
    },
    {
        question: "Do you ship internationally?",
        answer: "Yes, we ship to most countries worldwide with tracking options.",
    },
    {
        question: "How can I track my order?",
        answer: "After placing your order, you'll recieve a tracking link via email.",
    },
    {
        question: "Can I sell my used books to you?",
        answer: "Yes! Contact us to get our book resell form and we'll get back to you.",
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, PayPal, Apple Pay, Klarna and Google Pay both online and in-store.",
    },
    {
        question: "Can I pre-order upcoming book releases?",
        answer: "Definitely! We offer pre-orders on select upcoming titles—but you need to have an account with us as this is a perk only available to our members.",
    },
    {
        question: "Do you have a loyalty or rewards program?",
        answer: "Yes! When you create an account with us, you're automatically enrolled in our rewards program. Earn points with every purchase and redeem them for discounts and early access to new releases.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white py-16 px-6">
            <div className="text-center mb-12 max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold text-gray-800">Frequently Asked Questions</h2>
                <p className="mt-4 text-gray-600">
                    Got questions? We've got answers! From placing an order to shipping and returns, here's everything you need to know to shop with confidence.
                </p>
            </div>

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
                <div className="md:w-1/3">
                    <SupportForm />
                </div>

                <dl className="md:w-2/3 space-y-6">
                    {faqs.map((faq, index) => (
                        <FAQItem 
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onToggle={() => handleToggleFAQ(index)}
                        />
                    ))}
                </dl>
            </div>

            <div className="mt-20">
                <JoinTheFamily />
            </div>
        </section>
    );
};