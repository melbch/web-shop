import { useEffect, useState } from "react";
import testimonialsData from "../../../../../data/testimonials";

export type Testimonial = {
    id: number;
    name: string;
    feedback: string;
};

const useTestimonials = () => {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        try {
            setTestimonials(testimonialsData);
        } catch (err) {
            setError((err as Error).message);
            console.error(err);
        } finally {
            setLoading(false);
        }
    }, []);

    return { testimonials, loading, error };
};

export default useTestimonials;