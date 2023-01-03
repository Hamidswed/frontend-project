import { createSlice } from "@reduxjs/toolkit";
import { CountryType } from "../../types/type";

type InitialType = {
  countries: CountryType[];
};

const initialState: InitialType = {
  countries: [],
};

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    getCountryData: (state, acion) => {
      state.countries = acion.payload;
    },
  },
});

export const actions = countrySlice.actions;
export default countrySlice.reducer;
