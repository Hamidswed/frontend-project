import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import FavoriteItem from "./FavoriteItem";

const FavoriteList = () => {
  const favList = useSelector((state: RootState) => state.country.favorite);

  return (
    <div className="favorite-list">
      {favList.length === 0 ? (
        <p>There is no country in your favorite list.</p>
      ) : (
        favList.map((favCountry) => {
          return (
            <FavoriteItem key={crypto.randomUUID()} favCountry={favCountry} />
          );
        })
      )}
    </div>
  );
};

export default FavoriteList;
