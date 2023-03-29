import React, { useEffect, useState } from "react";
import loadData from "../../api/dataLoad";
import Card from "../Card/Card";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);
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

  const handleCart = (product) => {
    let newCart = [...cart, product];
    setCart(newCart);
  };

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
      <div className="col-span-1 bg-orange-400 ">
        <h2 className="text-3xl font-bold text-blue-600">Order Summary</h2>
        <p>Item total : {cart.length} </p>
      </div>
    </div>
  );
};

export default Shop;
