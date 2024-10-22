import React from "react";

const Burger = ({ toggleMenu }) => {
  return (
    <label className="hamburger" onClick={toggleMenu}>
      <div></div>
      <div></div>
      <div></div>
    </label>
  );
};

export default Burger;
