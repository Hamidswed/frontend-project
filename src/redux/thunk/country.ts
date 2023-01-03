import { AppDispatch } from "../store";
import { actions } from "../slice/country";

// fetch country data from url by fetch
const url = "https://restcountries.com/v3.1/all";

export default function fetchCountryData() {
  return async (dispatch: AppDispatch) => {
    const response = await fetch(url);
    const data = await response.json();
    dispatch(actions.getCountryData(data));
  };
}
