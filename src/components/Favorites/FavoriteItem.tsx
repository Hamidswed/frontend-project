import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";

import { CountryType } from "../../types/type";
import { actions } from "../../redux/slice/country";

type PropType = {
  favCountry: CountryType;
};
const FavoriteItem = ({ favCountry }: PropType) => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
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

  const removeFromFavorite = () => {
    dispatch(actions.removeFromFav(favCountry.name.common));
    handleClick();
  };
  console.log(open);
  return (
    <div className="favorite-item">
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "none",
          position: "relative",
        }}
      >
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src={favCountry.flags.svg}
              sx={{ border: 1 }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={favCountry.name.common}
            secondary={
              <Fragment>
                <Typography
                  sx={{ display: "block" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Region: {favCountry.region}
                </Typography>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Population: {favCountry.population}
                </Typography>
              </Fragment>
            }
          />
        </ListItem>
        <IconButton
          sx={{ position: "absolute", right: 0, bottom: 20 }}
          onClick={removeFromFavorite}
        >
          <DeleteForeverIcon color="error" />
        </IconButton>
        <Divider variant="inset" component="li" />
      </List>
      <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {favCountry.name.common} remove from favorite list!
        </Alert>
      </Snackbar>
    </div>
  );
};
export default FavoriteItem;
