import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// eslint-disable-next-line import/no-unresolved
import Home from "./pages/Home";
import Geo from "./pages/Geo";
import DishesList from "./pages/DishesList";
import DishesInfos from "./pages/DishesInfos";
import Chatpage from "./pages/ChatPage";
import DisplayIngredient from "./pages/DisplayIngredient";
import Ingredient from "./pages/Ingredient";
import About from "./pages/About";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/disheslist" element={<DishesList />} />
        <Route path="/dishesinfos" element={<DishesInfos />} />
        <Route path="/geo" element={<Geo />} />
        <Route path="/chat" element={<Chatpage />} />
        <Route
          path="/displayingredient/:recipe"
          element={<DisplayIngredient />}
        />
        <Route path="/ingredient" element={<Ingredient />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
