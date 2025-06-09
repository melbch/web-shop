import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import type { Product } from "../../../types/productTypes";

interface OtherBooksByAuthorProps {
    author: string;
    currentProductId: number;
}

const OtherBooksByAuthor: React.FC<OtherBooksByAuthorProps> = ({
    author,
    currentProductId,
}) => {
    const [books, setBooks] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch(`http://localhost:5000/books?author=${encodeURIComponent(author)}`);
                const data: Product[] = await response.json();
                setBooks(data.filter((book) => book.id !== currentProductId));
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchBooks();
    }, [author, currentProductId]);

    if (loading) return <p>Loading other books...</p>;

    return (
        <div className="pt-16 pb-16">
            <h3 className="text-xl font-semibold mb-4">More by {author}</h3>
            {books.length === 0 ? (
                <p>No other books by this author currently.</p>
            ) : (
                <div 
                    className="grid gap-4"
                    style={{ 
                        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                        gridAutoRows: '1fr',
                        justifyItems: "center",
                    }}
                >
                    {books.map((book) => (
                        <ProductCard key={book.id} product={book} compact />
                    ))}
                </div>
            )}
        </div>
    );
};

export default OtherBooksByAuthor;