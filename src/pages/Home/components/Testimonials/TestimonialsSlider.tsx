import React, { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import useTestimonials from "./hooks/useTestimonials";
import useAutoSlide from "./hooks/useAutoSlide";

const ITEMS_PER_SLIDE = 2;
const AUTOPLAY_INTERVAL = 7000;

const TestimonialsSlider: React.FC = () => {
    const { testimonials, loading, error } = useTestimonials();
    const [startIndex, setStartIndex] = useState(0);

    useAutoSlide(testimonials.length, ITEMS_PER_SLIDE, AUTOPLAY_INTERVAL, setStartIndex);

    const getVisibleTestimonials = () => {
        if (testimonials.length <= ITEMS_PER_SLIDE) return testimonials;
        return [
            ...testimonials.slice(startIndex, startIndex + ITEMS_PER_SLIDE),
            ...(startIndex + ITEMS_PER_SLIDE > testimonials.length
                ? testimonials.slice(0, (startIndex + ITEMS_PER_SLIDE) % testimonials.length)
                : []),
        ];
    };

    if (loading) return <p>Loading testimonials...</p>;
    if (error) return <p>Error loading testimonials: {error}</p>;
    
    return (
        <section className="py-16 bg-gray-50 mt-10">
            <h2 className="text-2xl md:text-4xl font-bold [font-variant:small-caps] text-gray-900 mb-6 border-b-4 inline-block pb-1 md:mb-8">
                Testimonials
            </h2>

            <div className="container mx-auto px-4 flex flex-col md:flex-row items-start md:items-center justify-between">
                <div className="mb-10 md:mb-0 md:w-1/3 md:mr-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Readers' Feedback</h2>
                    <p className="text-gray-600">
                        Share your thoughts and shape the future of BookNook with your valuable feedback.
                    </p>
                </div>

                <div className="md:w-2/3 flex space-x-4 overflow-hidden">
                    {getVisibleTestimonials().map((testimonial) => (
                        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSlider; 