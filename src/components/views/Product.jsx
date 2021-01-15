import React from "react";
import { Helmet } from "react-helmet";
import hero from "../../images/super-pouvoir-classique.jpg";
import styles from "./Product.module.css";

const Product = () => {
  return (
    <div>
      <Helmet>
        <title>Produit</title>
        <meta
          name="description"
          content="This is the product you are interested in"
        />
        <link rel="canonical" href="http://localhost:3000" />
      </Helmet>
      <h1>Découvrez le pouvoir : product.title</h1>
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

export default Product;
