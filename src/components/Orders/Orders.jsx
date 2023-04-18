import React from "react";
import { Link } from "react-router-dom";
import { useHandleCart } from "../../utilities/useHandleCart";
import Cart from "../Cart/Cart";

function Orders() {
  const { carts, setCarts, clearCart } = useHandleCart();
  const handleRemoveCart = (productId) => {
    const updatedCart = carts.filter((cart) => cart.id !== productId);
    setCarts(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };
  console.log(carts);

  return (
    <div className=" grid grid-cols-1 md:grid-cols-4 gap-1">
      <div className="md:col-span-3 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold p-5 text-center">
          {carts.length > 0 ? (
            <span>Total items found {carts.length}</span>
          ) : (
            <>
              <p>"Please Order Something"</p>
              <Link className="btn bg-orange-400" to="/shop">
                Go to Shop
              </Link>
            </>
          )}
        </h1>
        <div className="w-1/2">
          {carts.map((cart, index) => (
            <div
              className="p-4 bg-yellow-400 rounded-lg my-2"
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
      {carts.length > 0 && (
        <div className="md:col-span-1 flex justify-center items-center">
          <Cart carts={carts} clearCart={clearCart}>
            <Link to="/checkout">
              <button className="btn btn-secondary w-full">
                Checkout Order
              </button>
            </Link>
          </Cart>
        </div>
      )}
    </div>
  );
}

export default Orders;
