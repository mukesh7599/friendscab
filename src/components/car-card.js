import React, { useState } from "react";
import "../App.css";
import { Input, Modal, Button } from "antd";
import micro from "../Images/Micro.jpg";

const Addcar = ({
  vehicleID,
  vehiclename,
  carnumber,
  vehicletype,
  addcars,
}) => {
  return (
    <>
      <div className="rentDetails">
        <div className="carRent">
          <img src={addcars} style={{ width: "220px", height: "150px" }}></img>
          <div
            className="kmCharge"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <p className="carDetail">{vehicleID}</p> */}
            <p
              className="carDetail"
              style={{
                fontFamily: "Roboto",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              {vehicletype}
            </p>
          </div>
          <div
            className="kmCharge"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <p className="carDetail">{vehiclename}</p>

            <p className="carDetail">{carnumber}</p>
          </div>

          {/* <p className="detailText">Description  <TextArea rows={4} /></p> */}

          <div className="delete">
            {" "}
            <Button type="primary">Remove Car</Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Addcar;
