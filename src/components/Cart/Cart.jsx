import React from "react";

function Cart({ carts }) {
  return (
    <div className="h-96 sticky top-0 bg-orange-500 m-2 rounded-md">
      <h2 className="text-2xl p-2 text-center"> Total item: {carts.length}</h2>
      <ol className="list-inside list-decimal p-2" >
        {carts.map((cart, index) => (
          <li key={index} cart={cart} >{cart.name}</li>
        ))}
      </ol>
    </div>
  );
}

export default Cart;
