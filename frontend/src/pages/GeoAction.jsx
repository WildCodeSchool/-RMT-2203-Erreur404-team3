import React from "react";
import { useParams } from "react-router-dom";
import GoogleMap from "../components/Map";
import Button from "../components/Button";
import Logos from "../components/Logos";

function GeoAction() {
  const { action } = useParams();
  const url = {
    take: "/disheslist",
    give: "/ingredient",
  };
  const text = {
    take: "Je prends mon reste",
    give: "Je donne mon reste",
  };
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
        <Button link={url[action]} text={text[action]} />
      </div>
    </>
  );
}

export default GeoAction;
