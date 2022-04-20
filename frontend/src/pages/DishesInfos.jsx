import React from "react";
import DishInfo from "../components/DishInfo";
import dishes from "../datas/Dishes";

function DishesInfos() {
  return (
    <div className="dishesInfos-container">
      <div>
        <DishInfo dishes={dishes[0]} />
      </div>
    </div>
  );
}

export default DishesInfos;
