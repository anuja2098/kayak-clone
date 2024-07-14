// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getFirestore, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzi7yMv0YlrslnERnLO1n-mSoce2A6TtU",
  authDomain: "kayak-b1c5f.firebaseapp.com",
  projectId: "kayak-b1c5f",
  storageBucket: "kayak-b1c5f.appspot.com",
  messagingSenderId: "548592090069",
  appId: "1:548592090069:web:bd43e5564b80851827db5c",
  measurementId: "G-QHB9TRZQ8G",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
// Initialize Firebase

// const db=firebase.firestore()

// const colRef = collection(db, "Booking");

// getDocs(colRef)
//   .then((snapshot) => {
//     // console.log(snapshot.docs);
//     let Booking = [];
//     snapshot.docs.forEach((doc) => {
//       Booking.push({ ...doc.data(), id: doc.id });
//     });
//     console.log(Booking);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });
