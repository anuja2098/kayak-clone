import React, { useEffect } from "react";
import FlightItem from "../components/FlightItem";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TravellersForm from "../components/TravellersForm";

const Booking = () => {
  const itineary = useSelector((store) => store.booking.itineary);

  const navigate = useNavigate();

  useEffect(() => {
    console.log(itineary);
    if (!itineary) {
      navigate("/");
    }
  }, [itineary]);
  return (
    <div className="p-10 flex flex-col w-full">
      {itineary && <FlightItem itineary={itineary} showButton={false} />}
      <TravellersForm />
    </div>
  );
};

export default Booking;
