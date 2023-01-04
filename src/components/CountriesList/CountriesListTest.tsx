import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Snackbar, Alert } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { RootState, AppDispatch } from "../../redux/store";
import fetchCountryData from "../../redux/thunk/country";
import { createTheme, IconButton, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { actions } from "../../redux/slice/country";
import { CountryType } from "../../types/type";
import CountryItemTest from "./../CountryItem/CountryItemTest";

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

export default function CountriesListTest({ userInput }: PropType) {
  const countriesList = useSelector(
    (state: RootState) => state.country.countries
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (userInput === "") {
      dispatch(fetchCountryData());
    }
  }, [dispatch, userInput]);

  const theme = createTheme({
    typography: {
      fontFamily: ['"Rajdhani"', "sans-serif"].join(","),
    },
  });
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
            <CountryItemTest key={crypto.randomUUID()} country={country} />
          );
        })}
      </Table>
    </TableContainer>
  );
}
