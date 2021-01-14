import React from "react";
import style from "./Power.module.css";
import heros from "../../../images/super-héros.jpg";
import CardPower from "./CardPower";

function Power() {
  const superPower = [
    {
      title: "Cailloux-man",
      prix: 20,
      image: heros,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nemo ullam enim rerum Sed quo Eligendi labore reiciendisvoluptatum explicabo aliquam voluptas iure numquam nemo repellat  rem quam excepturi nam? Assumenda reiciendis odio tempore!",
    },
    {
      title: "autre pouvoir",
      prix: 60,
      image: heros,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nemo ullam enim rerum Sed quo Eligendi labore reiciendisvoluptatum explicabo aliquam voluptas iure numquam nemo repellat  rem quam excepturi nam? Assumenda reiciendis odio tempore!",
    },
  ];

  return (
    <div className={style.Power}>
      {superPower.map((power) => (
        <CardPower power={power} key={power.title} />
      ))}
    </div>
  );
}

export default Power;
