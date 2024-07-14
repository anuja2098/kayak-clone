import React, { useEffect } from "react";
import Header from "./components/Header";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./components/sidebar";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "./lib/userSlice";

const Layout = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        const { uid, displayName, email, photoURL, phoneNumber } = user;
        dispatch(
          addUser({
            uid: uid,
            displayName: displayName,
            photoURL: photoURL,
            email: email,
            phoneNumber: phoneNumber,
          })
        );
        console.log("in auth state change ");

        // console.log('signed in')
      } else {
        // console.log('signed out')
        dispatch(removeUser());
        navigate("/login");
      }
    });

    // Unsubscribe when component unmounted
    return () => unsubscribe();
  }, []);
  const isLogin = location.pathname === "/login";
  return (
    <div>
      <Header />
      <div className="flex">
        {isLogin ? null : <Sidebar />}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
