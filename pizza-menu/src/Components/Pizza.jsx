import React from "react";
import Menu from "./Menu";

function Pizza({ pizzaObj }) {
  // console.log(props);
  // if (pizzaObj.soldOut) return null; // rendering wit multiple returns
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <h3>{pizzaObj.name}</h3>
      <p>{pizzaObj.ingredients}</p>
      <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
    </li>
  );
}

export default Pizza;
// { name, ingredient, photoName, price }
