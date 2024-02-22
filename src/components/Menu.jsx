import React from "react";
import bootstrap from "bootstrap";
import "./Menu.styles.css";
const Menu = ({ Breakfast, Lunch, Evening, Dinner }) => {
  return (
    <>
      <div className="bcontainer">
        <button onClick={() => Breakfast()}>Breakfast</button>

        <button onClick={() => Lunch()}>Lunch</button>
        <button onClick={() => Evening()}>Evening</button>
        <button onClick={() => Dinner()}>Dinner</button>
        <button>All</button>
      </div>
    </>
  );
};

export default Menu;
