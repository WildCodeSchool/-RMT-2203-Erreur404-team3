/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import Map from "./Map";

function SaveUsers() {
  const [userFirstName, setUserFirstname] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userLocation, setUserLocation] = useState("");
  const [userLat, setUserLat] = useState("");
  const [userLng, setUserLng] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const tmpDate = new Date().toISOString().split("T");
    const date = `${tmpDate[0]} ${tmpDate[1]}`;
    const submit = {
      userFirstName,
      userLastName,
      date,
      userLat,
      userLng,
    };
    const lat = setUserLat(userLocation.lat);
    const lng = setUserLng(userLocation.lng);
    axios
      .post("http://localhost:5000/dishlist", {
        userfirstname: userFirstName,
        userlastname: userLastName,
        dishdate: date,
        userlat: userLat,
        userlng: userLng,
      })
      .then(() => {
        console.warn("Yes !");
      })
      .catch(() => {
        console.warn("No !");
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="geo-input-form">
        <h2>
          Entrez votre nom, prenoms ainsi que votre image de profil si vous le
          souhaitez
        </h2>
        <input
          value={userFirstName}
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={(e) => setUserFirstname(e.target.value)}
          required
        />
        <input
          value={userLastName}
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={(e) => setUserLastName(e.target.value)}
          required
        />
        <Map userLocation={userLocation} setUserLocation={setUserLocation} />
        <div className="save-users-button-div">
          <button
            className="save-users-button"
            type="submit"
            onClick={handleSubmit}
          >
            Confirmer
          </button>
        </div>
      </form>
    </div>
  );
}

export default SaveUsers;
