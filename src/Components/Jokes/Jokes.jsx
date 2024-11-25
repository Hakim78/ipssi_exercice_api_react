import axios from "axios";
import React, { useEffect, useState } from "react";

const Jokes = () => {
  const [jokes, setJokes] = useState("");

  // useEffect(() => {
  //   getJokes();
  // }, []);

  const getJokes = async () => {
    const response = await axios.get("https://api.chucknorris.io/jokes/random");
    setJokes(response.data.value);
  };

  const resetJokes = () => {
    setJokes("");
  };

  return (
    <div>
      <button onClick={getJokes}>Get Jokes</button>
      <p>{jokes}</p>
      <button onClick={resetJokes}>Reset jokes</button>
    </div>
  );
};

export default Jokes;
