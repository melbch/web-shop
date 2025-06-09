import React from "react";
import { Button } from "@mui/material";

type CheckoutStepperControlsProps = {
    activeStep: number;
    onBack: () => void;
    onNext: () => void;
    disabledNext: boolean;
    isLastStep: boolean;
}

const CheckoutStepperControls: React.FC<CheckoutStepperControlsProps> = ({
    activeStep,
    onBack,
    onNext,
    disabledNext,
    isLastStep,
}) => {
    return (
        <div className="flex justify-between pt-4">
            <Button disabled={activeStep === 0} onClick={onBack}>
                Back
            </Button>
            <Button
                variant="contained"
                onClick={onNext}
                disabled={disabledNext}
            >
                {isLastStep ? "Place Order" : "Next"}
            </Button>
        </div>        
    );
};

export default CheckoutStepperControls;