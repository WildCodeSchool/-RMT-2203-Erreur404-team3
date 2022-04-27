import React from "react";
import { Link } from "react-router-dom";
import LittleBubbles from "./LittleBubbles";

function Button({ link, text }) {
  return (
    <Link
      className="composent-button-link"
      onClick={() => LittleBubbles.setBalls("")}
      to={link}
    >
      {text}
    </Link>
  );
}

export default Button;
