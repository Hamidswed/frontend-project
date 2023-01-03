import CountryItem from "../CountryItem/CountryItem";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useEffect } from "react";
import fetchCountryData from "./../../redux/thunk/country";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";

const CountriesList = () => {
  const countriesList = useSelector(
    (state: RootState) => state.country.countries
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchCountryData());
  }, [dispatch]);

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
              <TableRow
                key={crypto.randomUUID()}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">
                  <img
                    style={{ width: "80px" }}
                    src={country.flags.svg}
                    alt={country.name.common}
                  />
                </TableCell>
                <TableCell component="th" align="center">
                  {country.name.common}
                </TableCell>
                <TableCell align="center">{country.region}</TableCell>
                <TableCell align="center">{country.population}</TableCell>
                <TableCell align="center">
                  {country.languages && (
                    <ul>
                      {Object.keys(country.languages).map((item, index) => {
                        return (
                          <li key={crypto.randomUUID()}>
                            <span>
                              {item}: {Object.values(country.languages)[index]}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </TableCell>
                <TableCell align="center">
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CountriesList;
