import React from "react";
import "./Food.styles.css";

const Food = ({ item }) => {
  //   const { id, image, name, category, price, discription } = item;
  return (
    <div className="cart-item" key={item.id}>
      <div className="item-image">
        <img src={item.image} />
      </div>
      <div className="item-details">
        <p>
          <strong>ID:</strong> {item.id}
        </p>
        <p>
          <strong>Name:</strong> {item.name}
        </p>
        <p>
          <strong>Category:</strong> {item.category}
        </p>
        <p>
          <strong>Price:</strong> ${item.price}
        </p>
      </div>
    </div>
  );
};

export default Food;
