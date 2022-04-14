/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import { Link } from "react-router-dom";

export default function Button(props) {
  return (
    <Link className="composent-button-link" to={props.link}>
      {props.text}
    </Link>
  );
}
