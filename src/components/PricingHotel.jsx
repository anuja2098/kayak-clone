import { PersonStanding } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";

const PricingHotel = () => {
  const hotel = useSelector((state) => state.hotel);
  const guests = useSelector((state) => state.hotel.guests);

  const pricePerGuest = hotel?.hotelBooking?.rawPrice;
  const totalGuests = guests.length;
  const totalPrice = totalGuests * pricePerGuest;
  return (
    <div>
      <div className=" border border-gray-200 rounded-xl p-4  shadow-xl ">
        <h1 className="font-bold text-xl m-2">Price Summary</h1>
        <div className="flex flex-col m-2 w-80 pb-2">
          <div className="flex justify-between pb-2">
            <div>Price</div>
            <div>{hotel?.hotelBooking?.price}</div>
          </div>
          <div className="flex justify-between  pb-2">
            <div>Total Passenger</div>
            {guests.map((guest) => (
              <PersonStanding guest={guest} />
            ))}
          </div>

          <div className="flex font-bold justify-between pb-2">
            <div>Grand Total</div>
            <div>₹{totalPrice}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingHotel;
