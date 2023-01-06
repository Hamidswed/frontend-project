import "./App.css";
import Home from "./pages/Home";
import Countries from "./pages/Countries";
import Favorites from "./pages/Favorites";
import NavBar from "./components/NavBar/NavBar";
import CountryDetail from "./pages/CountryDetail";

import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/countries/:name" element={<CountryDetail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
