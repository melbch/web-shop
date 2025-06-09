import React from "react";

interface Props {
    authors: string[];
    selectedAuthor: string;
    onChange: (author: string) => void;
}

const AuthorFilterButtons: React.FC<Props> = ({ authors, selectedAuthor, onChange }) => {
    return (
        <div className="mt-6">
            <label className="block font-medium b-2">Authors</label>
            <div className="flex flex-wrap gap-2">
                <button
                    type="button"
                    className={`inline-flex items-center justify-center px-3 py-1 text-sm rounded border ${
                        selectedAuthor === "" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                    onClick={() => onChange("")}
                >
                    All
                </button>
                
                {authors.map((author) => (
                    <button
                        key={author}
                        type="button"
                        className={`inline-flex items-center justify-center px-3 py-1 text-sm rounded border ${
                            selectedAuthor === author ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                        }`}
                        onClick={() => onChange(selectedAuthor === author ? "" : author)}
                    >
                        {author}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default AuthorFilterButtons;