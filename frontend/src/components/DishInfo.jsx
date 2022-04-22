import React from "react";

function DishInfo({ dish }) {
  return (
    <div className="dishInfo-container">
      <h2>{dish.itemName}</h2>
      <h3>Allergènes</h3>
      <p>{dish.allergene}</p>
      <h3>Description</h3>
      <p>{dish.description}</p>
      <button className="dishInfoButton" type="button">
        Choisir ce plat
      </button>
    </div>
  );
}

export default DishInfo;
