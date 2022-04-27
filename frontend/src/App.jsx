import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import DishesList from "./pages/DishesList";
import DishesInfos from "./pages/DishesInfos";
import About from "./pages/About";
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
              <Link to="about">A Propos</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="disheslist" element={<DishesList />} />
          <Route path="dishesinfos" element={<DishesInfos />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
