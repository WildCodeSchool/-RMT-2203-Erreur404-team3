import React from "react";
import { useParams } from "react-router-dom";
import GoogleMap from "../components/Map";
import Button from "../components/Button";

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
    <section className="geo">
      <div className="container geo-map">
        <GoogleMap />
      </div>

      <div className="container geo-bot">
        <Button link={url[action]} text={text[action]} />
      </div>
    </section>
  );
}

export default GeoAction;
