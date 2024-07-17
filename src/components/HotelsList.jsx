import React from "react";
import hotelsData from "../lib/hotelsData";
import HotelItem from "./HotelItem";

const HotelsList = () => {
  const hotels = hotelsData?.data?.hotels;
  console.log(hotelsData);
  return (
    <div>
      {hotels.map((hotel) => (
        <HotelItem
          // className="w-2/3"
          showButton={true}
          key={hotel.hotelId}
          hotel={hotel}
        />
      ))}
    </div>
  );
};

export default HotelsList;
