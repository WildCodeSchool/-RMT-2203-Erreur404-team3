import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// eslint-disable-next-line import/no-unresolved
import Dish from "@pages/Dish";
import Home from "./pages/Home";
import DishesList from "./pages/DishesList";
import DishesInfos from "./pages/DishesInfos";

import "./App.css";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/disheslist">Dishes List</Link>
          </li>
          <li>
            <Link to="/dish">Dish</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/disheslist" element={<DishesList />} />
        <Route path="/dishesinfos" element={<DishesInfos />} />
        <Route path="/dish" element={<Dish />} />
        <Route />
        <Route />
        <Route />
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
