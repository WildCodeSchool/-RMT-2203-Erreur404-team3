import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DishInfo from "../components/DishInfo";

function DishesInfos() {
  const [mealData, setMealData] = React.useState([]);
  const { recipeid } = useParams();
  useEffect(() => {
    const getMealData = async () => {
      const getMealResult = await axios(
        `http://localhost:5000/dishlist/${recipeid}`
      );
      setMealData(getMealResult.data);
    };
    getMealData();
  }, []);

  return (
    <section className="dishesInfos-container">
      <DishInfo dish={mealData} />
    </section>
  );
}

export default DishesInfos;