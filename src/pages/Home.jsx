import { ArrowRightLeft, Search } from "lucide-react";
import React, { useState } from "react";
import FlightInput from "../components/inputs/FlightInput";
import DatePicker from "../components/ui/datePicker";
import { Button } from "../components/ui/button";
import FlightCards from "../components/FlightCards";
import { useDispatch, useSelector } from "react-redux";
import {
  setFromAirport,
  setToAirport,
  setSelectedDate,
  setFlightsData,
} from "../lib/airportSlice";
import FlightsList from "../components/FlightsList";
import { fetchFlightData } from "../lib/fetchFlightDatat";
import { Loading } from "../components/Loading";

const Home = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.airport.selectedDate);
  const from = useSelector((state) => state.airport.from);
  const to = useSelector((state) => state.airport.to);
  const flightsData = useSelector((state) => state.airport.flightsData);
  const [loading, setLoading] = useState(false);

  const handleFromChange = (value) => {
    dispatch(setFromAirport(value));
  };

  const handleToChange = (value) => {
    dispatch(setToAirport(value));
  };

  const handleDateChange = (date) => {
    dispatch(setSelectedDate(date));
  };

  const handleClick = async () => {
    setLoading(true);
    try {
      const data = await fetchFlightData(from, to, selectedDate);
      dispatch(setFlightsData(data));
    } catch (error) {
      console.log("Error fetching data");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="p-10 w-full">
      <h1 className="text-3xl font-bold mb-8  text-gray-900">
        Where do you want to go?
      </h1>
      <div className="flex gap-6 items-center">
        <FlightInput onChange={handleFromChange} />
        <ArrowRightLeft />
        <FlightInput onChange={handleToChange} />
        <DatePicker selected={selectedDate} onChange={handleDateChange} />

        <Button onClick={handleClick} className="h-12">
          <Search />
        </Button>
      </div>

      <div>
        {loading && <Loading />}
        {flightsData?.data?.itineraries?.length === 0 && (
          <p className="mt-8 text-lg text-primary">
            No flights found for the selected route
          </p>
        )}
        {flightsData && <FlightsList />}

        {/* <FlightsList /> */}
        <FlightCards />
      </div>
    </section>
  );
};

export default Home;
