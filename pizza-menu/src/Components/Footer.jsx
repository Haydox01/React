import React from 'react'

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    if (hour >= openHour && hour <=closeHour) alert("We are currently open !");
    else alert("Sorry we are closed !");
  return (
    <div>
        <footer>{new Date().toLocaleTimeString()}. We're currently open</footer>
    </div>
  )
}

export default Footer