import { useEffect, useState } from "react";

type Testimonial = {
    id: number;
    name: string;
    feedback: string;
};

const useTestimonials = () => {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await fetch("http://localhost:5000/testimonials");
                if (!response.ok) {
                    throw new Error("Failed to fetch testimonials");
                }
                const data: Testimonial[] = await response.json();
                setTestimonials(data);
            } catch (err) {
                setError((err as Error).message);
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchTestimonials();
    }, []);

    return { testimonials, loading, error };
};

export default useTestimonials;