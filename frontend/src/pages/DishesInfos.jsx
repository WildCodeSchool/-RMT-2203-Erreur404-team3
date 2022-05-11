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
    <div className="dishesInfos-container">
      <div>
        <DishInfo dish={mealData} />
      </div>
    </div>
  );
}

export default DishesInfos;