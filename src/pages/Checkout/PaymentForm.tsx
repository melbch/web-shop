import React from "react";
import { RadioGroup, FormControlLabel, Radio, FormLabel, TextField } from "@mui/material";
import { FaCcMastercard, FaCcVisa, FaCcAmex, FaCcPaypal, FaGooglePay, FaCcApplePay } from 'react-icons/fa';
import { SiKlarna } from "react-icons/si";

type PaymentFormProps = {
    paymentMethod: string;
    setPaymentMethod: (value: string) => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ paymentMethod, setPaymentMethod }) => {
    return (
        <div className="space-y-4">
            <FormLabel component="legend">Payment Method</FormLabel>
            <RadioGroup value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                <FormControlLabel
                    value="card"
                    control={<Radio />}
                    label={
                        <div className="flex items-center space-x-2">
                            <span className="font-semibold">Credit/Debit Card</span>
                            <FaCcMastercard size={28} />
                            <FaCcVisa size={28} />
                            <FaCcAmex size={28} />
                        </div>
                    }
                />
                <FormControlLabel
                    value="paypal"
                    control={<Radio />}
                    label={
                        <div className="flex items-center space-x-2">
                            <span className="font-semibold">PayPal</span>
                            <FaCcPaypal size={28} />
                        </div>
                    }
                />
                <FormControlLabel
                    value="google-pay"
                    control={<Radio />}
                    label={
                        <div className="flex items-center space-x-2">
                            <span className="font-semibold">Google Pay</span>
                            <FaGooglePay size={32} />
                        </div>
                    }
                />
                <FormControlLabel
                    value="apple-pay"
                    control={<Radio />}
                    label={
                        <div className="flex items-center space-x-2">
                            <span className="font-semibold">Apple Pay</span>
                            <FaCcApplePay size={28} />
                        </div>
                    }
                />
                <FormControlLabel
                    value="klarna"
                    control={<Radio />}
                    label={
                        <div className="flex items-center space-x-2">
                            <span className="font-semibold">Klarna</span>
                            <SiKlarna size={18} />
                        </div>
                    }
                />
            </RadioGroup>

            {paymentMethod === "card" && (
                <div className="space-y-3">
                    <TextField fullWidth label="Card Number" />
                    <div className="flex space-x-2">
                        <TextField fullWidth label="Expiry Date" />
                        <TextField fullWidth label="CVC" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default PaymentForm;