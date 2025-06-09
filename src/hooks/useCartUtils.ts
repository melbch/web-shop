import { useCart } from "../context/useCart";

export const useCartUtils = () => {
    const { cartItems, addToCart, removeFromCart, clearCart } = useCart();

    const increaseQty = (id: number) => {
        const item = cartItems.find((i) => i.id === id);
        if (item) {
            addToCart({ ...item, quantity: 1 });
        }
    };

    const decreaseQty = (id: number) => {
        const item = cartItems.find((i) => i.id === id);
        if (item) {
            if (item.quantity > 1) {
                addToCart({ ...item, quantity: -1});
            } else {
                removeFromCart(id);
            }
        }
    };

    const total = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

    return {
        cartItems,
        total, 
        increaseQty,
        decreaseQty,
        removeFromCart,
        clearCart,
    };
};