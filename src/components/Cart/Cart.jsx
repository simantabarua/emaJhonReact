import React from "react";
function Cart({ carts, children,clearCart }) {
  return (
    <div className="sticky top-0 bg-orange-200 m-2 rounded-md">
      <h2 className="text-2xl p-2 text-center"> Total item: {carts.length}</h2>
      <ol className="list-inside list-decimal p-2">
        {carts.map((cart, index) => (
          <li key={index} cart={cart}>
            {cart.name}
          </li>
        ))}
      </ol>
      <div className="text-center flex flex-col gap-2 ">
        <button className="btn btn-primary w-full" onClick={clearCart}>Clear Cart</button>
        {children}
      </div>
    </div>
  );
}

export default Cart;
