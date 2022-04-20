/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import { Link } from "react-router-dom";
import LittleBubbles from "./LittleBubbles";

function Button(props) {
  return (
    <Link
      className="composent-button-link"
      onClick={() => LittleBubbles.setBalls("")}
      to={props.link}
    >
      {props.text}
    </Link>
  );
}

export default Button;
