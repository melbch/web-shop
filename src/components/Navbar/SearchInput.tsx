import React from "react";
import SearchIcon from '@mui/icons-material/Search';

interface Props {
    query: string;
    setQuery: (q: string) => void;
    onSubmit: (e: React.FormEvent) => void;
    onFocus: () => void;
}

const SearchInput: React.FC<Props> = ({ query, setQuery, onSubmit, onFocus }) => (
    <form onSubmit={onSubmit} className="relative w-full">
        <input 
            type="text"
            placeholder="What are you looking for?"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onFocus={onFocus}
            className="pl-10 pr-4 py-2 rounded bg-gray-700 text-gray-300 w-full
                        placeholder-gray-400 placeholder-opacity-75 placeholder:italic
                        shadow-sm tracking-wide
                        focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-opacity-50
                        transition duration-300 ease-in-out"
        />
        <button type="submit" className="absolute left-3 top-2 text-white">
            <SearchIcon />
        </button>
    </form>
);

export default SearchInput;