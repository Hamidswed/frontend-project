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

type PropType = {
  country: CountryType;
};


const CountryItemTest = ({ country }: PropType) => {
  const [favoritClick, setFavoriteClick] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const favoriteClickHandler = () => {
    setFavoriteClick(!favoritClick);
    if (favoritClick) {
      dispatch(actions.removeFromFav(country.name.common));
      setFavoriteClick(!favoritClick);
    } else {
      dispatch(actions.addToFav(country));
      handleClick();
      setFavoriteClick(!favoritClick);
    }
  };

  return (
    <TableBody>
      <TableRow
        key={crypto.randomUUID()}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row" align="center">
          <img
            src={country.flags.svg}
            alt={country.name.common}
            style={{ width: "100px" }}
          />
        </TableCell>
        <TableCell align="center">{country.name.common}</TableCell>
        <TableCell align="center">{country.region}</TableCell>
        <TableCell align="center">{country.population}</TableCell>
        <TableCell align="center">
          {country.languages && (
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
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
          <Tooltip title="Add to favorite list">
            <IconButton
              aria-label="add to favorites"
              onClick={favoriteClickHandler}
            >
              <FavoriteIcon sx={{ color: favoritClick ? "red" : "gray" }} />
            </IconButton>
          </Tooltip>
        </TableCell>
        <TableCell align="center">
          <Tooltip title="More information">
            <MenuItem
              sx={{ display: "flex", justifyContent: "center" }}
              component={Link}
              to={`/countries/${country.name.common}`}
            >
              <MoreHorizIcon />
            </MenuItem>
          </Tooltip>
        </TableCell>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            {country.name.common} add to favorite list!
          </Alert>
        </Snackbar>
      </TableRow>
    </TableBody>
  );
};
export default CountryItemTest;
