import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { actions } from "./../../redux/slice/country";

type PropType = {
  userInput: string;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
};

const Search = ({ userInput, setUserInput }: PropType) => {
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
    dispatch(actions.getCountryData(result));
  };

  return (
    <div>
      <TextField
        id="standard-basic"
        label="Search country"
        variant="standard"
        onChange={inputHandler}
        InputLabelProps={{
          style: { fontFamily: "'Nunito', sans-serif" },
        }}
      />
    </div>
  );
};

export default Search;
