/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";

export default function Logos() {
  // La const pour gérér le changement de logo
  const [isFoodAdopted, setIsFoodAdopted] = React.useState(false);

  return (
    // La div du logo
    <div className="composent-logo-div">
      {isFoodAdopted ? (
        <img
          onClick={() => setIsFoodAdopted(false)}
          className="composent-logo"
          src="https://i.ibb.co/N9B781f/Merci.png"
          alt="Merci"
          border="0"
        />
      ) : (
        <img
          onClick={() => setIsFoodAdopted(true)}
          className="composent-logo"
          src="https://i.ibb.co/mG1mFSd/Adopte-un-reste.png"
          alt="Adopte-un-reste"
          border="0"
        />
      )}
    </div>
  );
}
