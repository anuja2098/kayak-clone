import { format } from "date-fns";
import { FLIGHT_HEADERS } from "./constants";

export const fetchFlightData = async (from, to, selectedDate) => {
  const url = `https://sky-scanner3.p.rapidapi.com/flights/search-one-way?fromEntityId=${from}&toEntityId=${to}&departDate=${format(
    selectedDate,
    "yyyy-MM-dd"
  )}&currency=INR&cabinClass=economy`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: FLIGHT_HEADERS,
    });

    if (!response.ok) {
      throw new Error("Network was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error fetching data", error);
  }
};
