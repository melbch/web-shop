import { useState } from "react";
import { Rating } from "@mui/material";
import type { Review } from "./ProductReviews";

interface ReviewFormProps {
    onSubmit: (review: Review) => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ onSubmit }) => {
    const [author, setAuthor] = useState("");
    const [email, setEmail] = useState("");
    const [rating, setRating] = useState<number>(0);
    const [comment, setComment] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!author || !email || !rating || !comment) return alert("Please fill all fields");

        onSubmit({
            id: Date.now(),
            author,
            email,
            rating,
            date: new Date().toISOString(),
            comment,
        });

        setAuthor("");
        setEmail("");
        setRating(0);
        setComment("");
    };

    return (
        <form onSubmit={handleSubmit} className="border p-6 rounded max-w-2xl mx-auto bg-white">
            <h3 className="text-xl font-semibold mb-4">Write a Review</h3>
            
            <div className="mb-4">
                <Rating
                    name="rating"
                    value={rating}
                    onChange={(_, value) => setRating(value ?? 0)}
                    precision={0.5}
                />
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="border p-2 flex-1 rounded" 
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-2 flex-1 rounded" 
                />
            </div>

            <div className="mb-4">
                <textarea 
                    placeholder="Your Review"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="border p-2 mb-4 w-full rounded resize-none overflow-y-auto"
                    rows={4}
                />
            </div>
            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Submit Review
            </button>
        </form>
    )
}

export default ReviewForm;