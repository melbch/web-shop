import { useEffect, useState, useRef } from "react";

function useResponsiveBooksPerSlide() {
    const [booksPerSlide, setBooksPerSlide] = useState(3);
    const [maxBooks, setMaxBooks] = useState(9);
    const timeoutId = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleResize = () => {
            if (timeoutId.current) clearTimeout(timeoutId.current);
            timeoutId.current = setTimeout(() => {
                const width = window.innerWidth;
                if (width < 640) {
                    setBooksPerSlide(2);
                    setMaxBooks(6);
                } else {
                    setBooksPerSlide(3);
                    setMaxBooks(9);
                }
            }, 150);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            if (timeoutId.current) clearTimeout(timeoutId.current);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return { booksPerSlide, maxBooks };
}

export default useResponsiveBooksPerSlide;