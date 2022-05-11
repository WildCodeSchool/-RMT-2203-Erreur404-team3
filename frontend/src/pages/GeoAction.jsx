import React from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import SaveUsers from "../components/SaveUsers";

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
        <SaveUsers />
      </div>

      <div className="container geo-bot">
        <Button link={url[action]} text={text[action]} />
      </div>
    </section>
  );
}

export default GeoAction;
