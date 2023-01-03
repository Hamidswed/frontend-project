
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Countries from './pages/Countries';
import Favorites from './pages/Favorites';
import CountryDetail from './pages/CountryDetail';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/countries" element={<Countries/>}/>
        <Route path="/countries/:id" element={<CountryDetail/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
    </div>
  );
}

export default App;
