import React from "react";
import HotelItem from "./HotelItem";
import { useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import PricingHotel from "./PricingHotel";
import { format } from "date-fns";

const staysDetails = () => {
  const hotel = useSelector((state) => state?.hotel);
  const fromDate = useSelector((state) => state?.hotel?.fromDate);
  const toDate = useSelector((state) => state?.hotel?.toDate);
  console.log(fromDate);
  console.log(toDate);

  console.log(hotel.guests);
  return (
    <div>
      <div className="h-[200px]  relative overflow-hidden  text-white orange-gradient">
        <div className="flex flex-col p-14  justify-center text-xl w-full font-bold ">
          <div className="flex flex-row gap-2">
            <h1>{hotel?.hotelBooking?.name}</h1>
          </div>
          <p>
            Booking Date:
            {fromDate && toDate && format(fromDate, "yyyy-MM-dd")} to
            {format(toDate, "yyyy-MM-dd")}
          </p>
        </div>
        {/* pyQUtDW9bAV8NkIzOgro */}
        <img
          className="absolute top-5 right-5  right-px h-40"
          // src="https://t3.ftcdn.net/jpg/07/18/15/50/360_F_718155066_Wqh8OmSrEENkmZwn0K750pYHqz1Qfcvc.jpg"
          src="https://t3.ftcdn.net/jpg/07/18/15/50/360_F_718155066_Wqh8OmSrEENkmZwn0K750pYHqz1Qfcvc.jpg"
        />
      </div>
      <div className="w-full pl-10 rounded-lg">
        <div className="flex w-full gap-10">
          <HotelItem showDate={true} hotel={hotel.hotelBooking} />
          <div className="pt-10 flex gap-10">
            <PricingHotel />
          </div>
        </div>

        <div className="flex">
          <Table className="mt-10 border border-gray-300 rounded-xl shadow-lg">
            <TableHeader>
              <TableRow>
                <TableHead className=" text-black font-bold ">Name</TableHead>
                <TableHead className="font-bold text-black">Gender</TableHead>
              </TableRow>
            </TableHeader>
            {hotel.guests.map((guest) => {
              return (
                <TableBody>
                  <TableRow>
                    <TableCell>
                      {`${guest.title} ${guest.firstName} ${guest.lastName}`}{" "}
                    </TableCell>
                    <TableCell>
                      {guest.title === "Mr" ? "Male" : "Female"}
                    </TableCell>
                  </TableRow>
                </TableBody>
              );
            })}
          </Table>
        </div>
      </div>
    </div>
  );
};

export default staysDetails;
