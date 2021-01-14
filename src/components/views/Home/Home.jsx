import React from "react";
import style from "./Home.module.css";
import Power from "../../commons/Power/Power";

function Home() {
  return (
    <div className={style.Home}>
      <div className={style.img}>
        <div className={style.containerhome}>
          <h1 className={style.title}>Magic Pills</h1>
          <p className={style.presentation}>
            Bienvenue sur Magic Pills un site super ou vous pouvez achetez des
            super-pouvoir pour devenir un super héros et c&#39;est super !
          </p>
        </div>
      </div>
      <Power />
    </div>
  );
}

export default Home;
