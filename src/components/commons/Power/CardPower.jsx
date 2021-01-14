import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import style from "./CardPower.module.css";

function CardPower({ power }) {
  const { title, prix, image, description, id, slug } = power;
  return (
    <div className={style.CardPower}>
      <div className={style.container}>
        <h3 className={style.title}>{title}</h3>
        <span className={style.price}>{prix}</span>
        <div className={style.containerImg}>
          <img className={style.img} src={image} alt={title} />
          <p className={style.description}>{description}</p>
        </div>
        <Link to={`/characters/${power.id}`}>
          <button className={style.button} type="submit">
            Acheter
          </button>
        </Link>
      </div>
    </div>
  );
}

CardPower.propTypes = {
  power: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    prix: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardPower;
