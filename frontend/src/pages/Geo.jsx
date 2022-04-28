import React from "react";
import GoogleMap from "../components/Map";
import Button from "../components/Button";

function Geo() {
  return (
    <>
      <div className="geo">
        <h1>Entrer votre position :</h1>
        <GoogleMap />
      </div>
      <div id="button-div-map">
        <Button link="/ingredient" text="Je propose mon reste" />
      </div>
    </>
  );
}

export default Geo;
