import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";

import fetchCountryDetailData from "../redux/thunk/countryDetial";
import CountryDetailItem from "../components/CountryDetailItem/CountryDetailItem";

const CountryDetail = () => {
  const { name } = useParams();

  const countryDetail = useSelector(
    (state: RootState) => state.country.countries
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCountryDetailData(name));
  }, [dispatch, name]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {countryDetail.length !== 0 ? (
        <CountryDetailItem countryDetail={countryDetail[0]} />
      ) : (
        <div>
          <i className="fas fa-spinner fa-spin fa-xl" />
          <p style={{ marginTop: "10px" }}>Please wait...</p>
        </div>
      )}
    </div>
  );
};

export default CountryDetail;
