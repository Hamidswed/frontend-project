import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CountryType } from "../../types/type";

type InitialType = {
  countries: CountryType[];
  favorite: CountryType[];
};

const initialState: InitialType = {
  countries: [],
  favorite: [],
};

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    getCountryData: (state, acion) => {
      state.countries = acion.payload;
    },
    addToFav: (state, action: PayloadAction<CountryType>) => {
      const favIndex = state.favorite.findIndex(
        (item) => item.name.common === action.payload.name.common
      );
      if (favIndex === -1) {
        state.favorite.push(action.payload);
      } else {
        actions.removeFromFav(action.payload.name.common);
      }
    },
    removeFromFav: (state, action) => {
      const updatedFav = state.favorite.filter(
        (item) => item.name.common !== action.payload
      );
      state.favorite = updatedFav;
    },
  },
});

export const actions = countrySlice.actions;
export default countrySlice.reducer;
