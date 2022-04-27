import React from "react";
import LittleBubbles from "../components/LittleBubbles";
import FloattingTitle from "../components/FloattingTitle";
import FloattingText from "../components/FloattingText";
import RatingCounter from "../components/RatingCounter";

function About() {
  return (
    <div className="about">
      {/* small logo */}
      <LittleBubbles />
      <FloattingTitle title="A Propos de nous" />
      <FloattingTitle title="Notre Mission" />
      <FloattingText
        text="En France, les pertes et gaspillages alimentaires représentent 10 millions de tonnes de produits par an. Ce gaspillage représente un prélèvement inutile de ressources naturelles, telles que les terres cultivables, l’eau, et des émissions de gaz à effet de serre qui pourraient être évitées. Ce sont également des déchets qui pourraient être évités qui n’auraient donc pas à être traités et n’engendreraient pas les coûts de gestion afférents. Toutes les étapes de la chaîne alimentaire, production, transformation, distribution et consommation, participent aux pertes et gaspillages alimentaires.<br/>
        Nos ambitions sont de limiter le gaspillage alimentaire et de favoriser les écahnges humains. En donnant des ingrédients que vous n'utiliserez pas et des plats 
        
        vous leurs donner une seconde vie et en plus c'est écologique."
      />
      <div>{/* don */}</div>
      <div>{/* composant newslatter */}</div>
      <div>
        <FloattingTitle title="Laissez-nous une petite note" />
        <RatingCounter />
      </div>
    </div>
  );
}

export default About;
