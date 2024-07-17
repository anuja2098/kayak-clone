import "./App.css";
import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Stays from "./pages/Stays";
import Layout from "./Layout";
import Login from "./components/Login";
import { Provider } from "react-redux";
import appStore from "./lib/appStore";
import Booking from "./pages/Booking";
import BookingDetails from "./components/BookingDetails";
import { Toaster } from "@/components/ui/toaster";
import Thankyou from "./pages/Thankyou";
import GuestBooking from "./components/GuestBooking";
import AllBookings from "./pages/AllBookings";
import StaysDetails from "./components/staysDetails";
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "stays",
          element: <Stays />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/create-booking",
          element: <Booking />,
        },
        {
          path: "/booking/details",
          element: <BookingDetails />,
        },
        {
          path: "/bookings",
          element: <AllBookings />,
        },
        {
          path: "/thankyou",
          element: <Thankyou />,
        },
        {
          path: "/guest-booking",
          element: <GuestBooking />,
        },
        {
          path: "/booking/stays-details",
          element: <StaysDetails />,
        },
      ],
    },
  ]);

  return (
    <Provider store={appStore}>
      <Toaster />
      <RouterProvider router={appRouter} />;
    </Provider>
  );
}
export default App;
