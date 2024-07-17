import React from "react";
import GuestForm from "./GuestDetails";
import { Button } from "./ui/button";
import PricingHotel from "./PricingHotel";
import { useDispatch, useSelector } from "react-redux";
import { addGuest } from "../lib/hotelBookingSlice";
import { db } from "../lib/firebase";
import { useNavigate } from "react-router-dom";

import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const GuestCard = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const guests = useSelector((state) => state.hotel.guests);
  const user = useSelector((store) => store.user);

  const hotel = useSelector((state) => state.hotel);
  const handleClick = () => {
    dispatch(
      addGuest({
        title: "",
        firstName: "",
        lastName: "",
      })
    );
  };

  const allGuestValid = guests.every(
    (guest) =>
      guest.title &&
      guest.firstName.trim() !== "" &&
      guest.lastName.trim() !== ""
  );

  const addConfirmedBooking = async () => {
    try {
      const docRef = await addDoc(collection(db, "HotelBookings"), {
        hotel,
        userId: user.uid,
        createdAt: serverTimestamp(),
      });

      navigate("/thankyou", { state: { bookingId: docRef.id } });
    } catch (error) {
      console.log("error adding document", error);
    }

    // console.log("Document written with ID: ", docRef.id);
    console.log("document created");
  };

  return (
    <div className="flex flex-row">
      <div>
        <div className=" mt-6 p-6 border  border-gray-200 shadow-lg w-3/3  rounded-xl">
          <div>
            <h1 className="text-xl font-bold">Guest Details</h1>
            {guests?.length > 0 &&
              guests.map((guest, index) => (
                <GuestForm guest={guest} key={index} index={index} />
              ))}
            <Button className="mt-4 text-lg" onClick={handleClick}>
              +Add Adult
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-6 pl-6">
        <PricingHotel />
        <Button
          disabled={!allGuestValid}
          onClick={addConfirmedBooking}
          className="text-lg mt-6 w-full"
        >
          Confirm Booking
        </Button>
      </div>
    </div>
  );
};

export default GuestCard;
