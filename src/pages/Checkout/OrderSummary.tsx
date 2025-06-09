import React from "react";
import type { CartItem } from "../../types/cartTypes";

type OrderSummaryProps = {
    items: CartItem[];
    total: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ items, total }) => {
    return (
        <div className="mt-10 text-left border-t pt-6">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            <ul className="divide-y divide-gray-200">
                {items.map((item) => (
                    <li key={item.id} className="py-3 flex justify-between items-center">
                        <div>
                            <p className="font-medium">{item.title}</p>
                            <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                        </div>
                        <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                    </li>
                ))}
            </ul>
            <div className="mt-6 flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
            </div>
        </div>
    );
}; 

export default OrderSummary;