import React from "react";
import HotelItem from "./HotelItem";

const HotelsList = ({ hotelsData }) => {
  const hotels = hotelsData?.data?.hotels;
  return (
    <div>
      {hotels?.map((hotel) => (
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
