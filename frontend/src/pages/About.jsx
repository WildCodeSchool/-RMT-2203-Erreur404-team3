/* eslint-disable import/extensions */
import React from "react";
import LittleBubbles from "../components/LittleBubbles";
import FloattingTitle from "../components/FloattingTitle";
import FloattingText from "../components/FloattingText";
import DonatingButton from "../components/DonatingButton";

function About() {
  return (
    <div className="about">
      {/* small logo */}
      <LittleBubbles />
      <FloattingTitle title="A PROPOS DE NOUS" />
      <FloattingTitle title="Notre Mission" />
      <FloattingText
        text="En France, les pertes et gaspillages alimentaires représentent 10 millions de tonnes de produits par an. Ce gaspillage représente un prélèvement inutile de ressources naturelles, telles que les terres cultivables, l’eau, et des émissions de gaz à effet de serre qui pourraient être évitées. Ce sont également des déchets qui pourraient être évités qui n’auraient donc pas à être traités et n’engendreraient pas les coûts de gestion afférents. Toutes les étapes de la chaîne alimentaire, production, transformation, distribution et consommation, participent aux pertes et gaspillages alimentaires.
        Nos ambitions sont de limiter le gaspillage alimentaire et de favoriser les échanges humains. En mettant à disposition par le biais du don des ingrédients et des plats que vous ne consommerez pas, vous ferez plaisir à quelqu'un, en plus c'est écologique et vous ferez de nouvelles rencontres."
      />
      <div>{/* composant newslatter */}</div>
      <div>
        <DonatingButton />
      </div>
    </div>
  );
}

export default About;
