import { format } from "date-fns";
import React from "react";
import DurationComponent from "./Duration";
import { Button } from "./ui/button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setDefaultPassenger, setSelectedItineary } from "../lib/bookingSlice";

const FlightItem = ({ itineary, showButton }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleClick = () => {
    if (!user || Object.keys(user).length === 0) {
      navigate("/login");
      return;
    }
    dispatch(setSelectedItineary(itineary));
    dispatch(setDefaultPassenger());
    navigate("/create-booking");
  };

  const { formatted: price } = itineary.price;
  const duration = itineary.legs[0].durationInMinutes;
  const { origin, destination, departure, arrival } = itineary.legs[0];
  const { logoUrl, name: carrierName } = itineary.legs[0].carriers.marketing[0];
  return (
    <section className="h-[120px] mt-6 text-lg flex border shadow-lg rounded-xl p-4 border-gray-200 items-center justify-between ">
      <div className="flex gap-8 p-5">
        <div>
          <img className="m-4" src={logoUrl} />
          <div className="m-2"> {carrierName}</div>
        </div>
        <div>
          <div className=" mt-4 font-bold">
            {format(departure, "HH:mm")} - {format(arrival, "HH:mm")}
          </div>
          <div className="text-gray-400">
            {origin.name} - {destination.name}{" "}
          </div>
        </div>
      </div>
      <div className="font-bold">{format(departure, "yyyy-MM-dd")}</div>
      <DurationComponent totalMinutes={duration} />
      <div className="p-6">
        <div className=" m-2 font-bold">{price}</div>
        {/* <Link to="/booking"> */}
        {showButton && (
          <Button onClick={handleClick} className=" m-2">
            Book
          </Button>
        )}
        {/* </Link> */}
      </div>
    </section>
  );
};

export default FlightItem;
