import * as React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Tooltip from "@mui/material/Tooltip";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Snackbar, Alert } from "@mui/material";

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { RootState } from "../../redux/store";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { actions } from "../../redux/slice/country";
import { CountryType } from "../../types/type";

type PropType = {
  country: CountryType;
};

const CountryItem = ({ country }: PropType) => {
  const favoriteState = useSelector(
    (state: RootState) => state.country.favorite
  );
  const favoriteResult = favoriteState.some(
    (item) => item.name.common === country.name.common
  );
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
    if (favoriteResult) {
      dispatch(actions.removeFromFav(country.name.common));
    } else {
      dispatch(actions.addToFav(country));
      handleClick();
    }
  };

  return (
    <TableBody className="country-item">
      <TableRow
        key={crypto.randomUUID()}
        sx={{
          "&:last-child td, &:last-child th": {
            borderBottom: "1px solid lightgrey",
          },
          bgColor:"none"
        }}
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
            <ul>
              {Object.keys(country.languages).map((item, index) => {
                return (
                  <li key={crypto.randomUUID()}>
                    <span>
                      {item}: <em>{Object.values(country.languages)[index]}</em>
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
              <FavoriteIcon sx={{ color: favoriteResult ? "red" : "gray" }} />
            </IconButton>
          </Tooltip>
        </TableCell>
        <TableCell align="center">
          <Tooltip title="More information">
            <Link to={`/countries/${country.name.common}`}>
              <IconButton>
                <MoreHorizIcon />
              </IconButton>
            </Link>
          </Tooltip>
          <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              {country.name.common} add to favorite list!
            </Alert>
          </Snackbar>
        </TableCell>
      </TableRow>
    </TableBody>
  );
};
export default CountryItem;
