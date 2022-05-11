import React from "react";
import Logos from "../components/Logos";
import FloattingText from "../components/FloattingText";
import Button from "../components/Button";

export default function ValidationPage() {
  return (
    <section className="validation">
      <Logos img="https://i.ibb.co/N9B781f/Merci.png" alt="Merci" />
      <FloattingText text="Pensez à bien valider lorsque vous avez échangé vos plats !" />
      <div className="Validationpage-button-div">
        <Button link="/" text="Merci de votre geste !" />
      </div>
    </section>
  );
}
