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

//

// import React from "react";
// import dishes from './components/Data';
// import axios from "axios";

// function DishesInfos() {
// return (
//   <div>
//      <h2>{dishes[0].itemName}</h2>
//      <h2>{dishes[0].allergene}</h2>
//      <h2>{dishes[0].description}</h2>
//      <h2>Description</h2>
//   </div>
// );
/// }

// export default DishesInfos;
