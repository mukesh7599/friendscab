import React from "react";
import "antd/dist/antd.css";
import { Input, Button } from "antd";
import micro from "../Images/Micro.jpg";

const Adddriver = ({ drivername, mobileno, address, licenseno, photo }) => {
  return (
    <div className="rentDetails">
      <div className="carRent">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap:"2rem",
            width: "500px",
            borderBottom: "1px solid #000",
          }}
        >
          <div className="driverPic">
            <img src={photo}></img>
          </div>
          <div className="driverProfile">
            {" "}
            <div style={{display:"flex"}} >
              <div style={{ minWidth: "70%" }}>
                <p>Name</p>
                <p>License Number</p>
                <p>Mobile Number</p>
                <p>Address</p>
              </div>
              <div>
                <p>{drivername}</p>
                <p>{licenseno}</p>
                <p>{mobileno}</p>
                <p>{address}</p>
              </div>
            </div>
            {/* <p className="carDetail">Name:{drivername}</p></div>
          <p className="carDetail">License Number: {licenseno}</p>
          <p className="carDetail">Mobile Number:{mobileno}</p> */}
            {/* </div> */}
            {/* <div className="hourCharge">
        <p className="carDetail">Secondary Mobile Number</p>
        <Input placeholder="Secondary Mobile Number" />
     
      </div> */}
            {/* <Input placeholder="Driving License number" /> */}
            {/* <p className="carDetail">Proof attachment</p>
      <Input placeholder="Proof attachment" /> */}
            {/* <p className="carDetail">Address:{address}</p> */}
            <div
              className="delete"
              style={{
                marginRight: "1em",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              {" "}
              <Button type="primary" >Remove</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Adddriver;
