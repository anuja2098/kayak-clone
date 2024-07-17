import React from "react";
import { Select } from "../components/ui/select";
import StaysInput from "../components/inputs/StaysInput";
import DatePicker from "../components/ui/datePicker";
import { Button } from "../components/ui/button";
import { Search } from "lucide-react";
import StaysCards from "../components/StaysCards";
import HotelsList from "../components/HotelsList";
import { setFromDate, setToDate } from "../lib/hotelBookingSlice";
import { useDispatch, useSelector } from "react-redux";

const Stays = () => {
  const dispatch = useDispatch();

  const handleDateChange = (value) => {
    dispatch(setFromDate(value.from));
    dispatch(setToDate(value.to));
  };
  return (
    <div className="p-10 w-full">
      <div className="text-3xl font-bold mb-8  text-gray-900">
        Where Do you want to stay?
      </div>

      <div className="flex flex-row gap-6">
        <StaysInput />
        <DatePicker mode="range" onChange={handleDateChange} />
        <Button className="h-12">
          <Search />
        </Button>
      </div>
      <HotelsList />
      <StaysCards />
    </div>
  );
};

export default Stays;
