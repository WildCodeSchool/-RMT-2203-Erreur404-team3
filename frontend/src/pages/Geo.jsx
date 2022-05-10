import React from "react";
import GoogleMap from "../components/Map";
import Button from "../components/Button";
import Logos from "../components/Logos";

function Geo() {
  return (
    <>
      <div className="geo">
        <div className="geo-logo">
          <Logos />
        </div>
        <div className="geo-title">
          <h1 id="geo-title">Entrer votre position :</h1>
        </div>
        <GoogleMap />
      </div>
      <div id="button-div-map">
        <Button link="/disheslist" text="Je propose mon reste" />
        <Button link="/ingredient" text="Je prends mon reste" />
      </div>
    </>
  );
}

export default Geo;
