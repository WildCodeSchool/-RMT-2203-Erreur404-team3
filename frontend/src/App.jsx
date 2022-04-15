import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Bidou from "./pages/DishesList";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="disheslist" element={<Bidou />} />
        <Route path="dish" element={<Bidou />} />
        <Route />
        <Route />
        <Route />
        <Route />
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
