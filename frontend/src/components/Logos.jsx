function Logos(isFoodAdopted) {
  // La const pour gérér le changement de logo
  const img = isFoodAdopted
    ? "https://i.ibb.co/N9B781f/Merci.png"
    : "https://i.ibb.co/mG1mFSd/Adopte-un-reste.png";
  const alt = isFoodAdopted ? "Merci" : "Adopte-un-reste";

  return (
    // La div du logo
    <div className="composent-logo-div">
      <img className="composent-logo" src={img} alt={alt} border="0" />
    </div>
  );
}

export default Logos;
