import Search from "../components/Serach/Search";
import { useState } from "react";
import CountriesList from "../components/Countries/CountriesList";

const Countries = () => {
  const [userInput, setUserInput] = useState("");

  return (
    <div className="countries-page">
      <h2>Country List</h2>
      <Search userInput={userInput} setUserInput={setUserInput} />
      <CountriesList userInput={userInput}/>
    </div>
  );
};

export default Countries;
