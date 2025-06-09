import { type Dispatch, useEffect, type SetStateAction } from "react";

const useAutoSlide = (
    length: number,
    itemsPerSlide: number,
    intervalMs: number,
    onSlideChange: Dispatch<SetStateAction<number>>
) => {
    useEffect(() => {
        if (length === 0) return;

        const interval = setInterval(() => {
            onSlideChange((prev) => (prev + itemsPerSlide) % length);
        }, intervalMs);

        return () => clearInterval(interval);
    }, [length, itemsPerSlide, intervalMs, onSlideChange]);
};

export default useAutoSlide;