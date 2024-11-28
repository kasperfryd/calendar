import { useEffect, useState } from "react";
import style from "./RandomChristmasFact.module.scss";

export const RandomChristmasFact = () => {
  const [christmasFact, setChristmasFact] = useState();

  useEffect(() => {
    fetch("https://christmasjoy.dev/api/facts?random")
      .then((res) => res.json())
      .then((data) => setChristmasFact(data))
      .catch((error) => console.error(error));
  }, []);

    return (
      <section className={style.factStyle}>
        <h5>Det dagelige julefact</h5>
        <p>"{christmasFact}"</p>
      </section>
    );
  }
