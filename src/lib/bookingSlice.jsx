import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    itineary: null,
    passengers: [],
    // addPassenger: ({}),
  },
  reducers: {
    setSelectedItineary: (state, action) => {
      state.itineary = action.payload;
    },
    setDefaultPassenger: (state) => {
      state.passengers = [
        {
          title: "",
          firstName: "",
          lastName: "",
        },
      ];
    },
    addPassenger: (state, action) => {
      state.passengers = [...state.passengers, action.payload];
    },
    setPassengerDetails: (state, action) => {
      const payload = action.payload;
      const newPassengers = [...state.passengers];
      newPassengers[payload.index][payload.key] = payload.value;
      state.passengers = newPassengers;
    },
    setBooking: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const {
  setSelectedItineary,
  setDefaultPassenger,
  addPassenger,
  setPassengerDetails,
  setBooking,
} = bookingSlice.actions;

export default bookingSlice.reducer;
