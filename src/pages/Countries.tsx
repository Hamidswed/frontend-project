import Search from "../components/Serach/Search";
import { useState } from "react";
import CountriesListTest from "../components/CountriesList/CountriesListTest";

const Countries = () => {
  const [userInput, setUserInput] = useState("");

  return (
    <div className="countries-page">
      <Search userInput={userInput} setUserInput={setUserInput} />
      <CountriesListTest userInput={userInput}/>
    </div>
  );
};

export default Countries;
