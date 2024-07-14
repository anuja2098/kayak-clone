import React from "react";
import flightListData from "../lib/flightListData";
import { format } from "date-fns";
import DurationComponent from "./Duration";
import { Button } from "./ui/button";
import FlightItem from "./FlightItem";
import { useSelector } from "react-redux";

const FlightsList = () => {
  const flightsData = useSelector((state) => state.airport.flightsData);
  return (
    <div>
      {flightsData.data.itineraries.map((itineary) => {
        return <FlightItem itineary={itineary} showButton={true} />;
      })}
    </div>
  );
};

export default FlightsList;
