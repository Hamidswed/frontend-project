import EarthGif from "../assets/Rotating_earth.gif";
import Cloud from "../assets/cloud.png";
import CloudBack from "../assets/cloud2.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Home = () => {
  return (
    <div className="home-page">
      <img src={EarthGif} alt="earth" />
      <img src={Cloud} alt="cloud" />
      <img src={CloudBack} alt="cloud" />
      <Button href="/countries" variant="contained">Get Start</Button>
    </div>
  );
};

export default Home;
