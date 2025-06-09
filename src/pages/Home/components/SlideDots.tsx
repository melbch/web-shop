type SlideDotsProps = {
    maxSlide: number;
    currentIndex: number;
    onSelect: (index: number) => void;
};

const SlideDots = ({ maxSlide, currentIndex, onSelect }: SlideDotsProps) => {
    return (
        <div className="flex justify-center gap-2 mt-2">
            {Array.from({ length: maxSlide + 1 }).map((_, i) => (
                <button
                    key={i}
                    onClick={() => onSelect(i)}
                    className={`w-3 h-3 rounded-full transition ${
                        i === currentIndex ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Slide ${i + 1}`}
                    aria-pressed={i === currentIndex}
                    type="button"
                />
            ))}
        </div>
    );
};

export default SlideDots;