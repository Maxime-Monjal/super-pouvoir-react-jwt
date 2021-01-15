/* eslint-disable react/destructuring-assignment */

import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import styles from "./Product.module.css";

const Product = (props) => {
  const [powers, setPowers] = useState([]);
  // eslint-disable-next-line react/prop-types
  const slug = props.match.params.power;

  useEffect(() => {
    const { REACT_APP_SERVER_ADDRESS } = process.env;
    if (slug) {
      setPowers(slug);
      axios
        .get(`${REACT_APP_SERVER_ADDRESS}/product/${slug}`)
        .then((res) => res.data)
        .then((data) => {
          setPowers(data);
        });
    }
  }, [slug]);

  const { title, prix, picture, contenu_produit, time, stock } = powers;
  return (
    <div className={styles.product}>
      <h1>Decouvrez le pouvoir : {title}</h1>
      <div className={styles.column} />
      <div className={styles.align}>
        <img className={styles.image} src={picture} alt={title} />
      </div>
      <div className={styles.list}>
        <ul>
          <li>Prix: {prix}$</li>
          <li>En stock : {stock} pilules restantes</li>
          <li>Durée : {time} minutes / pilule</li>
        </ul>
      </div>
      <div className={styles.align}>
        <button className={styles.redbutton} type="button">
          Ajouter au panier
        </button>
      </div>
      <h2>Description du pouvoir</h2>
      <p className={styles.content}>{contenu_produit}</p>
    </div>
  );
};
Product.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string,
    }),
  }).isRequired,
};

export default Product;
