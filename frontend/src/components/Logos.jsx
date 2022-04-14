import React from "react";

export default function Logos() {
  // La const pour gérér le changement de logo
  const [isFoodAdopted, setIsFoodAdopted] = React.useState(false);

  return (
    // La div du lolo
    <>
      <div className="composent-logo-div">
        {isFoodAdopted ? (
          <img
            className="composent-logo"
            src="https://i.ibb.co/N9B781f/Merci.png"
            alt="Merci"
            border="0"
          />
        ) : (
          <img
            className="composent-logo"
            src="https://i.ibb.co/mG1mFSd/Adopte-un-reste.png"
            alt="Adopte-un-reste"
            border="0"
          />
        )}
      </div>
      <div className="div-button-test-logo">
        {/* Le bouton pour tester le changement de logo  */}
        <button
          className="button-test-logo"
          type="button"
          onClick={() => setIsFoodAdopted(true)}
        >
          Test true
        </button>
        <button
          className="button-test-logo"
          type="button"
          onClick={() => setIsFoodAdopted(false)}
        >
          Test false
        </button>
      </div>
    </>
  );
}
