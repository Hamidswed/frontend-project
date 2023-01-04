import CountriesList from "../components/CountriesList/CountriesList";
import Search from "../components/Serach/Search";
import { useState } from "react";
import CountriesListTest from "../components/CountriesList/CountriesListTest";

const Countries = () => {
  const [userInput, setUserInput] = useState("");

  return (
    <div>
      <Search userInput={userInput} setUserInput={setUserInput} />
      {/* <CountriesList userInput={userInput}/> */}
      <CountriesListTest userInput={userInput}/>
    </div>
  );
};

export default Countries;
