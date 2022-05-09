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
      <FloattingText text="Penses à bien valider lorsque tu as récupéré ton plat !" />
      <div className="Validationpage-button-div">
        <Button link="/" text="J'ai récupéré mon reste !" />
        <Button link="/" text="J'ai donné mon reste !" />
      </div>
    </div>
  );
}
