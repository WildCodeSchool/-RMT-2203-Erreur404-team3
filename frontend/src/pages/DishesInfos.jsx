import React from "react";
import DishInfo from "../components/DishInfo";
import dishes from "../datas/Dishes";

function DishesInfos() {
  return (
    <section className="dishesInfos-container">
      <DishInfo dish={dishes[0]} />
    </section>
  );
}

export default DishesInfos;
