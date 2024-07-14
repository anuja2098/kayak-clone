import { createSlice } from "@reduxjs/toolkit";

const airportSlice = createSlice({
  name: "airport",
  initialState: {
    from: null,
    to: null,
    selectedDate: null,
    flightsData: null,
  },
  reducers: {
    setFromAirport: (state, action) => {
      state.from = action.payload;
    },
    setToAirport: (state, action) => {
      state.to = action.payload;
    },
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    setFlightsData: (state, action) => {
      state.flightsData = action.payload;
    },
  },
});

export const { setFromAirport, setToAirport, setSelectedDate, setFlightsData } =
  airportSlice.actions;

export default airportSlice.reducer;
