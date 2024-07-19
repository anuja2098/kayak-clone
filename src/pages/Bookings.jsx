import React, { useState, useEffect } from "react";
import BookingCard from "../components/BookingCard";
import { useSelector } from "react-redux";
import { db } from "../lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  const userUid = user?.uid;
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      if (userUid) {
        try {
          const q = query(
            collection(db, "Bookings"),
            where("userId", "==", userUid)
          );

          const querySnapshot = await getDocs(q);
          const dataList = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          setBookings(dataList);
        } catch (error) {
          console.log("Error fetching data:", error);
        }
      }
    };

    fetchBookings();
  }, [userUid]);

  return (
    <div className="w-full p-10">
      <div>
        {bookings.length === 0 ? (
          <div className="text-4xl flex justify-center items-center">
            No Booking Found
          </div>
        ) : (
          bookings.map((booking) => (
            <BookingCard showViewDetailButton={true} booking={booking} />
          ))
        )}
      </div>
    </div>
  );
};

export default Bookings;
