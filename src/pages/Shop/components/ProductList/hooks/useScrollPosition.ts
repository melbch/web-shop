import { useEffect, useState } from "react";

export const useScrollPosition = (threshold = 100, debounceDelay = 100) => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        let timeout: number;
        
        const handleScroll = () => {
            clearTimeout(timeout);
            timeout = window.setTimeout(() => {
                const currentScrollY = window.scrollY;
                setScrollPosition(currentScrollY > threshold ? currentScrollY : 0);
            }, debounceDelay);
        };
      
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [threshold, debounceDelay]);

    return scrollPosition;
};