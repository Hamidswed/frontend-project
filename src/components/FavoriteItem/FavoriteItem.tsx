import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import { CountryType } from "../../types/type";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { actions } from "./../../redux/slice/country";

type PropType = {
  favCountry: CountryType;
};
const FavoriteItem = ({ favCountry }: PropType) => {
  const dispatch = useDispatch();
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
          onClick={() =>
            dispatch(actions.removeFromFav(favCountry.name.common))
          }
        >
          <DeleteForeverIcon color="error" />
        </IconButton>
        <Divider variant="inset" component="li" />
      </List>
    </div>
  );
};
export default FavoriteItem;
