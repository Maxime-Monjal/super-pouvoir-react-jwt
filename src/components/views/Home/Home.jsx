import React, { useState } from "react";
import style from "./Home.module.css";
import Power from "../../commons/Power/Power";

function Home() {
  const [url, setUrl] = useState("");

  return (
    <div className={style.Home}>
      <div className={style.img}>
        <div className={style.containerhome}>
          <h1 className={style.title}>Magic Pills</h1>
          <p className={style.presentation}>
            Bienvenue sur Magic Pills, un site super où vous pouvez acheter des
            super-pouvoirs pour devenir un super héros et c&#39;est super !!!
          </p>
        </div>
      </div>
      <div className={style.categorie}>
        <input
          className={style.button}
          type="button"
          id="toutes"
          value="Toutes catégories"
          onClick={() => setUrl("")}
        />
        <input
          className={style.button}
          type="button"
          id="classique"
          value=" Les classiques"
          onClick={(e) => setUrl(e.target.id)}
        />
        <input
          className={style.button}
          type="button"
          id="inutile"
          value="Les inutiles"
          onClick={(e) => setUrl(e.target.id)}
        />
        <input
          className={style.button}
          type="button"
          id="environnementale"
          value="Les environnementaux"
          onClick={(e) => setUrl(e.target.id)}
        />
        <input
          className={style.button}
          type="button"
          id="flippant"
          value="Les flippants"
          onClick={(e) => setUrl(e.target.id)}
        />

        <input
          className={style.button}
          type="button"
          id="corporel"
          value="Les corporels"
          onClick={(e) => setUrl(e.target.id)}
        />
      </div>
      <Power url={url} />
    </div>
  );
}

export default Home;
