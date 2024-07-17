import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import airportReducer from "./airportSlice";
import bookingReducer from "./bookingSlice";
import hotelReducer from "./hotelBookingSlice";
const appStore = configureStore({
  reducer: {
    user: userReducer,
    airport: airportReducer,
    booking: bookingReducer,
    hotel: hotelReducer,
  },
});

export default appStore;
