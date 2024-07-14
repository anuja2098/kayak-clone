import { PersonStanding } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";

const PriceSummary = () => {
  const booking = useSelector((state) => state.booking);
  const passengers = booking?.passengers;
  const pricePerPassenger = booking?.itineary?.price?.raw;
  const totalPassengers = passengers.length;
  const totalPrice = totalPassengers * pricePerPassenger;
  return (
    <div className=" border border-gray-200 rounded-xl p-4  shadow-xl ">
      <h1 className="font-bold text-xl m-2">Price Summary</h1>
      <div className="flex justify-between m-2">
        <div>Price</div>
        <div>{booking?.itineary?.price?.formatted}</div>
      </div>
      <div className="flex justify-between m-2">
        <div>Total Passengers</div>
        <div className="flex">
          {passengers.map((passenger) => (
            <PersonStanding passenger={passenger} />
          ))}
        </div>
      </div>

      <div className="flex font-bold justify-between m-2">
        <div>Grand Total</div>
        <div>₹{totalPrice}</div>
      </div>
    </div>
  );
};

export default PriceSummary;
