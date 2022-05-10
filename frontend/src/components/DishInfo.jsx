import React from "react";
import Button from "./Button";

function DishInfo({ dish }) {
  return (
    <div className="dishInfo-container">
      <section className="DI-back">
        <img src={dish.image.src} alt={dish.image.alt} />
      </section>
      <section className="DI-front">
        <Button link="ChatPage" text="Retour à la liste" />
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
        <Button link="/chat" text="Choisir ce plat" />
      </section>
    </div>
  );
}

export default DishInfo;
