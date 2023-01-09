import { AppDispatch } from "../store";
import { actions } from "../slice/country";

// fetch country detail data from url by fetch
export default function fetchCountryDetailData(name: string | undefined) {
  const url = `https://restcountries.com/v3.1/name/${name}`.replace(
    / /g,
    "%20"
  );
  return async (dispatch: AppDispatch) => {
    const response = await fetch(url);
    const data = await response.json();
    dispatch(actions.getCountryData(data));
  };
}
