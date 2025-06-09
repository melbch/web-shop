import type { CartItem } from "../../types/cartTypes";

type Props = {
    item: CartItem;
    onIncrease: (id: number) => void;
    onDecrease: (id: number) => void;
    onRemove: (id: number) => void;
    layout?: 'modal' | 'checkout';
};

const CartItemRow: React.FC<Props> = ({ item, onIncrease, onDecrease, onRemove }) => {
    return (
        <li className="flex items-center justify-between gap-4 py-2">
            <div className="flex items-center gap-3 flex-1 min-w-0">
                <img src={item.image} alt={item.title} className="w-16 h-20 object-contain rounded shrink-0" />
                <div className="flex flex-col min-w-0">
                    <p className="font-medium text-left trunctate">{item.title}</p>
                    <p className="text-sm text-gray-500 text-left mt-1">${item.price.toFixed(2)}</p>
                </div>
            </div>
            <div className="flex items-center gap-1.5 min-w-[150px] justify-end">
                <button onClick={() => onDecrease(item.id)} className="w-5 h-5 bg-gray-300 text-sm rounded hover:bg-gray-400">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => onIncrease(item.id)} className="w-5 h-5 bg-gray-300 text-sm rounded hover:bg-gray-400">+</button>
                <button onClick={() => onRemove(item.id)} className="ml-2 text-red-500 hover:text-red-700 text-sm">Remove</button>
            </div>
            <div className="font-semibold">${(item.price * item.quantity).toFixed(2)}</div>
        </li>
    );
};

export default CartItemRow;