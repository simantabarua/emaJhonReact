import React, { useEffect, useState } from "react";
import loadData from "../../api/dataLoad";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const productLoad = async () => {
      try {
        const products = await loadData();
        setProducts(products);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    productLoad();
  }, []);

  const [carts, setCarts] = useState([]);

  const handleAddToCart = (product) => {
    const productInCart = carts.find((item) => item.id === product.id);
    if (!productInCart) {
      const newCart = [...carts, product];
      setCarts(newCart);
      localStorage.setItem("cartItems", JSON.stringify(newCart));
    }
  };
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    setCarts(cartItems);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
      <div className=" md:col-span-3">
        <h1>Total product Fond: {products.length}</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 place-items-center">
          {products.map((product) => (
            <Card
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Card>
          ))}
        </div>
      </div>
      <div className=" md:col-span-1">
        <Cart carts={carts} />
      </div>
    </div>
  );
};

export default Shop;
