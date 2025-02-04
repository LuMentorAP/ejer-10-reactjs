import { createContext, useState, useContext } from "react";

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CarritoContext.Provider value={{ cart, addToCart, clearCart }}>
            {children}
        </CarritoContext.Provider>
    );
};

export const useCarrito = () => useContext(CarritoContext);
