import React, { useState } from "react";
import StaysInput from "../components/inputs/StaysInput";
import DatePicker from "../components/ui/datePicker";
import { Button } from "../components/ui/button";
import { Search } from "lucide-react";
import StaysCards from "../components/StaysCards";
import HotelsList from "../components/HotelsList";
import { setFromDate, setToDate } from "../lib/hotelBookingSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotelData } from "../lib/fetchHotelData";
import { Loading } from "../components/Loading";

const Stays = () => {
  const dispatch = useDispatch();
  const [selectedLocation, setSelectedLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [hotelsData, setHotelsData] = useState([]);
  const fromDate = useSelector((state) => state.hotel.fromDate);
  const toDate = useSelector((state) => state.hotel.toDate);

  const handleDateChange = (value) => {
    dispatch(setFromDate(value.from));
    dispatch(setToDate(value.to));
  };
  const handleChange = (value) => {
    setSelectedLocation(value);
  };

  const handleClick = async () => {
    setLoading(true);
    try {
      const data = await fetchHotelData(selectedLocation, fromDate, toDate);
      setHotelsData(data);
    } catch (error) {
      console.log("Error fetching data", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="p-10 w-full">
      <div className="text-3xl font-bold mb-8  text-gray-900">
        Where Do you want to stay?
      </div>

      <div className="flex flex-row gap-6">
        <StaysInput onChange={handleChange} />

        <DatePicker mode="range" onChange={handleDateChange} />
        <Button className="h-12" onClick={handleClick}>
          <Search />
        </Button>
      </div>
      {/* {loading ? <Loading /> : <HotelsList hotelsData={hotelsData} />} */}

      {loading && <Loading />}
      {hotelsData === 0 && (
        <p className="mt-8 text-lg text-primary">
          No flights found for the selected route
        </p>
      )}
      {hotelsData && <HotelsList hotelsData={hotelsData} />}
      <StaysCards />
    </div>
  );
};

export default Stays;
