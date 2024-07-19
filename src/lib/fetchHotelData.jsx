import { format } from "date-fns";
import { HOTEL_HEADERS } from "./constants";

export const fetchHotelData = async (entityId, fromDate, toDate) => {
  //   const url = `https://sky-scanner3.p.rapidapi.com/flights/search-one-way?fromEntityId=${from}&toEntityId=${to}&departDate=${format(
  //     selectedDate,
  //     "yyyy-MM-dd"
  //   )}&currency=INR&cabinClass=economy`;

  const url = `https://sky-scrapper.p.rapidapi.com/api/v1/hotels/searchHotels?entityId=${entityId}&checkin=${format(
    fromDate,
    "yyyy-MM-dd"
  )}&checkout=${format(
    toDate,
    "yyyy-MM-dd"
  )}&adults=1&rooms=1&limit=10&sorting=-relevance&currency=INR&market=en-US&countryCode=IN
  `;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: HOTEL_HEADERS,
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
