import React from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import CardPowerCart from "./CardPowerCart";
=======
import CardPowerCart from "../../commons/Power/CardPowerCart";
import style from "./Cart.module.css";
>>>>>>> becf71e93ea7615cc1329778e83870150746d4b6
=======
import CardPowerCart from "../../commons/Power/CardPowerCart";
import style from "./Cart.module.css";
>>>>>>> b1de2973f69f5009c8d674c131268b087ca21deb

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
