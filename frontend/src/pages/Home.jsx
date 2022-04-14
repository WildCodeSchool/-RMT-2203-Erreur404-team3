import React from "react";
import Logos from "../components/Logos";
import Button from "../components/Button";

export default function Home() {
  return (
    <div className="home">
      <Logos />
      <div className="home-button-div">
        <Button link="/adopt" text="Je prends !" />
        <Button link="/give" text="Je donne !" />
      </div>
    </div>
  );
}
