import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Geo from "./pages/Geo";
import GeoAction from "./pages/GeoAction";
import DishesList from "./pages/DishesList";
import DishesInfos from "./pages/DishesInfos";
import Chatpage from "./pages/ChatPage";
import DisplayIngredient from "./pages/DisplayIngredient";
import Ingredient from "./pages/Ingredient";
import About from "./pages/About";
import ValidationPage from "./pages/Validationpage";
import PageNotFound from "./pages/PageNotFound";
import "./App.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/disheslist" element={<DishesList />} />
        <Route path="/dishesinfos/:recipeid" element={<DishesInfos />} />
        <Route path="/geo" element={<Geo />} />
        <Route path="/geo/:action" element={<GeoAction />} />
        <Route path="/chat" element={<Chatpage />} />
        <Route
          path="/displayingredient/:recipe"
          element={<DisplayIngredient />}
        />
        <Route path="/ingredient" element={<Ingredient />} />
        <Route path="/about" element={<About />} />
        <Route path="/validation" element={<ValidationPage />} />
        <Route path="*" component={PageNotFound} />
      </Routes>
    </Router>
  );
}

export default App;
