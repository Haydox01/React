import React from 'react'
import Footer from './Footer';

function Order({closeHour, openHour}) {
  return (
    <div className="order">
      <p>we're open from {openHour}:00 to {closeHour}:00. Come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
}

export default Order