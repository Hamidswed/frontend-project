import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Home
      <Link to="countries">
        <button type="button">list</button>
      </Link>
    </div>
  );
};

export default Home;
