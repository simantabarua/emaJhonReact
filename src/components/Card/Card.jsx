import React from "react";

const Card = (props) => {
  const { name, img, price } = props.product;

  return (
    <>
      <div className="card w-80 bg-base-100 shadow-xl">
        <figure>
          <img src={img} className="w-full h-64 object-cover" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-ghost bg-orange-400"
              onClick={() => {
                props.handleCart(props.product);
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
