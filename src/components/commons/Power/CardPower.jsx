import React from "react";
import PropTypes from "prop-types";
import style from "./CardPower.module.css";

function CardPower({ power }) {
  const { title, prix, picture, contenu_produit } = power;
  console.log(power);
  return (
    <div className={style.CardPower}>
      <div className={style.container}>
        <h3 className={style.title}>{title}</h3>
        <span className={style.price}>{prix} euros</span>
        <div className={style.containerImg}>
          <img className={style.img} src={picture} alt={title} />
          <p className={style.description}>{contenu_produit}</p>
        </div>
        <button className={style.button} type="submit">
          Ajouter
        </button>
      </div>
    </div>
  );
}

CardPower.propTypes = {
  power: PropTypes.shape({
    title: PropTypes.string.isRequired,
    contenu_produit: PropTypes.string.isRequired,
    prix: PropTypes.number.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardPower;
