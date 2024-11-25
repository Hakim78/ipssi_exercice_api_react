import React, { useEffect, useState } from "react";
import Affichage from "../Affichage/Affichage";
import "./Count.css";
import Navbar from "../Navbar/Navbar";

const Count = () => {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log("useEffect", count);
  //   alert("Le compteur est à " + count);
  // }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <p>Bienvenu sur mon compteur</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
      <Affichage fromage={count} />{" "}
    </div>
  );
};

export default Count;
