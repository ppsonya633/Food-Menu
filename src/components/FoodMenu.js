import React from "react";
import "./Food.styles.css";
import { FoodItems } from "./data";
import Food from "./Food";
import Menu from "./Menu";
import { useState, useReducer } from "react";

const FoodReducer = (state, action) => {
  switch (action.type) {
    case "Breakfast":
      return FoodItems.filter((item) => item.category === "breakfast");
    case "Lunch":
      return FoodItems.filter((item) => item.category === "Lunch");
    case "Evening":
      return FoodItems.filter((item) => item.category === "Evening");
    case "Dinner":
      return FoodItems.filter((item) => item.category === "Dinner");
    default:
      return FoodItems;
  }
};
const FoodMenu = () => {
  const [category, setCategory] = React.useState("All");
  //   const [items, setItems] = useState(FoodItems);

  const [items, dispatch] = useReducer(FoodReducer, FoodItems);

  const HandleCategoryChange = (category) => {
    dispatch({
      type: category,
    });
  };

  return (
    <>
      <div className="bcontainer">
        <button onClick={() => HandleCategoryChange("All")}>All</button>
        <button onClick={() => HandleCategoryChange("Breakfast")}>
          Breakfast
        </button>
        <button onClick={() => HandleCategoryChange("Lunch")}>Lunch</button>
        <button onClick={() => HandleCategoryChange("Evening")}>Evening</button>
        <button onClick={() => HandleCategoryChange("Dinner")}>Dinner</button>
      </div>
      {/* <Menu
        Breakfast={Breakfast}
        Lunch={Lunch}
        Evening={Evening}
        Dinner={Dinner}
      ></Menu> */}

      <div className="cart-container">
        {items.map((item) => (
          <Food key={item.id} item={item}></Food>
        ))}
      </div>
      {/* <div className="cart-container">
      {FoodItems.map((item) => (
        <Food key={item.id} item={item}></Food>
      ))}
    </div> */}
    </>
  );
};

export default FoodMenu;
