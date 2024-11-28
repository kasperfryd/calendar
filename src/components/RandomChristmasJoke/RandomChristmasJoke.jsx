import { useEffect, useState } from "react";
import style from "./RandomChristmasJoke.module.scss";

export const RandomChristmasJoke = () => {
  const [christmasJoke, setChristmasJoke] = useState();

  useEffect(() => {
    fetch("https://christmasjoy.dev/api/jokes?random")
      .then((res) => res.json())
      .then((data) => setChristmasJoke(data))
      .catch((error) => console.error(error));
  }, []);

    return (
      <section className={style.factStyle}>
        <h5>Den daglige julejoke</h5>
        <p>"{christmasJoke?.question}"</p>
        <p>"{christmasJoke?.answer}"</p>
      </section>
    );
  }
