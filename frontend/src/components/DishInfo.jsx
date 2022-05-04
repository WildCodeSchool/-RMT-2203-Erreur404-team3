import React from "react";

import "../css/DishInfo.css";

function DishInfo({ dish }) {
  return (
    <div className="dishInfo-container">
      <section className="DI-back">
        <img src={dish.image.src} alt={dish.image.alt} />
      </section>

      <section className="DI-front">
        <span>BACK</span>

        <h2>{dish.itemName}</h2>

        <article className="DI-allergenes">
          <h3>Ingredients</h3>
          <div>
            {dish.ingredients.map((ingredient) => (
              <p>{ingredient}</p>
            ))}
          </div>
        </article>

        <article className="DI-description">
          <h3>Description</h3>
          <p>{dish.description}</p>
        </article>

        <button className="dishInfoButton" type="button">
          Choisir ce plat
        </button>
      </section>
    </div>
  );
}

export default DishInfo;