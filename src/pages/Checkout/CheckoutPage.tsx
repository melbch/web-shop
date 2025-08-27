import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartUtils } from '../../hooks/useCartUtils';
import CartItemRow from "../../components/Cart/CartItemRow";
import type { CartItem } from "../../types/cartTypes";
import { useDeliveryFormValidation } from "./hooks/useDeliveryFormValidation";
import { Stepper, Step, StepLabel, } from '@mui/material';
import DeliveryForm from "./DeliveryForm";
import PaymentForm from "./PaymentForm";
import OrderSummary from "./OrderSummary";
import CheckoutStepperControls from "./CheckoutStepperControls";

const CheckoutPage = () => {
    const { cartItems, total, removeFromCart, increaseQty, decreaseQty, clearCart } = useCartUtils();

    const [activeStep, setActiveStep] = useState(0); 
    const [country, setCountry] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [apartment, setApartment] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");
    const [deliveryMethod, setDeliveryMethod] = useState("");
    const [email, setEmail] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("credit-card");
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [placedOrderItems, setPlacedOrderItems] = useState<CartItem[]>([]);
    const [placedOrderTotal, setPlacedOrderTotal] = useState(0);

    const [errors, setErrors] = useState<{[key: string]: string}>({});
    
    const { validate } = useDeliveryFormValidation();
    const validateStep1 = () => {
        const fields = { country, firstName, lastName, address, postalCode, city, phone, email};
        const errors = validate(fields);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    }

    const handleSubmit = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        alert("This is a dummy checkout - no real payment will be processed.")
        
        setPlacedOrderItems(cartItems);
        setPlacedOrderTotal(total);
        
        clearCart();

        setOrderPlaced(true);
    };

    const navigate = useNavigate();

    if (orderPlaced) {
        return (
            <div className="max-w-2xl mx-auto px-6 py-16 mt-20 mb-20 text-center bg-white shadow-md rounded">
                <svg
                    className="mx-auto mb-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path 
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                    />
                </svg>

                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                    Thank you for your order, {firstName} {lastName}!
                </h2>

                <p className="text-gray-600 mb-6">
                    We've recieved your order and will process it shortly.
                    A confirmation has been sent to <span className="font-medium">{email}</span>.
                </p>

                <button
                    onClick={() => navigate('/')}
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                >
                    Continue Browsing
                </button>

                <div className="text-left pt-6">
                    <OrderSummary items={placedOrderItems} total={placedOrderTotal} />
                </div>
            </div>
        );
    }

    const steps = ['Delivery Information', 'Payment Method'];

    const isLastStep = activeStep === steps.length - 1;

    const handleNext = () => {
        if (activeStep === 0) {
            if (!validateStep1()) return;
        }
        setActiveStep(prevStep => prevStep + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleBack = () => {
        setActiveStep(prevStep => prevStep - 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Cart Items */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
                    {cartItems.length === 0 ? (
                      <p className="text-gray-500">Your cart is empty.</p>
                    ) : (
                        <ul className="space-y-4 border rounded p-4 shadow-sm bg-white">
                            {cartItems.map((item) => (
                                <CartItemRow 
                                    key={item.id}
                                    item={item}
                                    onIncrease={increaseQty}
                                    onDecrease={decreaseQty}
                                    onRemove={removeFromCart}
                                    layout="checkout"
                                />
                            ))}
                        </ul>
                    )}
                    <div className="mt-4 text-lg font-bold text-right">Total: ${total.toFixed(2)}</div>
                </div>

                {/* Checkout Form */}
                <div className="border rounded p-6 bg-white shadow-sm space-y-6">
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>

                    {activeStep === 0 && (
                        <DeliveryForm
                            country={country}
                            setCountry={setCountry}
                            firstName={firstName}
                            setFirstName={setFirstName}
                            lastName={lastName}
                            setLastName={setLastName}
                            address={address}
                            setAddress={setAddress}
                            apartment={apartment}
                            setApartment={setApartment}
                            postalCode={postalCode}
                            setPostalCode={setPostalCode}
                            city={city}
                            setCity={setCity}
                            phone={phone}
                            setPhone={setPhone}
                            email={email}
                            setEmail={setEmail}
                            deliveryMethod={deliveryMethod}
                            setDeliveryMethod={setDeliveryMethod}
                            errors={errors}
                        />
                    )}

                    {activeStep === 1 && (
                        <PaymentForm 
                            paymentMethod={paymentMethod}
                            setPaymentMethod={setPaymentMethod}
                        />
                    )}

                    <CheckoutStepperControls 
                        activeStep={activeStep}
                        onBack={handleBack}
                        onNext={() => {
                            if (isLastStep && paymentMethod !== "card") {
                                handleSubmit();
                            } else if (isLastStep) {
                                handleSubmit();
                            } else {
                                handleNext();
                            }
                        }}
                        disabledNext={cartItems.length === 0}
                        isLastStep={isLastStep}
                    />
                </div>                
            </div>
        </div>
    );
}; 

export default CheckoutPage;