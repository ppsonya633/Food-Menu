import React from "react";
import Menu from "./components/Menu";
import "./App.css";
import FoodMenu from "./components/FoodMenu";
import { FoodItems } from "./components/data";

function App() {
  return (
    <>
      <h1>Order Your Favourite Dish</h1>
      <hr />
      {/* <Menu></Menu> */}
      <FoodMenu></FoodMenu>
    </>
  );
}
export default App;

//
