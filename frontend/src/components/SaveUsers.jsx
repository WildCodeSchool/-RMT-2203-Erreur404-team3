/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import Button from "./Button";

function SaveUsers() {
  const { action } = useParams();
  const url = {
    take: "/disheslist",
    give: "/ingredient",
  };
  const text = {
    take: "Je prends mon reste",
    give: "Je donne mon reste",
  };

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
    <form onSubmit={handleSubmit} className="geo-input-form">
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

      <button
        className="save-users-button"
        type="submit"
        onClick={handleSubmit}
      >
        Confirmer
      </button>

      <Button link={url[action]} text={text[action]} />
    </form>
  );
}

export default SaveUsers;
