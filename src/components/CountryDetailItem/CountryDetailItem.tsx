import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "@mui/material/Link";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link as RouterLink } from "react-router-dom";
import { CountryType } from "../../types/type";
import { List, ListItem, Tooltip } from "@mui/material";

type PropType = {
  countryDetail: CountryType;
};

const CountryDetailItem = ({ countryDetail }: PropType) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {countryDetail.name.common.charAt(0).toUpperCase()}
            </Avatar>
          }
          title={countryDetail.name.common}
          subheader={countryDetail.capital[0]}
        />
        <CardMedia
          component="img"
          height="194"
          sx={{ border: "1px solid lightgrey" }}
          image={countryDetail.flags.svg}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <List>
              <ListItem>
                <ArrowRightIcon />
                <strong>Region</strong>: {countryDetail.region}
              </ListItem>
              <ListItem>
                <ArrowRightIcon />
                <strong>Population</strong>: {countryDetail.population}
              </ListItem>
              <ListItem>
                <ArrowRightIcon />
                <strong>Languages</strong>:
                <br />
                <ul>
                  {Object.keys(countryDetail.languages).map((item, index) => {
                    return (
                      <li key={crypto.randomUUID()}>
                        <strong>
                          <em>{item}</em>
                        </strong>
                        :{" "}
                        <em>{Object.values(countryDetail.languages)[index]}</em>
                      </li>
                    );
                  })}
                </ul>
              </ListItem>
            </List>
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <Tooltip title="Back">
          <RouterLink to="/countries">
            <IconButton>
              <ArrowBackIosIcon />
            </IconButton>
          </RouterLink>
          </Tooltip>
          <Tooltip title="Google Map">
          <Link
            href={countryDetail.maps.googleMaps}
            underline="none"
            target="blank"
          >
            <IconButton>
              <LocationOnIcon />
            </IconButton>
          </Link>
          </Tooltip>
        </CardActions>
      </Card>
    </div>
  );
};
export default CountryDetailItem;
