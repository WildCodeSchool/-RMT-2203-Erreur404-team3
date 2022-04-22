import React from "react";
import DishInfo from "../components/DishInfo";
import dishes from "../datas/Dishes";
import AutoComplete from "../components/autoCompletion";

function DishesInfos() {
  return (
    <div className="dishesInfos-container">
      <div>
        <DishInfo dish={dishes[0]} />
        <AutoComplete />
      </div>
    </div>
  );
}

export default DishesInfos;
