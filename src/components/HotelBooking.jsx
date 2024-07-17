import React, { useEffect, useState } from "react";
import HotelItem from "./HotelItem";
import { useSelector } from "react-redux";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../lib/firebase";

const HotelBooking = () => {
  const user = useSelector((store) => store.user);
  const userUid = user?.uid;
  const [hotelBookings, setHotelBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      if (userUid) {
        try {
          const q = query(
            collection(db, "HotelBookings"),
            where("userId", "==", userUid)
          );

          const querySnapshot = await getDocs(q);
          const dataList = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          console.log(dataList);

          setHotelBookings(dataList);
        } catch (error) {
          console.log("Error fetching data:", error);
        }
      }
    };

    fetchBookings();
  }, [userUid]);

  return (
    <div classsName="w-[900px]">
      <div className="w-full p-10">
        <div>
          {hotelBookings.length === 0 ? (
            <div className="text-4xl flex justify-center items-center">
              No Booking Found
            </div>
          ) : (
            hotelBookings.map((hotel) => (
              <HotelItem
                showDate={true}
                className="w-2/3"
                showViewButton={true}
                hotel={hotel.hotel.hotelBooking}
                guests={hotel.hotel.guests}
                from={hotel.hotel.fromDate.toDate().toLocaleString()}
                to={hotel.hotel.toDate.toDate().toLocaleString()}
              />
            ))
          )}
        </div>
      </div>{" "}
    </div>
  );
};

export default HotelBooking;
