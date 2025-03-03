import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Bulb = () => {
  const [isOn, setIsOn] = useState(false);
  

  return (
    <div style={{ backgroundColor: "white-smoke", padding: "20px", textAlign: "center", marginTop: "12%" }}>
      <img
        src={isOn ? "https://www.w3schools.com/html/pic_bulbon.gif" : "https://www.w3schools.com/html/pic_bulboff.gif"}
        alt="Bulb"
        className="mb-3"
        
      />
      <br />
      <button className="btn btn-success mx-2" onClick={() => setIsOn(true)}>
        ON
      </button>
      <button className="btn btn-danger mx-2" onClick={() => setIsOn(false)}>
        OFF
      </button>
      <br />
      
    </div>
  );
};

export default Bulb;
