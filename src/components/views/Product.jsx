import React from "react";
import hero from "../../images/super-pouvoir-classique.jpg";
import styles from "./Product.module.css";

const Product = () => {
  return (
    <div>
      <h1>Découvrez le pouvoir : product.title</h1>
      <img className={styles.image} src={hero} alt="product.title" />
      <ul>
        <li>product.prix</li>
        <li>En stock : product.price</li>
        <li>Durée : product.time</li>
      </ul>
      <button type="button">Ajouter au panier</button>
      <p className={styles.content}>product.content</p>
    </div>
  );
};

export default Product;
