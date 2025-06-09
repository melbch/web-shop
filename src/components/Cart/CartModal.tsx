import { useCartUtils } from '../../hooks/useCartUtils';
import CartItemRow from './CartItemRow';
import { useNavigate } from "react-router-dom";

const CartModal = ({ onClose }: { onClose: () => void }) => {
    const { cartItems, total, removeFromCart, increaseQty, decreaseQty, clearCart } = useCartUtils();

    const navigate = useNavigate();

    return (
        <>
            <div 
                onClick={onClose}
                className="fixed inset-0 bg-white bg-opacity-50 backdrop-blur-sm z-40"
            />

            <aside
                className="fixed top-0 right-0 h-full w-[450px] bg-white bg-opacity-95 shadow-lg z-50 flex flex-col p-6 overflow-y-auto"
                role="dialog"
                aria-modal="true"
                aria-label="Shopping cart"
            >
                    <button
                        onClick={onClose}
                        aria-label="Close cart"
                        className="self-end mb-4 text-gray-600 hover:text-gray-900 focus:outline-none"
                    >
                        ×
                    </button>

        
                <h2 className="text-xl font-bold mb-6">Your Cart</h2>
                {cartItems.length === 0 ? (
                    <p className="text-gray-700">Your cart is empty</p>
                ) : (
                    <>
                        <div className="flex justify-center">
                            <button
                                onClick={clearCart}
                                className="mb-4 bg-red-600 text-white w-[200px] px-3 py-1 rounded hover:bg-red-700"
                            >
                                Clear Cart
                            </button>
                        </div>
                        <ul className="flex-grow space-y-4">
                            {cartItems.map((item) => (
                                <CartItemRow 
                                    key={item.id}
                                    item={item}
                                    onIncrease={increaseQty}
                                    onDecrease={decreaseQty}
                                    onRemove={removeFromCart}
                                    layout="modal"
                                />
                            ))}
                        </ul>
                    </>
                )}

                <div className="mt-6 font-semibold text-lg">Total: ${total.toFixed(2)}</div>
                <div className="flex justify-center">
                    <button 
                        className="mt-6 bg-blue-600 text-white w-[200px] py-3 rounded hover:bg-blue-700 transition"
                        onClick={() => {
                            onClose();
                            navigate("/checkout");
                        }}
                    >
                        Proceed to Checkout
                    </button>
                </div>
            </aside>
        </>
    );
};

export default CartModal;