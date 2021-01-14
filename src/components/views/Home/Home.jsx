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
      <form className={style.form}>
        <label className={style.label} htmlFor="classiques">
          <input type="checkbox" id="classiques" name="classiques" />
          Les classiques
        </label>
        <label className={style.label} htmlFor="inutiles">
          <input type="checkbox" id="inutiles" name="inutiles" />
          Les inutiles
        </label>
        <label className={style.label} htmlFor="environnementaux">
          <input
            type="checkbox"
            id="environnementaux"
            name="environnementaux"
          />
          Les environnementaux
        </label>
        <label className={style.label} htmlFor="flippants">
          <input type="checkbox" id="flippants" name="flippants" />
          Les flippants
        </label>
        <label className={style.label} htmlFor="corporels">
          <input type="checkbox" id="corporels" name="corporels" />
          Les corporels
        </label>
      </form>
      <Power />
    </div>
  );
}

export default Home;
