import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { RootState, AppDispatch } from "../../redux/store";
import fetchCountryData from "../../redux/thunk/country";
import CountryItem from "./CountryItem";
import { actions } from "./../../redux/slice/country";
import { IconButton, Tooltip } from "@mui/material";

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
  const [sortBtn, setSortBtn] = useState(false);
  const countriesList = useSelector(
    (state: RootState) => state.country.countries
  );
  const dispatch = useDispatch<AppDispatch>();
  const dipatchNorm = useDispatch();
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

  const ascSortedCoutry = () => {
    setSortBtn(true);
    countryRows.sort((a, b) => {
      const nameA = a.name.common.toLowerCase();
      const nameB = b.name.common.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    dipatchNorm(actions.getCountryData(countryRows));
  };

  const decSortedCoutry = () => {
    setSortBtn(false);
    countryRows.sort((a, b) => {
      const nameA = a.name.common.toLowerCase();
      const nameB = b.name.common.toLowerCase();
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
      return 0;
    });
    dipatchNorm(actions.getCountryData(countryRows));
  };

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
              <TableCell align="center">
                <strong>Flag</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Name</strong>
                <Tooltip title="Sort by name">
                  {sortBtn ? (
                    <IconButton onClick={decSortedCoutry}>
                      <ArrowDownwardIcon fontSize="small" />
                    </IconButton>
                  ) : (
                    <IconButton onClick={ascSortedCoutry}>
                      <ArrowUpwardIcon fontSize="small" />
                    </IconButton>
                  )}
                </Tooltip>
              </TableCell>
              <TableCell align="center">
                <strong>Region</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Population</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Languages</strong>
              </TableCell>
              <TableCell align="center">
                <strong>Favorite</strong>
              </TableCell>
              <TableCell align="center">
                <strong>More</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          {countryRows.map((country) => {
            return <CountryItem key={crypto.randomUUID()} country={country} />;
          })}
        </Table>
      </TableContainer>
    </div>
  );
}
