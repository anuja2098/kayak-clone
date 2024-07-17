import { createSlice } from "@reduxjs/toolkit";

const hotelBookingSlice = createSlice({
  name: "hotel",
  initialState: {
    hotelBooking: null,
    fromDate: null,
    toDate: null,
    guests: [],
  },

  reducers: {
    setHotelBooking: (state, action) => {
      state.hotelBooking = action.payload;
    },
    setFromDate: (state, action) => {
      state.fromDate = action.payload;
    },
    setToDate: (state, action) => {
      state.toDate = action.payload;
    },
    setDefaultGuest: (state) => {
      state.guests = [
        {
          title: "",
          firstName: "",
          lastName: "",
        },
      ];
    },
    addGuest: (state, action) => {
      state.guests = [...state.guests, action.payload];
    },
    setGuestDetails: (state, action) => {
      const payload = action.payload;
      const newGuests = [...state.guests];
      newGuests[payload.index][payload.key] = payload.value;
      state.guests = newGuests;
    },
    setHotel: (state, action) => {
      state.hotelBooking = action.payload;
    },
    setGuests: (state, action) => {
      state.guests = action.payload;
    },
  },
});

export const {
  setHotelBooking,
  setFromDate,
  setToDate,
  setDefaultGuest,
  addGuest,
  setGuestDetails,
  setHotel,
  setGuests,
} = hotelBookingSlice.actions;

export default hotelBookingSlice.reducer;
