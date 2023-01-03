import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "./slice/country";

const store = configureStore({
  reducer: {
    country: countryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;