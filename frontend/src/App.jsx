import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DishesInfos from "./pages/DishesInfos";
import Home from "./pages/Home";
import DishesList from "./pages/DishesList";

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
              <Link to="/disheslist">Dishes List</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/disheslist" element={<DishesList />} />
          <Route path="/dishesinfos" element={<DishesInfos />} />
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
