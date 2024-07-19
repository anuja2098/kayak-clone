import React from "react";
import PassengerForm from "./PassengerForm";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";
import { addPassenger } from "../lib/bookingSlice";
import PriceSummary from "./PriceSummary";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";
import { useNavigate } from "react-router-dom";

const TravellersForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const passengers = useSelector((store) => store.booking.passengers);
  const itineary = useSelector((store) => store.booking.itineary);
  const user = useSelector((store) => store.user);
  const handleClick = () => {
    dispatch(
      addPassenger({
        title: "",
        firstName: "",
        lastName: "",
      })
    );
  };

  const allPassengersValid = passengers.every(
    (passenger) =>
      passenger.title &&
      passenger.firstName.trim() !== "" &&
      passenger.lastName.trim() !== ""
  );

  const addConfirmedBooking = async () => {
    try {
      const docRef = await addDoc(collection(db, "Bookings"), {
        itineary,
        passengers,
        userId: user.uid,
        createdAt: serverTimestamp(),
      });

      navigate("/thankyou", { state: { bookingId: docRef.id } });
    } catch (error) {
      console.log("error adding document", error);
    }

    console.log("document created");
  };

  return (
    <div>
      <div className="flex">
        <div className=" mt-6 p-6 border border-gray-200 shadow-lg w-2/3  rounded-xl">
          <div className="flex justify-between  ">
            <h1 className="text-xl font-bold">Travellers Details</h1>
            <div>Name should be same as in Government ID proof</div>
          </div>
          {passengers?.length > 0 &&
            passengers.map((passenger, index) => (
              <PassengerForm passenger={passenger} key={index} index={index} />
            ))}
          <Button onClick={handleClick} className="mt-4">
            + Add Adult
          </Button>
        </div>

        <div className="w-1/3 mt-6 ml-4 ">
          <PriceSummary className="flex flex-row" passengers={passengers} />
          {
            <Button
              disabled={!allPassengersValid}
              className="mt-8 text-lg w-full py-8 "
              onClick={addConfirmedBooking}
            >
              Confirm Booking
            </Button>
          }
        </div>
      </div>
    </div>
  );
};

export default TravellersForm;
