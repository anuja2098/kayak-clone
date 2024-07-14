import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const Header = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsSignedIn(!!user);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setIsSignedIn(false);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <div className=" h-24 p-3 flex justify-between items-center border border-gray-300">
      <Link to="/">
        <img
          className="w-40 "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1d17sVF2s-J0kdHEoRG8H5sginDZdRMav1a2QH8glvVhafn99GSkApQts-SARwtYGxAU&usqp=CAU"
        />
      </Link>

      {isSignedIn ? (
        <Button onClick={handleSignOut}>Sign Out</Button>
      ) : (
        <Link to="/login">
          <Button>Sign In</Button>
        </Link>
      )}
    </div>
  );
};

export default Header;
