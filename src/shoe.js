// src/Shoe.js
import React from "react";

const Shoe = ({ name, price, image }) => {
  return (
    <div className="Shoe">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
      <button>Buy Now</button>
    </div>
  );
};

export default Shoe;
