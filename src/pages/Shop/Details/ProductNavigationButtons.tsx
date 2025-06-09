import React from "react";
import { useNavigate } from "react-router-dom";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

interface Props {
    currentId: number;
    minId?: number;
    maxId?: number;
}

const ProductNavigationButtons: React.FC<Props> = ({
    currentId,
    minId = 1,
    maxId = 99,
}) => {
    const navigate = useNavigate();

    const goToPrevious = () => {
        if (currentId > minId) navigate(`/product/${currentId - 1}`);
    };

    const goToNext = () => {
        if (currentId < maxId) navigate(`/product/${currentId + 1}`);
    };

    return (
        <div className="pointer-events-none fixed inset-y-0 w-full z-50">
            <div className="relative h-full">
                <button
                    onClick={goToPrevious}
                    disabled={currentId <= minId}
                    className="hidden md:block fixed left-4 top-1/2 transform -translate-y-1/2 bg-gray-300 text-white p-3 rounded-full shadow-lg hover:bg-gray-500 disabled:opacity-50 pointer-events-auto"
                    aria-label="Previous Book"
                >
                    <KeyboardDoubleArrowLeftIcon />
                </button>

                <button
                    onClick={goToNext}
                    disabled={currentId >= maxId}
                    className="hidden md:block fixed right-4 top-1/2 transform -translate-y-1/2 bg-gray-300 text-white p-3 rounded-full shadow-lg hover:bg-gray-500 disabled:opacity-50 pointer-events-auto"
                    aria-label="Next Book"
                >
                    <KeyboardDoubleArrowRightIcon />
                </button>
            </div>
        </div>
    );
};

export default ProductNavigationButtons;