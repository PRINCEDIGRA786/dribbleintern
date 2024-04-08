import React, { useState } from 'react'
import Usercon from './Usercontext';

export default function ApiState(props) {
        const[userdata,setUserdata]=useState({"name":"","username":"","email":"","password":"",
        "purpose":[],"profilepic":"","location":""})
    
        const setUserData = (dataToUpdate) => {
            const updatedData = {
                ...userdata,
                ...dataToUpdate
            };
            setUserdata(updatedData);
         
            // console.log("User data is:",userdata)
            // console.log("User data is:",userdata)
        };


     //For creating a new user:
     const createuser = async (userdata) => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/createuser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userdata)
            });
            const json = await response.json();
            if (json.success) {
                localStorage.setItem('auth-token', json.authtoken);
                return true;
            }}
            catch(error){
                console.log(error);
                return false
            }
            }

            
  const sendEmail = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/sendemail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"email":userdata.email})
      });
      const res=response.json();

      if (res.success) {
        console.log("done");
        
      } else {
        console.error('Failed to send email');
        // Handle error case
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error case
    }
  };
    
    const getUser = async () => {
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('auth-token')
            },
        });
        const json = await response.json();
        return json;



    }
    


    return (
        <>
            <Usercon.Provider value={{  setUserData,userdata,getUser,sendEmail, createuser }}>
                {props.children}
            </Usercon.Provider>
        </>
    )
}