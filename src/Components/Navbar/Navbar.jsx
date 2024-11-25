import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/count">Compteur</Link>
      <Link to="/jokes">Jokes</Link>
      <Link to="/weatherapp">WeatherApp</Link>
    </div>
  );
};

export default Navbar;
