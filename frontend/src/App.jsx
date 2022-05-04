import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// eslint-disable-next-line import/no-unresolved
import Home from "./pages/Home";
import Geo from "./pages/Geo";
import DishesList from "./pages/DishesList";
import DishesInfos from "./pages/DishesInfos";
import Chat from "./pages/ChatPage";
import DisplayIngredient from "./pages/DisplayIngredient";
import Ingredient from "./pages/Ingredient";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/disheslist" element={<DishesList />} />
        <Route path="/dishesinfos" element={<DishesInfos />} />
        <Route path="/geo" element={<Geo />} />
        <Route path="/chat" element={<Chat />} />
        <Route
          path="/displayingredient/:recipe"
          element={<DisplayIngredient />}
        />
        <Route path="/ingredient" element={<Ingredient />} />
      </Routes>
    </Router>
  );
}

export default App;
