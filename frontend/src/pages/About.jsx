import React from "react";
import LittleBubbles from "../components/LittleBubbles";
import FloattingTitle from "../components/FloattingTitle";
import FloattingText from "../components/FloattingText";
import Media from "../components/Media";
import DonatingButton from "../components/DonatingButton";
import RatingCounter from "../components/RatingCounter";

function About() {
  return (
    <div className="about">
      {/* small logo */}
      <LittleBubbles />
      <FloattingTitle title="À propos de nous" />
      <FloattingTitle title="Notre Mission" />
      <FloattingText
        text="En France, les pertes et gaspillages alimentaires représentent 10 millions de tonnes de produits par an. Ce gaspillage représente un prélèvement inutile de ressources naturelles, telles que les terres cultivables, l’eau, et des émissions de gaz à effet de serre qui pourraient être évitées. Ce sont également des déchets qui pourraient être évités qui n’auraient donc pas à être traités et n’engendreraient pas les coûts de gestion afférents. Toutes les étapes de la chaîne alimentaire, production, transformation, distribution et consommation, participent aux pertes et gaspillages alimentaires.
        Adopt Un Rest est une application de dons entre particuliers. Donnez et récupérez gratuitement de la nourriture autour de vous ! Adopt Un Reste est une solution utile, gratuite et vertueuse : c'est une solution éco-responsable, anti-gaspillage, favorisant l'économie circulaire et les interractions humaines."
      />
      <FloattingTitle title="Nous aider" />
      <FloattingText text="Votre confiance est un soutien indéniable dans notre développement, pour avancer ensemble dans la lutte contre le gaspillage." />
      <DonatingButton />
      <FloattingTitle title="La petite note" />
      <FloattingText text="Laissez-nous vos avis à l'aide des 5 étoiles afin d'améliorer notre application.  " />
      <RatingCounter />
      <FloattingTitle title="Nous Suivre" />
      <Media />
    </div>
  );
}

export default About;
