import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { useState } from "react";
import { actions } from "./../../redux/slice/country";

const Search = () => {
  const [userInput, setUserInput] = useState("");

  const dispatch = useDispatch();
  const countriesList = useSelector(
    (state: RootState) => state.country.countries
  );

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
    searchHandler();
  };

  const searchHandler = () => {
    const result = countriesList.filter((country) =>
      country.name.common.toLowerCase().includes(userInput.toLowerCase())
    );
    console.log(result, "result");
    dispatch(actions.getCountryData(result));
  };
  console.log(userInput);
  return (
    <div>
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        onChange={inputHandler}
      />
    </div>
  );
};

export default Search;
