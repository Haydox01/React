import React from "react";
import Pizza from "./Pizza";
import pizzaData from "../data";

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>

      {/* <Pizza
        name={"Pizza spinaci"}
        ingredient={"Tomato, mozarella, spinach, and ricotta cheese"}
        photoName={"pizzas/spinaci.jpg"}
        price={10}
      />
      <Pizza
        name={"Pizza Funghi"}
        ingredient={"Tomato, mozarella, mushrooms, and onion"}
        photoName={"pizzas/funghi.jpg"}
        price={20}
      /> */}
    </main>
  );
}

export default Menu;
