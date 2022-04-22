import React from "react";
import LittleBubbles from "../components/LittleBubbles";
// import Logos from "../components/Logos";

import React from "react";
import LittleBubbles from "@components/LittleBubbles";
import Logos from "../components/Logos";
import Button from "../components/Button";
import FloattingText from "../components/FloattingText";
import FloattingTitle from "../components/FloattingTitle";

export default function Home() {
  return (
    <div className="home">
      <Logos />
      <LittleBubbles />
      <FloattingTitle title="Adopte un reste, c'est quoi ?" />
      <FloattingText
        text=`Cette année plus que jamais, la générosité et la solidarité sont de mise, alors à l'action !
          Très simplement, tu peux faire profiter un voisin d'un plat que tu as cuisiné en trop grande
          quantité ou d'ingrédients qui sinon partiront tristement à la
          poubelle.`
      />
      <div className="home-button-div">
        <Button link="/geo" text="Je prends !" />
        <Button link="/geo" text="Je donne !" />
      </div>
    </div>
  );
}
