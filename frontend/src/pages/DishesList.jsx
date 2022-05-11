import axios from "axios";
import React, { useEffect } from "react";
import DishItem from "../components/DishItem";

function DishesList() {
  const [dishes, setDishes] = React.useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/dishlist")
      .then((res) => {
        console.warn(res.data);
        setDishes(res.data);
      })
      .catch((err) => {
        console.warn(err);
      });
    console.warn("e", dishes);
  }, []);

  return (
    <div className="dishesList-container">
      <h2>Liste des plats</h2>
      <div>
        {dishes.map((dish) => (
          <DishItem key={dish.index} dish={dish} />
        ))}
      </div>
    </div>
  );
}

export default DishesList;
