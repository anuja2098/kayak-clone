import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Bookings from "./Bookings";
import HotelBooking from "../components/HotelBooking";

const AllBookings = () => {
  return (
    <Tabs defaultValue="Flights" className="w-[1024px] p-10">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="Flights">Flights</TabsTrigger>
        <TabsTrigger value="Hotels">Hotels</TabsTrigger>
      </TabsList>
      <TabsContent value="Flights">
        <Bookings />
      </TabsContent>
      <HotelBooking className="w-[900px]" />
      <TabsContent value="Hotels">{/* <HotelBookings /> */}</TabsContent>
    </Tabs>
  );
};
export default AllBookings;
