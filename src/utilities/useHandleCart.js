import { useEffect, useState } from "react";

export const useHandleCart = () => {
  const [carts, setCarts] = useState([]);

  const handleAddToCart = (product) => {
    const productInCart = carts.find((item) => item.id === product.id);
    product.quantity += 1;
    if (!productInCart) {
      const newCart = [...carts, product];
      setCarts(newCart);
      localStorage.setItem("cartItems", JSON.stringify(newCart));
    }
  };
  const clearCart = () => {
    setCarts([]);
    localStorage.setItem("cartItems", JSON.stringify([]));
  };
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    setCarts(cartItems);
  }, []);

  return { handleAddToCart, carts, setCarts, clearCart };
};


