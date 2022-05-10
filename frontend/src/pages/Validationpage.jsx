import React from "react";
import LittleBubbles from "../components/LittleBubbles";
import Logos from "../components/Logos";
import FloattingText from "../components/FloattingText";
import FloattingTitle from "../components/FloattingTitle";
import Button from "../components/Button";

export default function ValidationPage() {
  return (
    <div className="validation">
      <FloattingTitle title="Merci de votre adoption" />
      <Logos />
      <LittleBubbles />
      <FloattingText text="Pense à valider lorsque l'échange est terminé !" />
      <div className="Validationpage-button-div">
        <Button link="/" text="Merci de votre geste !" />
        <FloattingText text="A bientôt !" />
      </div>
    </div>
  );
}
