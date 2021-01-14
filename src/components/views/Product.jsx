import React from "react";
import hero from "../../images/super-pouvoir-classique.jpg";
import styles from "./Product.module.css";

const Product = () => {
  return (
    <div>
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
