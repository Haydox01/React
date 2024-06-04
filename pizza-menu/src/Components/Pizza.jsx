import React from "react";
import Menu from "./Menu";

function Pizza(props) {
  // console.log(props);
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} />
      <h3>{props.pizzaObj.name}</h3>
      <p>{props.pizzaObj.ingredient}</p>
      <span>{props.pizzaObj.price}</span>
    </li>
  );
}

export default Pizza;
// { name, ingredient, photoName, price }
