import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// eslint-disable-next-line import/no-unresolved
import Home from "./pages/Home";
import Geo from "./pages/Geo";
import DishesList from "./pages/DishesList";
import DishesInfos from "./pages/DishesInfos";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="disheslist">Dishes List</Link>
            </li>
            <li>
              <Link to="dishesinfos">Dishes Infos</Link>
            </li>
            <li>
              <Link to="geo">Localisation</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/disheslist" element={<DishesList />} />
          <Route path="/dishesinfos" element={<DishesInfos />} />
          <Route path="/geo" element={<Geo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
