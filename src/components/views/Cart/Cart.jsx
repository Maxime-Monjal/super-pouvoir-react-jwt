import React from "react";
import { Helmet } from "react-helmet";
import CardPowerCart from "../../commons/Power/CardPowerCart";
import style from "./Cart.module.css";

function Cart() {
  return (
    <div className={style.Cart}>
      <Helmet>
        <title>Mon Panier</title>
        <meta
          name="description"
          content="This is your cart with every item that you chose"
        />
        <link rel="canonical" href="http://localhost:3000" />
      </Helmet>
      <CardPowerCart />
      <CardPowerCart />
      <CardPowerCart />
    </div>
  );
}

export default Cart;
