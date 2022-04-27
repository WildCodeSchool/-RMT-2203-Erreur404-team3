import React from "react";
import GoogleMap from "../components/Map";

function Geo() {
  return (
    <div className="geo">
      <h1>Entrer votre position :</h1>
      <GoogleMap />
    </div>
  );
}

export default Geo;
