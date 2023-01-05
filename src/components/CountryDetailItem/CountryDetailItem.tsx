import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  List,
  ListItem,
  Tooltip,
} from "@mui/material";
import Link from "@mui/material/Link";
import { red } from "@mui/material/colors";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { Link as RouterLink } from "react-router-dom";

import { CountryType } from "../../types/type";

type PropType = {
  countryDetail: CountryType;
};

const CountryDetailItem = ({ countryDetail }: PropType) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="country">
            {countryDetail.name.common.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={countryDetail.name.common}
        subheader={countryDetail.capital[0]}
        sx={{ textAlign: "left" }}
      />
      <CardMedia
        component="img"
        height="194"
        sx={{ border: "1px solid lightgrey" }}
        image={countryDetail.flags.svg}
        alt="Paella dish"
      />
      <CardContent>
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
            <List>
              {Object.keys(countryDetail.languages).map((item, index) => {
                return (
                  <ListItem key={crypto.randomUUID()}>
                    <strong>
                      <em>{item}</em>
                    </strong>
                    : <em>{Object.values(countryDetail.languages)[index]}</em>
                  </ListItem>
                );
              })}
            </List>
          </ListItem>
        </List>
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
  );
};
export default CountryDetailItem;
