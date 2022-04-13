import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Bidou from "./pages/DishesList";
import DishesInfos from "./pages/DishesInfos";

import "./App.css";

function App() {
  return (
    // <h1>pouet</h1>
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
              <Link to="dishesInfos">Dishes Infos</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="disheslist" element={<Bidou />} />
          <Route path="dishesInfos" element={<DishesInfos />} />
          <Route />
          <Route />
          <Route />
          <Route />
          <Route />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
