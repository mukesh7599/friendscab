import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
// import "./index.css";
import { Table, Tag, Input, Button, Space, Popconfirm,notification } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import moment from "moment";


const dataSources = [
  {
    bookingid: "101",
    bookingname: "Sathish",
    contact: 9999944444,
    pickup:moment("11/04/2021").format("DD/MM/YYYY"),
    place: "Chennai",
    drop: "Coimbatore",
    trip: "One Way Trip",
    vehicle: "SUV 6+1 Seater",
    actype: "A/C",
  },
  {
    bookingid: "102",
    bookingname: "Mani",
    contact: 9994993456,
    pickup:moment("12/10/2021").format("DD/MM/YYYY"),
    place: "Chennai",
    drop: "Salem",
    trip: "One Way Trip",
    vehicle: "Sedan 4+1 Seater",
    actype: "Non-A/C",
  },
  {
    bookingid: "103",
    bookingname: "Mukesh",
    contact: 7709943577,
    pickup:moment("01/20/2020").format("DD/MM/YYYY"),
    place: "Chennai",
    drop: "Madurai",
    trip: "One Way Trip",
    vehicle: "SUV 6+1 Seater",
    actype: "A/C",
  },
  {
    bookingid: "104",
    bookingname: "Raja",
    contact: 9975345467,
    pickup:moment("08/03/2021").format("DD/MM/YYYY"),
    place: "Chennai",
    drop: "Trichy",
    trip: "Round Trip",
    vehicle: "SUV 6+1 Seater",
    actype: "Non-A/C",
  },
  {
    bookingid: "105",
    bookingname: "Surya",
    contact: 8866245698,
    pickup:moment("08/03/2022").format("DD/MM/YYYY"),
    place: "Chennai",
    drop: "Karur",
    trip: "One Way Trip",
    vehicle: "Sedan 4+1 Seater",
    actype: "A/C",
  },
  {
    bookingid: "106",
    bookingname: "Surya",
    contact: 8866245698,
    pickup:moment("02/03/2022").format("DD/MM/YYYY"),
    place: "Chennai",
    drop: "Karur",
    trip: "One Way Trip",
    vehicle: "Sedan 4+1 Seater",
    actype: "A/C",
  },
];
const CarRental = () => {
  const [data, setData] = useState(dataSources);

  const deleteNotification = placement => {
    notification.info({
      message: `Done`,
      description:
        'Sucessfully Deleted',
      placement,
    });
  };

  function handleDelete(index) {
    const result = data.filter((item) => item.bookingid !== index);
    console.log("data", result);
    setData(result);
  }
  function onChange(sorter) {
    console.log('params', sorter);
  }

  const columns = [
    {
      title: "Booking ID",
      dataIndex: "bookingid",
      key: "bookingid",
    },
    {
      title: "Booking Name",
      dataIndex: "bookingname",
      key: "bookingname",
    },
    {
      title: "Contact Number",
      dataIndex: "contact",
      key: "contact",
      
    },

    {
      title: "Pickup Date",
      dataIndex: "pickup",
      key: "pickup",
      sorter: (a, b) => 
      new Date(moment(a.pickup,"DD/MM/YYYY").format("L"))
       -new Date (moment(b.pickup,"DD/MM/YYYY").format("L")),
    },
    {
      title: "Pickup Place",
      dataIndex: "place",
      key: "place",
    },
    {
      title: "Drop Place",
      dataIndex: "drop",
      key: "drop",
    },
    {
      title: "Trip Type",
      dataIndex: "trip",
      key: "trip",
    },
    {
      title: "Vehicle Type",
      dataIndex: "vehicle",
      key: "vehicle",
    },
    {
      title: "A/C Type",
      dataIndex: "actype",
      key: "actype",
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (obj) => {
        return data.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => [handleDelete(obj.bookingid), deleteNotification('top')]}
          >
            <Button className="actionButton">Delete</Button>
          </Popconfirm>
        ) : null;
      },
    },
  ];
  return <Table columns={columns} dataSource={data}  onChange={onChange}/>;
};
export default CarRental;
