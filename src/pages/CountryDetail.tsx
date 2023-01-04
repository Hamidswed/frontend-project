import { useParams } from "react-router-dom";
import CountryDetailItem from "../components/CountryDetailItem/CountryDetailItem";
import { useCallback, useEffect, useState } from "react";
import { CountryType } from "../types/type";

const CountryDetail = () => {
  const [countryDetail, setCountryDetail] = useState<CountryType>({
    name: {
      common: "",
    },
    region: "",
    population: 0,
    languages: {},
    flags: {
      svg: "",
    },
    capital: [],
    maps: {
      googleMaps: "",
    },
    favorite: false,
  });
  const { name } = useParams();

  console.log(name, "use param");
  const url = `https://restcountries.com/v3.1/name/${name}`.replace(
    / /g,
    "%20"
  );
  const getCountryData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCountryDetail(data[0]));
  };
  const cachedFetch = useCallback(getCountryData, [url]);
  useEffect(() => {
    cachedFetch();
  }, [cachedFetch]);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <CountryDetailItem countryDetail={countryDetail} />
    </div>
  );
};

export default CountryDetail;
