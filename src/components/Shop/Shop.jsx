import React, { useCallback, useEffect, useState } from "react";
import loadData from "../../api/dataLoad";
import Card from "../Card/Card";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [price, setPrice] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  
  useEffect(() => {
    const productLoad = async () => {
      try {
        const products = await loadData();
        setProducts(products);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    productLoad();
  }, []);

  const handleCart = useCallback(
    (product) => {
      let newCart = [...cart, product];
      setCart(newCart);
      setPrice(price + product.price);
      setShipping(shipping + product.shipping);
      localStorage.setItem("cart", JSON.stringify(newCart));
    },
    [cart, price, shipping]
  );
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const tax = price * 0.07;
    const total = price + shipping + tax;
    setTax(tax.toFixed(2));
    setTotal(total);
  }, [price, shipping]);

 
  if (loading) {
    return <div className="text-4xl text-center p-10">Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="grid grid-cols-5 text-center ">
      <div className="col-span-4 bg-gray-100">
        <h2 className="text-4xl">Product: {products.length} </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 p-2 gap-3">
          {products.map((product, index) => (
            <Card key={index} product={product} handleCart={handleCart} />
          ))}
        </div>
      </div>
      <div className="col-span-1 bg-orange-400 sticky top-0 h-96 text-left p-5  ">
        <h2 className="text-3xl font-bold text-blue-600">Order Summary</h2>
        <p>Item total : $ {cart.length} </p>
        <p>Price Total: $ {price}</p>
        <p>Shipping Total: $ {shipping}</p>
        <p>Tax Total: $ {tax}</p>
        <p>Grand Total: $ {total}</p>
      </div>
    </div>
  );
};

export default Shop;
