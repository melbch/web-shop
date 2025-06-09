import ProductCard from "../ProductCard";
import books from "../../../data/books";

interface OtherBooksByAuthorProps {
    author: string;
    currentProductId: number;
}

const OtherBooksByAuthor: React.FC<OtherBooksByAuthorProps> = ({
    author,
    currentProductId,
}) => {

    const filteredBooks = books.filter(
        (book) => book.author === author && book.id !== currentProductId
    );

    return (
        <div className="pt-16 pb-16">
            <h3 className="text-xl font-semibold mb-4">More by {author}</h3>
            {filteredBooks.length === 0 ? (
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
                    {filteredBooks.map((book) => (
                        <ProductCard key={book.id} product={book} compact />
                    ))}
                </div>
            )}
        </div>
    );
};

export default OtherBooksByAuthor;