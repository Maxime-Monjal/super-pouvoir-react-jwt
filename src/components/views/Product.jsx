/* eslint-disable react/destructuring-assignment */
/* eslint-disable prefer-destructuring */
import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import hero from "../../images/super-pouvoir-classique.jpg";
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
  return (
    <div>
      {console.log(powers)}

      <h1>Découvrez le pouvoir : {powers.title}</h1>
      <div className={styles.column} />
      <div className={styles.align}>
        <img className={styles.image} src={hero} alt="product.title" />
      </div>
      <div className={styles.list}>
        <ul>
          <li>{powers.prix}</li>
          <li>En stock : {powers.stock}</li>
          <li>Durée : {powers.time}</li>
        </ul>
      </div>
      <div className={styles.align}>
        <button className={styles.redbutton} type="button">
          Ajouter au panier
        </button>
      </div>
      <h2>Description du pouvoir</h2>
      <p className={styles.content}>{powers.contenu_produit}</p>
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
