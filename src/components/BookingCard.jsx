import { Plane, PlaneIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";
import { setBooking, setSelectedItineary } from "../lib/bookingSlice";
import { format } from "date-fns";
import DurationComponent from "./Duration";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const BookingCard = ({ showViewDetailButton, booking }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const duration = booking.itineary.legs[0].durationInMinutes;

  const handleClick = () => {
    dispatch(setBooking(booking));
    navigate("/booking/details");
  };

  // console.log(booking);
  return (
    <div className=" shadow-lg rounded-2xl">
      <div className=" border p-6 border-t-2">
        <div className="flex gap-5  font-bold text-xl">
          <h1 className="">{booking?.itineary?.legs?.[0]?.origin?.name}</h1>
          <Plane />
          <h1 className="">
            {booking?.itineary?.legs?.[0]?.destination?.name}
          </h1>
        </div>
        <p className="text-gray-500 mb-4 ">
          {booking.createdAt
            ? booking.createdAt.toDate().toLocaleString()
            : "no date"}{" "}
          OneWay
        </p>
        <div className="flex gap-5 p-6 justify-between rounded-xl border border-t-2 borber-b-2 ">
          <div className="	">
            <div className="text-lg font-bold">
              {booking?.itineary?.legs?.[0]?.carriers?.marketing?.[0]?.name}
            </div>
            <p className="text-gray-500 text-xs">
              {booking?.itineary?.legs?.[0]?.segments?.[0]?.flightNumber}
            </p>
            <h5 className="text-xs font-bold">Economy</h5>
          </div>
          <div className="flex flex-col">
            <div>
              <h2 className="text-gray-500">
                {booking?.itineary?.legs?.[0]?.origin?.name}
              </h2>
            </div>
            <div className="flex gap-4">
              <h1 className="font-bold text-2xl">
                {booking?.itineary?.legs?.[0]?.origin?.displayCode}
              </h1>
              {booking?.itineary?.legs?.[0]?.segments?.[0]?.departure && (
                <h1 className="text-gray-500 font-bold text-2xl">
                  {format(
                    booking?.itineary?.legs?.[0]?.segments?.[0]?.departure,
                    "HH:mm"
                  )}
                </h1>
              )}
            </div>
            {/* <div className="flex flex-wrap">
              <p className="text-gray-500">
                Sardar Vallabhbhai Patel <br /> International Airport Terminal 1
              </p>
            </div> */}
          </div>
          <div>
            <p>
              <DurationComponent totalMinutes={duration} />
            </p>
            <div className="flex items-center gap-1 my-4">
              <div className="h-3 w-3 bg-gray-300 rounded-full"></div>
              <div className="h-[.5px] w-6 border-gray-300 border border-dashed"></div>
              <div className="flex items-center justify-center border border-gray-300 rounded-full p-1">
                <PlaneIcon className="text-gray-300 text-xs" />
              </div>
              <div className="h-[1px] w-6 border-gray-300 border border-dashed"></div>
              <div className="h-3 w-3 bg-gray-300 rounded-full"></div>
            </div>
            <p className="font-bold text-lg">
              {format(
                booking?.itineary?.legs?.[0]?.segments?.[0]?.departure,
                "PP"
              )}
            </p>
          </div>
          <div>
            <p className="text-lg  text-gray-500 ">
              {booking?.itineary?.legs?.[0]?.destination?.name}
            </p>
            <div className="font-bold text-2xl ">
              {" "}
              {booking?.itineary?.legs?.[0]?.destination?.displayCode}
            </div>
            <div className="font-bold text-2xl text-gray-500">
              {" "}
              {format(
                booking?.itineary?.legs?.[0]?.segments?.[0]?.arrival,
                "HH:mm"
              )}
            </div>
          </div>
        </div>
        {showViewDetailButton && (
          // <Link to="/booking/details">
          <Button onClick={handleClick} className="mt-4">
            View Details
          </Button>
          // </Link>
        )}
      </div>
    </div>
  );
};

export default BookingCard;
