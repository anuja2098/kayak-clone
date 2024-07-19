import React, { useState, useRef } from "react";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "@/components/ui/button";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { checkValidSignIn, checkValidData } from "../lib/validate";
import { useDispatch } from "react-redux";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../lib/firebase";
import { setDoc, doc } from "firebase/firestore";
import { USER_AVTAR } from "../lib/constants";
import { addUser } from "../lib/userSlice";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const { toast } = useToast();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();

  const toggleSignInForm = (e) => {
    e.preventDefault();
    setIsSignInForm(!isSignInForm);
    navigate("");
  };

  const handleButtonClick = () => {
    const message = isSignInForm
      ? checkValidSignIn(email.current.value, password.current.value)
      : checkValidData(
          name.current.value,
          email.current.value,
          password.current.value
        );
    setErrorMessage(message);

    if (message) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(async (userCredential) => {
          const user = userCredential.user;
          console.log(user.email, user.uid);
          if (user) {
            await setDoc(doc(db, "Users", user.uid), {
              email: user.email,
              name: name.current.value,
            });
          }
          toast({
            description: "User Registered Successfully",
          });

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVTAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          console.log(error);
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          toast({
            description: "User logged in Successfully",
          });
          const { uid, email, displayName, photoURL } = userCredential.user;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
          );
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="bg-orange-100 w-full flex items-center justify-center h-[calc(100vh-96px)]">
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" p-6 h-[500px] w-[380px] shadow-lg rounded-xl bg-white "
      >
        <h1 className="text-2xl font-bold my-4">
          {isSignInForm ? " Sign In" : "Sign Up"}
        </h1>
        <div className=" flex flex-col gap-5">
          {!isSignInForm && (
            <div>
              <Label>Name</Label>
              <Input ref={name} placeholder="Name" type="text" />
            </div>
          )}
          <div>
            <Label> Email</Label>
            <Input ref={email} placeholder="Email" type="email" />
          </div>
          <div>
            <Label>Password</Label>

            <Input ref={password} placeholder="Password" type="password" />
          </div>

          <p className="text-red-500 font-bold">{errorMessage}</p>

          <Button onClick={handleButtonClick} className="w-full">
            {isSignInForm ? " Sign In" : "Sign Up"}
          </Button>
          <Button variant="link" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Kayak? Sign Up Now"
              : "Already Registered? Sign In Now"}
          </Button>
        </div>
      </form>
    </div>
  );
};
export default Login;
