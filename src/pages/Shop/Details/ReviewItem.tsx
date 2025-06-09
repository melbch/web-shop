import React from "react";
import Avatar from "@mui/material/Avatar";
import type { Review } from "./ProductReviews";
import { Rating } from "@mui/material";

interface ReviewItemProps {
    review: Review;
}

const ReviewItem: React.FC<ReviewItemProps> = ({ review }) => {
    return (
        <div className="flex items-start gap-4 pb-4 border-b border-gray-200 text-left">
            <Avatar>{review.author.charAt(0).toUpperCase()}</Avatar>
            <div>
                <Rating value={review.rating} readOnly precision={0.5} size="small" />
                <p className="font-semibold">{review.author}</p>
                <p className="text-sm text-gray-500 italic mt-1 mb-1">
                    {new Date(review.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })}</p>
                <p>{review.comment}</p>
            </div>
        </div>
    )
}

export default ReviewItem;