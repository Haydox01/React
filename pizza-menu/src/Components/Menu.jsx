import React from "react";
import Pizza from "./Pizza";
import pizzaData from "../data";

function Menu() {
   const pizzas = [];
  // const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  console.log(pizzas);
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <p>Authentic Italian Cuisine. 6 creative dishes to choose from</p>
      {
        // numPizzas > 0 && ( // Conditional rendering with &&
        numPizzas > 0 ? ( // conditional rendering with ternaries
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        ) : (<p>We are still working on our menu. please come back later</p>)
      }

      {/* <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul> */}

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
