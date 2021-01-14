import React from "react";
<<<<<<< HEAD
import CardPowerCart from "./CardPowerCart";
=======
import CardPowerCart from "../../commons/Power/CardPowerCart";
import style from "./Cart.module.css";
>>>>>>> becf71e93ea7615cc1329778e83870150746d4b6

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
