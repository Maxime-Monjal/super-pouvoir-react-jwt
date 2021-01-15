import React from "react";
import { Helmet } from "react-helmet";
import CardPowerCart from "../../commons/Power/CardPowerCart";
import style from "./Cart.module.css";

const getUrl = window.location;
const baseUrl = `${getUrl.protocol} + "//" + ${getUrl.host} + "/"`;
function Cart() {
  return (
    <div className={style.Cart}>
      <Helmet>
        <title>Mon Panier</title>
        <meta
          name="description"
          content="This is your cart with every item that you chose"
        />
        <link rel="canonical" href={baseUrl} />
      </Helmet>
      <CardPowerCart />
      <CardPowerCart />
      <CardPowerCart />
    </div>
  );
}

export default Cart;
