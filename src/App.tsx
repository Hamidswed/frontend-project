import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Countries from "./pages/Countries";
import Favorites from "./pages/Favorites";
import CountryDetail from "./pages/CountryDetail";

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
      </div>
  );
}

export default App;
