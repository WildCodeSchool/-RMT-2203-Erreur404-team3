/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// eslint-disable-next-line import/no-unresolved
import Ingredient from "@pages/Ingredient";
import Home from "./pages/Home";
import Geo from "./pages/Geo";
import DishesList from "./pages/DishesList";
import DishesInfos from "./pages/DishesInfos";
// import Ingredient from "./pages/Ingredient";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/disheslist" element={<DishesList />} />
          <Route path="/dishesinfos" element={<DishesInfos />} />
          <Route path="/geo" element={<Geo />} />
          <Route path="/ingredient" element={<Ingredient />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
