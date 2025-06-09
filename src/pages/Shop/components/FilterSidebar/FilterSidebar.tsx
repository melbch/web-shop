import React from "react";
import Slider from "@mui/material/Slider";
import type { FilterSidebarProps } from "./filterSidebarProps";
import { useNavigate } from "react-router-dom";

import GenreFilterButtons from "./GenreFilterButtons";
import AuthorFilterButtons from "./AuthorFilterButtons";

const FilterSidebar: React.FC<FilterSidebarProps> = ({ filters, setFilters, genres, authors }) => { 
    const navigate = useNavigate();
    
    const handlePriceRangeChange = (_: Event, newValue: number | number[]) => {
        if (Array.isArray(newValue)) {
            setFilters((prev) => ({
                ...prev,
                minPrice: newValue[0],
                maxPrice: newValue[1],
            }));
        }
    };

    const handleFeaturedClick = (key: string) => {
        const newFeatured = filters.featured === key ? "" : key;
        setFilters((prev) => ({
            ...prev,
            featured: newFeatured,
        }));

        const urlParams = new URLSearchParams(window.location.search);
        if (newFeatured) {
            urlParams.set("sort", newFeatured);
        } else {
            urlParams.delete("sort");
        }

        navigate(`${window.location.pathname}?${urlParams.toString()}`, { replace: true });
    };
    
    return (
        <div className="filter-sidebar overflow-auto hide-horizontal-scrollbar pb-6">
            <GenreFilterButtons 
                genres={genres}
                selectedGenres={filters.genre}
                onChange={(genreList) => setFilters((prev) => ({ ...prev, genre: genreList }))}
            />

            <AuthorFilterButtons 
                authors={authors}
                selectedAuthor={filters.author}
                onChange={(author) => setFilters((prev) => ({ ...prev, author }))}
            />

            <div className="mt-6 px-6 mb-50">
                <label className="block font-medium mb-2">Price Range</label>
                <Slider 
                    value={[filters.minPrice, filters.maxPrice]}
                    onChange={handlePriceRangeChange}
                    valueLabelDisplay="auto"
                    min={0}
                    max={100}
                    step={1}
                    disableSwap
                />
            </div> 

            <div className="mt-6 mb-5">
                <label className="block font-medium mb-2">Featured</label>
                <div className="flex flex-wrap gap-2">
                    {[
                        { key: "newest", label: "New Releases" },
                        { key: "bestsellers", label: "Best Sellers" },
                        { key: "leavingsoon", label: "Leaving Soon"},
                        { key: "onsale", label: "On Sale"},
                        { key: "pre_order", label: "Pre-Order"},
                    ].map(({ key, label }) => {
                        const isSelected = filters.featured === key;
                        return (
                            <button
                                key={key}
                                type="button"
                                className={`px-3 py-1 text-sm rounded border ${
                                    isSelected ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                                }`}
                                onClick={() => handleFeaturedClick(key)}
                            >
                                {label}
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default FilterSidebar;