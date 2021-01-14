import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const { REACT_APP_SERVER_ADDRESS } = process.env;
    axios
      .get(`${REACT_APP_SERVER_ADDRESS}/`)
      .then((res) => res.data)
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div>
      <p>Products List</p>
      <ul>
        {products.map((product) => (
          <li key={product.idsuper_pouvoir}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
