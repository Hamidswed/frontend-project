import CountryItem from "../CountryItem/CountryItem";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useEffect } from "react";
import fetchCountryData from "./../../redux/thunk/country";

import {
  Table,
  TableCell,
  TableContainer,
  TableRow,
  TableBody,
  Paper,
  TableHead,
} from "@mui/material";

type PropType = {
  userInput: string;
};
const CountriesList = ({ userInput }: PropType) => {
  const countriesList = useSelector(
    (state: RootState) => state.country.countries
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (userInput === "") {
      dispatch(fetchCountryData());
    }
  }, [dispatch, userInput]);

  const tableTilte = [
    "Flag",
    "Name",
    "Region",
    "Population",
    "Languages",
    "Favorite",
  ];

  return (
    <div style={{ margin: "50px 200px" }}>
      <TableContainer component={Paper}>
        <Table sx={{ width: "100%" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {tableTilte.map((title) => (
                <TableCell align="center" key={crypto.randomUUID()}>
                  <strong>{title}</strong>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {countriesList.slice(0, 20).map((country) => (
              <CountryItem key={crypto.randomUUID()} country={country} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CountriesList;
