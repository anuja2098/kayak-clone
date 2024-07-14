import React, { useState, useEffect } from "react";
import BookingCard from "../components/BookingCard";
import { useSelector } from "react-redux";
import { db } from "../lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const Bookings = () => {
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

  // console.log(bookings);

  return (
    <div className="w-full p-10 ">
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
  );
};

export default Bookings;
