import React from "react";
import { Link } from "react-router-dom";
import { useHandleCart } from "../../utilities/useHandleCart";
import Cart from "../Cart/Cart";

function Orders() {
  const { carts, setCarts } = useHandleCart();
  const handleRemoveCart = (productId) => {
    const updatedCart = carts.filter((cart) => cart.id !== productId);
    setCarts(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
      <div className=" md:col-span-3">
        <h1 className="text-2x font-bold p-3 text-center">
          Total product Found: {carts.length}{" "}
        </h1>
        <div className="w-1/2 mx-auto ">
          {carts.map((cart, index) => (
            <div
              className="p-4 bg-yellow-400 rounded-lg my-2 "
              key={index}
              cart={cart}
            >
              <div className="flex justify-between  items-center">
                <img className="w-24" src={cart.img} alt="" />
                <p>{cart.name}</p>
                <button
                  onClick={() => {
                    handleRemoveCart(cart.id);
                  }}
                  className="btn"
                >
                  Delete
                </button>{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" md:col-span-1">
        <Cart carts={carts} >
          <Link to="/checkout"><button className="btn btn-secondary w-full">Checkout Order </button></Link>
          </Cart>
      </div>
    </div>
  );
}

export default Orders;
