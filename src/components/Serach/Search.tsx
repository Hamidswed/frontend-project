import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { useState } from "react";
import { actions } from "./../../redux/slice/country";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");

  const dispatch = useDispatch();
  const countriesList = useSelector(
    (state: RootState) => state.country.countries
  );

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    searchHandler();
  };

  const searchHandler = () => {
    const result = countriesList.filter((country) =>
      country.name.common.toLowerCase().includes(searchInput.toLowerCase())
    );
    console.log(result, "result");
    dispatch(actions.getCountryData(result));
  };
  console.log(searchInput);
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
