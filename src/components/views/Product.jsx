import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import hero from "../../images/super-pouvoir-classique.jpg";
import styles from "./Product.module.css";

const Product = (props) => {
  const [powers, setPowers] = useState([]);

  useEffect(() => {
    const { slug } = props.match.params;
    const { REACT_APP_SERVER_ADDRESS } = process.env;
    axios
      .get(`${REACT_APP_SERVER_ADDRESS}/power/:${slug}`)
      .then((res) => res.data)
      .then((data) => {
        setPowers(data);
      });
  }, []);

  return (
    <div className={styles.product}>
      <h1>Découvrez le pouvoir : {powers.title}</h1>
      <div className={styles.column} />
      <div className={styles.align}>
        <img className={styles.image} src={hero} alt="product.title" />
      </div>
      <div className={styles.list}>
        <ul>
          <li>product.prix</li>
          <li>En stock : product.stock</li>
          <li>Durée : product.time</li>
        </ul>
      </div>
      <div className={styles.align}>
        <button className={styles.redbutton} type="button">
          Ajouter au panier
        </button>
      </div>
      <h2>Description du pouvoir</h2>
      <p className={styles.content}>product.content</p>
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
