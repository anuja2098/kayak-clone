import React from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import {
  setDefaultGuest,
  setFromDate,
  setGuests,
  setHotel,
  setHotelBooking,
  setToDate,
} from "../lib/hotelBookingSlice";
import { format } from "date-fns";

const HotelItem = ({
  hotel,
  guests,
  from,
  to,
  showButton,
  showViewButton,
  showDate,
}) => {
  const dispatch = useDispatch();
  const fromDate = useSelector((state) => state.hotel.fromDate);
  const toDate = useSelector((state) => state.hotel.toDate);
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(setHotelBooking(hotel));
    dispatch(setDefaultGuest());
    // dispatch(setFromDate());
    // dispatch(setToDate());
    navigate("/guest-booking");
  };

  const handeViewClick = () => {
    dispatch(setHotel(hotel));
    dispatch(setGuests(guests));
    dispatch(setFromDate(from));
    dispatch(setToDate(to));

    navigate("/booking/stays-details");
  };
  return (
    <div className="pt-10 w-[1290px]">
      <div className="shadow-lg border flex justify-between p-4 border-gray-300 ">
        <div className="flex ">
          <div>
            <img className=" w-80 h-48 rounded-md" src={hotel?.heroImage} />
            <div className="flex gap-4 py-2 rounded-lg">
              <img className="w-24 h-24 rounded-md" src={hotel?.images?.[0]} />
              <img className="w-24 h-24 rounded-md" src={hotel?.images?.[1]} />
              <img className="w-24 h-24 rounded-md" src={hotel?.images?.[2]} />
            </div>
          </div>
          <div className="pl-10 flex flex-col gap-4  ">
            <h1 className="text-2xl font-bold">{hotel?.name}</h1>
            <div className="flex">
              {/* <h4 className="text-orange-400 text-lg">{hotel?.distance}</h4>
              <br /> <p>|</p> <br /> */}
              <h4 className="text-lg font-bold text-orange-400">
                {hotel?.relevantPoiDistance}
              </h4>
            </div>
            <div className="text-lg">{hotel?.priceDescription}</div>
            <div className="font-bold text-lg">
              {hotel?.rateFeatures?.length > 0 &&
                hotel?.rateFeatures.map((item) => <li>{item?.text}</li>)}
            </div>
          </div>
        </div>
        <div className=" flex flex-col text-right justify-between">
          <div>
            <h1 className="text-orange-400 text-xl font-bold">
              {hotel?.reviewSummary?.description} {hotel?.reviewSummary?.value}
            </h1>
            <div className="text-gray-500">
              ({hotel?.rating?.count} Ratings)
            </div>
          </div>
          <div className="text-3xl font-bold">
            {hotel?.price || "Not available"}
            <div className="text-lg text-gray-500">{hotel?.taxPolicy}</div>
          </div>
          {showDate && fromDate && toDate && (
            <div className="font-bold text-lg">
              {format(fromDate, "yyyy-MM-dd")} to {format(toDate, "yyyy-MM-dd")}
            </div>
          )}
          {showButton && <Button onClick={handleClick}>Book Now</Button>}
          {showViewButton && (
            <Button onClick={handeViewClick}>View Detail</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HotelItem;
