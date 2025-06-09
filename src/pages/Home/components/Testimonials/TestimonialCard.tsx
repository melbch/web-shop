import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

type Testimonial = {
    id: number;
    name: string;
    feedback: string;
};

interface TestimonialCardProps {
    testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => (
    <div
        className="
            relative bg-white rounded-lg shadow-md p-6 w-1/2 transition-transform duration-500
            h-64 md:h-60 lg:h-64
            flex flex-col
        "
    >
        <FaQuoteLeft className="absolute top-4 left-4 w-6 h-6 text-gray-300" />
        <p className="text-gray-600 text-left text-sm flex-grow leading-relaxed mt-5">
            {testimonial.feedback}
        </p>
        <div className="flex items-center mb-4">
            <h4 className="text-md font-semibold text-gray-800 mt-3 mb-3">
                {testimonial.name}
            </h4>
        </div>
    </div>
);

export default TestimonialCard;