import React from "react";
import PropTypes from "prop-types";
import style from "./CardPower.module.css";

function CardPower({ power }) {
  const { title, prix, image, description } = power;
  return (
    <div className={style.CardPower}>
      <div className={style.container}>
        <h3 className={style.title}>{title}</h3>
        <span className={style.price}>{prix}</span>
        <div className={style.containerImg}>
          <img className={style.img} src={image} alt={title} />
          <p className={style.description}>{description}</p>
        </div>
      </div>
      <button className={style.button} type="submit">
        Acheter
      </button>
    </div>
  );
}

CardPower.propTypes = {
  power: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  prix: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default CardPower;