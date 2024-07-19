import React from "react";
// import { Button } from "";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "../components/ui/button";
import { useSelector } from "react-redux";

const Thankyou = () => {
  const booking = useSelector((state) => state.booking);
  const location = useLocation();
  const navigate = useNavigate();
  const bookingId = location.state?.bookingId;

  const goToHomepage = () => {
    navigate("/");
  };

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold ">Thank You!</h1>
        {bookingId && (
          <p className="text-2xl my-4">Your Booking Id: {bookingId}</p>
        )}
        <Button onClick={goToHomepage}>Continue to homepage</Button>
      </div>
    </>
  );
};

export default Thankyou;
