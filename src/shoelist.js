// src/ShoeList.js
import React from "react";
import Shoe from "./shoe";

const ShoeList = () => {
  const shoes = [
    {
      name: "Running Shoes",
      price: 100,
      image:
        "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=250",
    },
    {
      name: "Sneakers",
      price: 80,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWST7NZzWgkcLOvl-3GtzesjUm04W2of5bYw&s",
    },
    {
      name: "Boots",
      price: 120,
      image:
        "https://thursdayboots.com/cdn/shop/products/1024x1024-Women-Coda-Black-011422-3.4_1024x1024.jpg?v=1652301362",
    },
  ];

  return (
    <div className="ShoeList">
      {shoes.map((shoe, index) => (
        <Shoe
          key={index}
          name={shoe.name}
          price={shoe.price}
          image={shoe.image}
        />
      ))}
    </div>
  );
};

export default ShoeList;
