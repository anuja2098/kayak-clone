import { format } from "date-fns";

export const fetchFlightData = async (from, to, selectedDate) => {
  const url = `https://sky-scanner3.p.rapidapi.com/flights/search-one-way?fromEntityId=${from}&toEntityId=${to}&departDate=${format(
    selectedDate,
    "yyyy-MM-dd"
  )}&currency=INR&cabinClass=economy`;

  const headers = {
    "x-rapidapi-host": "sky-scanner3.p.rapidapi.com",
    "x-rapidapi-key": "",
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: headers,
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
