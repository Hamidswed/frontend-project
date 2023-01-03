import {
  Table,
  TableCell,
  TableContainer,
  TableRow,
  TableBody,
  IconButton,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Tooltip from "@mui/material/Tooltip";
import { CountryType } from "../../types/type";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { actions } from "../../redux/slice/country";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuItem } from "@mui/material";

type PropType = {
  country: CountryType;
};

const CountryItem = ({ country }: PropType) => {
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
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableRow
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          style={{ width: "100%" }}
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
            <Tooltip title="Add to favorite list">
              <IconButton
                aria-label="add to favorites"
                onClick={favoriteClickHandler}
              >
                <FavoriteIcon sx={{ color: favoritClick ? "red" : "gray" }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="More information">
              <MenuItem
                component={Link}
                to={`/countries/${country.name.common}`}
              >
                <MoreHorizIcon />
              </MenuItem>
            </Tooltip>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
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
      </Table>
    </TableContainer>
  );
};

export default CountryItem;
