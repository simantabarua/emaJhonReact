import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import loadData from "../../api/dataLoad";
import { useHandleCart } from "../../utilities/useHandleCart";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { handleAddToCart, carts, clearCart } = useHandleCart();

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

  if (loading) {
    return <div className="text-4xl text-center p-10">Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
      {carts.length>0 && (
        <div className=" md:col-span-1">
          <Cart carts={carts} clearCart={clearCart}>
            <Link to="/orders">
              <button className="btn btn-secondary w-full">Go to Order </button>
            </Link>
          </Cart>
        </div>
      )}
    </div>
  );
};

export default Shop;
