import React from "react";
import SaveUsers from "../components/SaveUsers";
import Map from "../components/Map";

function GeoAction() {
  return (
    <section className="geo">
      <div className="container geo-map">
        <Map />
      </div>

      <div className="container geo-bot">
        <SaveUsers />
      </div>
    </section>
  );
}

export default GeoAction;
