import React from "react";
import PropTypes from "prop-types";
import style from "./CardPowerCart.module.css";

function CardPowerCart() {
  return (
    <div className={style.CardPowerCart}>
      <div className={style.container}>
        <div className={style.containerImg}>
          <img
            className={style.img}
            src="https://i.f1g.fr/media/eidos/805x453_crop/2012/12/21/XVM72c997ca-3fd4-11e7-a469-62c36d07d43b.jpg"
            alt="titre"
          />
        </div>
        <div>
          <h3 className={style.title}>titre</h3>
          <span className={style.unitPrice}>prix unitaire</span>
          <span className={style.price}>quantité</span>
          <span className={style.price}>prix total</span>
          <button className={style.button} type="submit">
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}

CardPowerCart.propTypes = {
  power: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    prix: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardPowerCart;
