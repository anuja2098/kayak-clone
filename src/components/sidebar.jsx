import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MENU_ITEMS, USER_ROUTES } from "./constants";
import { useSelector } from "react-redux";
import Booking from "../pages/Bookings";

const Sidebar = () => {
  const location = useLocation();
  const user = useSelector((store) => store.user);
  const ROUTES = user ? [...MENU_ITEMS, ...USER_ROUTES] : MENU_ITEMS;

  return (
    <aside className=" w-60">
      <div className="border-r border-gray-300 h-screen">
        {ROUTES.map((item) => (
          <Link to={item.path} key={item.id} className={`flex gap-8 px-8 py-4 rounded-lg ${location.pathname === item.path ? "bg-gray-300 w-62 m-2" : "hover:w-62 m-2 hover:bg-gray-300"}`}>
            {item.icon} {item.text}
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
