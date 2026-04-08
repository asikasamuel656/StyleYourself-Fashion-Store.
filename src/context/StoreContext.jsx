// src/context/StoreContext.jsx
import React, { createContext, useState, useContext } from "react";

// Create context
const StoreContext = createContext();

// Provider component
export const StoreProvider = ({ children }) => {
  // Cart state
  const [cart, setCart] = useState([]);
  // Wishlist state
  const [wishlist, setWishlist] = useState([]);
  // Dark mode state
  const [darkMode, setDarkMode] = useState(false);

  // Add product to cart
  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  // Remove product from cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Toggle wishlist
  const toggleWishlist = (product) => {
    const exists = wishlist.find((item) => item.id === product.id);
    if (exists) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  // Toggle dark/light mode
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <StoreContext.Provider
      value={{
        cart,
        wishlist,
        darkMode,
        addToCart,
        removeFromCart,
        toggleWishlist,
        toggleDarkMode,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

// Custom hook for easy use
export const useStore = () => useContext(StoreContext);