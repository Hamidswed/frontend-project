import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { RootState, AppDispatch } from "../../redux/store";
import fetchCountryData from "../../redux/thunk/country";
import CountryItem from "./CountryItem";

type PropType = {
  userInput: string;
};

function createData(
  flags: {
    svg: string;
  },
  name: {
    common: string;
  },
  region: string,
  population: number,
  languages: object,
  favorite: boolean,
  capital: string[],
  maps: {
    googleMaps: string;
  }
) {
  return {
    flags,
    name,
    region,
    population,
    languages,
    favorite,
    capital,
    maps,
  };
}

export default function CountriesList({ userInput }: PropType) {
  const countriesList = useSelector(
    (state: RootState) => state.country.countries
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (userInput === "") {
      dispatch(fetchCountryData());
    }
  }, [dispatch, userInput]);

  const tableHeader = [
    "Flag",
    "Name",
    "Region",
    "Population",
    "Languages",
    "Favorite",
    "More",
  ];

  const countryRows = countriesList.slice(0, 20).map((country) => {
    return createData(
      country.flags,
      country.name,
      country.region,
      country.population,
      country.languages,
      country.favorite,
      country.capital,
      country.maps
    );
  });

  return (
      <div>
        {countriesList.length === 0 && (
          <div>
            <i className="fas fa-spinner fa-spin fa-xl" />
            <p style={{ marginTop: "10px" }}>Loading...</p>
          </div>
        )}
        <TableContainer component={Paper} style={{ marginTop: "50px" }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {tableHeader.map((title) => (
                  <TableCell align="center" key={crypto.randomUUID()}>
                    <strong>{title}</strong>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            {countryRows.map((country) => {
              return (
                <CountryItem key={crypto.randomUUID()} country={country} />
              );
            })}
          </Table>
        </TableContainer>
      </div>
  );
}
