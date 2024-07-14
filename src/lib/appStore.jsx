import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import airportReducer from "./airportSlice";
import bookingReducer from "./bookingSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    airport: airportReducer,
    booking: bookingReducer,
  },
});

export default appStore;
