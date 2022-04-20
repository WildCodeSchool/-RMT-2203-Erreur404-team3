/* eslint-disable react/jsx-no-undef */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Bidou from "./pages/DishesList";

import "./App.css";
import Geo from "./pages/Geo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="disheslist" element={<Bidou />} />
        <Route path="dish" element={<Bidou />} />
        <Route path="geo" element={<Geo />} />
        <Route />
        <Route />
        <Route />
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
