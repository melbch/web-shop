import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import type { Filters } from "../../../../../types/filterTypes";

export const useUrlFilters = (
    setFilters: React.Dispatch<React.SetStateAction<Filters>>
) : void => { 
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const q = params.get("q") ?? "";
        const author = params.get("author") ?? "";
        const sort = (params.get("sort") ?? "").toLowerCase();
        const genreParam = params.get("genre") ?? "";
        const genreArray = genreParam ? genreParam.split(",").map((g) => g.trim()) : [];

        setFilters((prev) => ({
            ...prev,
            title: q,
            author,
            featured: ["newest", "bestsellers", "leavingsoon", "onsale", "pre_order"].includes(sort) 
                ? sort 
                : "",
            genre: genreArray,
        }));
    }, [location.search, setFilters]);
};