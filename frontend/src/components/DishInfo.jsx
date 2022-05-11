import React from "react";
import "../css/DishInfo.css";

function DishInfo({ dish }) {
  return (
    <div className="dishInfo-container">
      <section className="DI-back">
        <img src={dish.dishimage} alt={dish.dishname} />
      </section>

      <section className="DI-front">
        <span>BACK</span>

        <h2>{dish.dishname}</h2>

        <article className="DI-allergenes">
          <h3>Ingredients</h3>
          <div>
            <p>{dish.dishingredient1}</p>
            <p>{dish.dishingredient2}</p>
            <p>{dish.dishingredient3}</p>
          </div>
        </article>
        <article className="DI-description">
          <h3>Quantité</h3>
          <p>{dish.dishnumber}</p>
        </article>
        <article className="DI-description">
          <h3>Description</h3>
          <p>{dish.dishcomment}</p>
        </article>

        <button className="dishInfoButton" type="button">
          Choisir ce plat
        </button>
      </section>
    </div>
  );
}

export default DishInfo;

