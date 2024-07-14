import { PlaneIcon } from "lucide-react";
import React from "react";
import BookingCard from "./BookingCard";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import PriceSummary from "./PriceSummary";
import { useSelector } from "react-redux";
import { format } from "date-fns";
// import PriceSummary from "./PriceSummary";

const BookingDetails = ({ passenger }) => {
  const booking = useSelector((state) => state.booking);
  console.log(booking);
  return (
    <div className="w-full">
      <div className="h-[200px]  relative overflow-hidden  text-white orange-gradient">
        <div className="flex flex-col p-14  justify-center text-xl w-full flex font-bold ">
          <div className="flex flex-row gap-2">
            <h1>{booking?.itineary?.legs?.[0]?.origin?.name}</h1>
            <PlaneIcon />
            <h1>{booking?.itineary?.legs?.[0]?.destination?.name}</h1>
          </div>
          <h1>Booking Id: {booking.id}</h1>
          <p>
            Booking Date:{" "}
            {format(
              booking?.itineary?.legs?.[0]?.segments?.[0]?.departure,
              "PP"
            )}
          </p>
        </div>

        <img
          className="absolute -top-12 right-px"
          src="https://mybookings.easemytrip.com/Content/assest/img/flight_product.svg"
        />
      </div>

      <div className=" flex">
        <div className="w-3/4">
          <div className="p-10 ">
            <div className="font-bold text-2xl mb-6 flex gap-5 items-center">
              <PlaneIcon />
              Booking details
            </div>
            <BookingCard booking={booking} showViewDetailButton={false} />

            <Table className="mt-10 border border-gray-300 rounded-xl shadow-lg">
              <TableHeader>
                <TableRow>
                  <TableHead className=" text-black font-bold ">Name</TableHead>
                  <TableHead className="font-bold text-black">Gender</TableHead>
                  <TableHead className="font-bold text-black">Sector</TableHead>
                  {/* <TableHead className="font-bold text-black text-right">
                    PRN No.
                  </TableHead> */}
                  <TableHead className="font-bold text-black text-right">
                    Status
                  </TableHead>
                </TableRow>
              </TableHeader>
              {booking.passengers.map((passenger) => (
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">{`${passenger.title} ${passenger.firstName} ${passenger.lastName}`}</TableCell>
                    <TableCell>
                      {passenger.title === "Mr" ? "Male" : "Female"}
                    </TableCell>
                    <TableCell>
                      {booking?.itineary?.legs?.[0]?.origin?.displayCode}-
                      {booking?.itineary?.legs?.[0]?.destination?.displayCode}
                    </TableCell>
                    {/* <TableCell className="text-right">TDGF 9H</TableCell> */}
                    <TableCell className="text-right">Confirmed</TableCell>
                  </TableRow>
                </TableBody>
              ))}
            </Table>
          </div>
        </div>
        <div className="pt-24 w-1/4 pr-10 ">
          <PriceSummary className="flex g-20" passenger={passenger} />
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
