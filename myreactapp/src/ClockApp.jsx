// import React,{useState, useEffect} from "react"

// function Clockapp (){


//     const[time, setTime]= useState(new Date());

//     useEffect(()=>{
//         const intervalId = setInterval(()=>{
//             setTime(new Date())}, 1000)
//             return()=>{
//                 clearInterval(intervalId)
//             }
//     }, []) 

//     function formatTime (){
//         let hours = time.getHours()
//         let minutes = time.getMinutes()
//         let seconds = time.getSeconds()
//         let meridian = hours>=12 ?"pm":"am";
    
//         hours = hours % 12 || 12;

//         return `${hours}:${minutes}: ${seconds}: ${meridian}`
//     }

//     return(
//         <div className="clockcontainer">
//             <div className="clock">
//             <span>
//                 00:00:00
//             </span>
//             </div>
//         </div>
//     )
// }

// export default Clockapp


// debugged code =v

import React, { useState, useEffect } from "react";

function Clockapp() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let meridian = hours >= 12 ? "PM" : "AM";

    // Convert hours from 24-hour format to 12-hour format
    hours = hours % 12 || 12;

    // Pad minutes and seconds with leading zeros if needed
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");

    return `${hours}:${minutes}:${seconds} ${meridian}`;
  }

  return (
    <div className="clockcontainer">
      <div className="clock">
        <span>{formatTime()}</span>
        <p> Time </p>
      </div>
    </div>
  );
}

export default Clockapp;
