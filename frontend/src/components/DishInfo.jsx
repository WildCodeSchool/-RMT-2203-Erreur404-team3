import React from "react";

function DishInfo({ dishes }) {
  return (
    <div className="dishInfo-container">
      <h2> {dishes.itemName} </h2>
      <h3>Allergènes</h3>
      <p> {dishes.allergene}</p>
      <h3>Description</h3>
      <p> {dishes.description}</p>
      <button className="dishInfoButton" type="button">
        {" "}
        Choisir ce plat
      </button>
    </div>
  );
}

export default DishInfo;
