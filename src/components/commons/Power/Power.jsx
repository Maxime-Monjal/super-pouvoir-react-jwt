import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./Power.module.css";
import CardPower from "./CardPower";

const Power = () => {
  const [powers, setPowers] = useState([]);

  useEffect(() => {
    const { REACT_APP_SERVER_ADDRESS } = process.env;
    axios
      .get(`${REACT_APP_SERVER_ADDRESS}`)
      .then((res) => res.data)
      .then((data) => {
        setPowers(data);
      });
  }, []);
  return (
    <div className={style.Power}>
      {powers.map((power) => (
        <CardPower power={power} key={power.title} />
      ))}
    </div>
  );
};

export default Power;
