import React from "react";

interface Props {
    genres: string[];
    selectedGenres: string[];
    onChange: (updatedGenres: string[]) => void;
}

const GenreFilterButtons: React.FC<Props> = ({ genres, selectedGenres, onChange }) => {
    return (
        <div>
            <label className="block font-medium mb-2">Genres</label>
            <div className="flex flex-wrap gap-2">
                {genres.map((genre) => {
                    const isSelected = selectedGenres.includes(genre);
                    return (
                        <button
                            key={genre}
                            type="button"
                            className={`px-3 py-1 text-sm rounded border ${
                                isSelected ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                            }`}
                            onClick={() => {
                                const updated = isSelected
                                    ? selectedGenres.filter((g) => g !== genre)
                                    : [...selectedGenres, genre];
                                onChange(updated);
                            }}
                        >
                            {genre}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default GenreFilterButtons;