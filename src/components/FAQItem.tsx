interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle }) => (
    <>
        <dt className="border-b pb-4">
            <button
                onClick={onToggle}
                className="text-left w-full flex justify-between items-center text-gray-800 font-medium text-lg"
                aria-expanded={isOpen}
            >
                {question}
                <span className="text-xl">{isOpen ? "-" : "+"}</span>
            </button>
        </dt>
        {isOpen && (
            <dd className="mt-2 text-left text-gray-600 transition duration-300">
                {answer}
            </dd>
        )}
    </>
);

export default FAQItem;