import React,{useState} from 'react'
import {auth,db} from "./firebase"
import {doc,getDoc} from "firebase/firestore"

function Profile(){
  const [userDetails,setUserDetails] =useState(null);
  return (
    <div>
      {userDetails ? (
       <>
       <h3>Welcome {userDetails.name.current.value}</h3>
       <div>
        <p>Email:{userDetails.email}</p>
        <p>name:{userDetails.name.current.value}</p>
       </div>
       <button></button>
       
       </>



      
    </div>
      

  )

}



export default profile
