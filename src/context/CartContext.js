import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const item = action.payload;
            const existingItem = state.find((i) => i._id === item._id);
            if (existingItem) {
                return state.map((i) => (i._id === item._id ? { ...i, quantity: i.quantity + 1 } : i));
            } else {
                return [...state, { ...item, quantity: 1 }];
            }
        case "REMOVE_FROM_CART":
            return state.filter((item) => item._id !== action.payload);
        default:
            return state;
    }
};

export const CartProvider = ({ children }) => {
    const [cartItems, dispatch] = useReducer(cartReducer, []);

    const addToCart = (item) => {
        dispatch({ type: "ADD_TO_CART", payload: item });
    };

    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, totalItems, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};


export const useCart = () => useContext(CartContext);

export default CartContext;