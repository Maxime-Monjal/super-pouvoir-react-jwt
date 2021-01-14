import React from "react";
import CardPowerCart from "./CardPowerCart";
import style from "./Cart.module.css";

function Cart() {
  return (
    <div className={style.Cart}>
      <CardPowerCart />
      <CardPowerCart />
      <CardPowerCart />
    </div>
  );
}

export default Cart;
