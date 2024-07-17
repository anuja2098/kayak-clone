import React from "react";
import { useSelector } from "react-redux";
import HotelItem from "./HotelItem";
import TravellersForm from "./TravellersForm";
import GuestCard from "./GuestCard";
import GuestForm from "./GuestDetails";

const GuestBooking = () => {
  const hotelBooking = useSelector((state) => state.hotel.hotelBooking);
  return (
    <div className="w-3/4 pl-10">
      <HotelItem showDate={true} hotel={hotelBooking} />
      <GuestCard />
    </div>
  );
};

export default GuestBooking;
