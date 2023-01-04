import Search from "../components/Serach/Search";
import { useState } from "react";
import CountriesList from "../components/Countries/CountriesList";

const Countries = () => {
  const [userInput, setUserInput] = useState("");

  return (
    <div className="countries-page">
      <Search userInput={userInput} setUserInput={setUserInput} />
      <CountriesList userInput={userInput}/>
    </div>
  );
};

export default Countries;
