import React from "react";
import Menu from "./Menu";

function Pizza({ pizzaObj }) {
  // console.log(props);
  if (pizzaObj.soldOut) return null; // rendering wit multiple returns
  return (
    <li className="pizza">
      <img src={pizzaObj.photoName} />
      <h3>{pizzaObj.name}</h3>
      <p>{pizzaObj.ingredient}</p>
      <span>{pizzaObj.price}</span>
    </li>
  );
}

export default Pizza;
// { name, ingredient, photoName, price }
