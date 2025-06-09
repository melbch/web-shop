type ModalWrapperProps = {
    onClose: () => void;
    children: React.ReactNode;
}

const ModalWrapper = ({ onClose, children }: ModalWrapperProps) => {
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return(
        <div 
            className="fixed inset-0 bg-black bg-opacity-40 z-[1500] flex justify-center items-center"
            onClick={handleBackdropClick}
        >
            <div 
                className="bg-white rounded-lg shadow-lg p-8 relative w-full max-w-md transition-all duration-300 ease-out transform scale-100 opacity-100"
                onClick={(e) => e.stopPropagation()}
            >
                <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-900" onClick={onClose}>✕</button>
                {children}
            </div>
        </div>
    );
};

export default ModalWrapper;