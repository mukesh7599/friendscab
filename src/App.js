import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import "./index.css";
import { Button, Tabs } from "antd";
import CarRental from "./pages/Car rental details";
import AddCar from "./pages/Add Cars";
import AddDrivers from "./pages/Add Drivers";
import BookingDetails from "./pages/Booking Details";
import { Routes, Route, Link, BrowserRouter, NavLink } from "react-router-dom";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { IoCarSportSharp } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";
import { FaTaxi } from "react-icons/fa";
import { ImBook } from "react-icons/im";
import { BsCashStack } from "react-icons/bs";

function App() {
  return (
    <div className="container">
      <div className="title">
        <p className="titleText">
          Friends
          <IoCarSportSharp />
          Cab
        </p>
        <FaHome
          style={{ width: "25px", height: "25px", marginRight: "20px" }}
        />
      </div>
      <div className="adminBody">
        <div className="adminContainer">
          <div className="navigation">
            <p className="adminDashboard">
              <MdAdminPanelSettings
                style={{ height: "30px", width: "30px", marginRight: "20px" }}
              />{" "}
              Admin Dashboard
            </p>

            <Button
              style={{
                textAlign: "left",
                margin: "1rem 0",
                width: "100%",
                padding: "0 2rem",
                display: "block",
                color: "#ef4667 !important",
              }}
             
            >
              {" "}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
              >
                <BsCashStack
                  style={{
                    marginRight: "20px",
                    height: "20px",
                    width: "20px",
                    color: "#ef4667 !important",
                  }}
                />
                Rental Details
              </NavLink>
            </Button>
            <Button
              style={{
                textAlign: "left",
                margin: "1rem 0",
                width: "100%",
                padding: "0 2rem",
                display: "block",
              }}
             
            >
              {" "}
              <NavLink
                to={"/addcar"}
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
              >
                <FaTaxi
                  style={{ marginRight: "20px", height: "20px", width: "20px" }}
                />
                View Cars
              </NavLink>
            </Button>
            <Button
              style={{
                textAlign: "left",
                margin: "1rem 0",
                width: "100%",
                padding: "0 2rem",
                display: "block",
              }}
              className={({ isActive }) => (isActive ? "link-active" : "link")}
            >
              {" "}
              <NavLink
                to={"adddrivers"}
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
              >
                <BsFillPersonFill
                  style={{ marginRight: "20px", height: "20px", width: "20px" }}
                />
                View Drivers
              </NavLink>
            </Button>
            <Button
              style={{
                textAlign: "left",
                margin: "1rem 0",
                width: "100%",
                padding: "0 2rem",
                display: "block",
              }}
             
            >
              {" "}
              <NavLink
                to={"bookingdetails"}
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
              >
                <ImBook
                  style={{ marginRight: "20px", height: "20px", width: "20px" }}
                />
                Booking Details
              </NavLink>
            </Button>
          </div>

          <div className="adminContent">
            <Routes>
              <Route path="/" element={<CarRental />} />
              <Route path="/addcar" element={<AddCar />} />
              <Route path="/adddrivers" element={<AddDrivers />} />
              <Route path="/bookingdetails" element={<BookingDetails />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
