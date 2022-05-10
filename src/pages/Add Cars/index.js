import React, { useState } from "react";
import "antd/dist/antd.css";
// import "./Rent.css";
import {
  Select,
  Input,
  Modal,
  Button,
  Table,
  notification,
  Space,
  Upload,
  Popconfirm,
} from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined, UploadOutlined } from "@ant-design/icons";
import uniqid from "uniqid";

const { Option } = Select;
let initialData = [
  {
    id: uniqid(),
    carimage:
      "https://www.nicepng.com/png/detail/258-2589513_new-swift-dzire-2018.png",
    vehiclemodel: "Swift Dzire",
    carnumber: "TN 01 AA 0099",
    cartype: "Sedan",
  },
  {
    id: uniqid(),
    carimage:
      "https://www.carkhabri.com/Gallery/hyundai/hyundai-eon/common/large/113.jpg",
    vehiclemodel: "Hyundai EON",
    carnumber: "TN 01 BE 5678",
    cartype: "Micro",
  },
  {
    id: uniqid(),
    carimage:
      "https://imgd.aeplcdn.com/1200x900/n/cw/ec/40027/safari-exterior-right-front-three-quarter-2.jpeg?q=75",
    vehiclemodel: "TATA Safari",
    carnumber: "TN 01 SS 8734",
    cartype: "SUV",
  },
  {
    id: uniqid(),
    carimage:
      "https://www.kindpng.com/picc/m/124-1246934_hyundai-car-grand-i10-price-hd-png-download.png",
    vehiclemodel: "Hyundai i10",
    carnumber: "TN 01 BS 1234",
    cartype: "Micro",
  },
  {
    id:uniqid(),
    carimage:
      "https://www.kindpng.com/picc/m/357-3579175_side-skirt-honda-city-hd-png-download.png",
    vehiclemodel: "Honda City",
    carnumber: "TN 01 BQ 7457",
    cartype: "Sedan",
  },
  {
    id: uniqid(),
    carimage:
      "https://www.kindpng.com/picc/m/140-1404789_toyota-innova-png-transparent-png.png",
    vehiclemodel: "Innova",
    carnumber: "TN 01 AS 5786",
    cartype: "SUV",
  },
];

const CarRental = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const [addNewCar, setAddNewCar] = useState(false);

  const [carImage, setCarImage] = useState("");
  const [carNumber, setCarNumber] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [carType, setCarType] = useState("");
  const [addCar, setAddCar] = useState(false);
  const [data, setData] = useState(initialData);
  const [editIndex, setEditIndex] = useState();
  const [modalType, setModalType] = useState("");
  let searchInput;

  const deleteNotification = placement => {
    notification.info({
      message: `Done`,
      description:
        'Sucessfully Deleted',
      placement,
    });
  };
  const editNotification = placement => {
    notification.info({
      message: `Done`,
      description:
        'Edited Sucessfully',
      placement,
    });
  };
  const addNotification = placement => {
    notification.info({
      message: `Done`,
      description:
        'New Car Added Sucessfully',
      placement,
    });
  };

  function addCarFunction() {
    
    if (vehicleModel == "") return alert("Please Enter Car Model");
    if (carNumber == "") return alert("Please Enter Car Number");
    if (carType == "") return alert("Please Select Cat Type");
    if (carImage == "") return alert("Please Select Car Image");

    const data = {
      carimage: carImage,
      carnumber: carNumber,
      vehiclemodel: vehicleModel,
      cartype: carType,
    };
    console.log({ data });
    setData((prev) => [...prev, data]);
    setCarImage("");
    setCarNumber("");
    setVehicleModel("");
    setCarType("");
    setAddCar(false);
  }
  function editData() {
    
    if (vehicleModel == "") return alert("Please Enter Car Model");
    if (carNumber == "") return alert("Please Enter Car Number");
    if (carType == "") return alert("Please Select Cat Type");
    if (carImage == "") return alert("Please Select Car Image");

    const  editedData = {
      id: editIndex,
      carimage: carImage,
      carnumber: carNumber,
      vehiclemodel: vehicleModel,
      cartype: carType,
    };
    const results = data.map((item) => {
      if (item.id === editedData.id) {
        return editedData;
      }
      return item;
    });
   
    setCarImage("");
    setCarNumber("");
    setVehicleModel("");
    setCarType("");
    setAddCar(false);
    setData(results)
  }
  const handleEdit = (rowData) => {
    console.log(rowData);
    setAddCar(true);
    console.log(rowData);
    setCarImage(rowData.carimage);  
    setCarNumber(rowData.carnumber);
    setVehicleModel(rowData.vehiclemodel);
    setCarType(rowData.cartype);
    setModalType("edit");
    setEditIndex(rowData.id);
      
};

  function handleDelete(index) {
    const result = data.filter((item) => item.id !== index);
    console.log("data", result);
    setData(result);
  }
  function vehicleType(value) {
    console.log(`selected ${value}`);
  }

  const showcar = () => {
    setAddCar(true);
  };

  const handleOk = () => {
    setAddNewCar(false);
  };

  const handleCancel = () => {
    setAddNewCar(false);
    
  };

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    searchInput=null
    setSearchText(null);
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: "block" }}
        />
        {console.log("searchInput", searchInput)}
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90, color: "#1890ff" }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          {/* <Button
                     type="link"
                     size="small"
                     onClick={() => {
                       confirm({ closeDropdown: false });
                       this.setState({
                         searchText: selectedKeys[0],
                         searchedColumn: dataIndex,
                       });
                     }}
                   >
                     Filter
                   </Button> */}
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
  const columns = [
    
    {
      title: "Car Image",
      id: "carimage",
      render: (data) => {
        return (
          <img
            src={data.carimage}
            style={{ width: "210px", height: "150px" }}
          ></img>
        );
      },
    },
    {
      dataIndex: "vehiclemodel",
      title: "Car Model",
      id: "vehiclemodel",
      ...getColumnSearchProps("vehiclemodel"),
    },
    {
      dataIndex: "cartype",
      title: "Car Type",
      id: "cartype",
      ...getColumnSearchProps("cartype"),
    },
    {
      dataIndex: "carnumber",
      title: "Car Number",
      id: "carnumber",
      // ...this.getColumnSearchProps("carnumber"),
    },
    {
      title: "Action",
      id: "action",
      align: "center",
      render: (obj) => {
        return (
          <Space direction="horizontal">
            <Button className="actionButton" onClick={() => handleEdit(obj)}>
              Edit
            </Button>
            {data.length >= 1 ? (
              <Popconfirm
                title="Sure to delete?"
                onConfirm={() => [handleDelete(obj.id),deleteNotification('top')]}
              >
                <Button className="actionButton">Delete</Button>
              </Popconfirm>
            ) : null}
          </Space>
        );
      },
    },
  ];

  return (
    <>
      <div className="addButton">
        <Button
          type="primary"
          onClick={() => {
            setAddCar(true);
            setModalType("add");
          }}
          className="addCarButton"
          style={{ background: "#56676 !important" }}
        >
          Add Car
        </Button>
        <Modal
          title="Add Car"
          visible={addCar}
          closable={false}
          className="modelButton"
          footer={false}
        >
          <div className="rentDetails">
            <div className="kmCharge">
              <p className="detailText">
                Car Model
                <Input
                  placeholder="Car Model"
                  value={vehicleModel}
                  onChange={(e) => {
                    setVehicleModel(e.target.value);
                  }}
                />
              </p>
              <p className="detailText">
                Car Number
                <Input
                  placeholder="Car Number"
                  value={carNumber}
                  onChange={(e) => {
                    setCarNumber(e.target.value);
                  }}
                />
              </p>
            </div>
            <div
              className="kmCharge"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <p className="detailText">Car Type</p>
              <Select
                style={{ width: "200px", marginRight: "5px" }}
                value={carType}
                onChange={(v) => {
                  setCarType(v);
                }}
              >
                  <Option value="">Select Car Type</Option>
                <Option value="Micro">Micro</Option>
                <Option value="Sedan">Sedan</Option>
                <Option value="SUV">SUV</Option>
              </Select>
              <div style={{ marginTop: "10px" }}>
                <Upload
                  value={carImage}
                  onChange={(v) => {
                    setCarImage(v);
                  }}
                >
                  {" "}
                  <Button icon={<UploadOutlined />} className="actionButton">
                    Upload Image
                  </Button>{" "}
                </Upload>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <Button
              className="actionButton"
              onClick={() =>
                modalType == "add" ? [addCarFunction(),addNotification('top')] : [editData(),editNotification('top')]
              }
              
              style={{ margin: "10px" }}
            >
              Ok
            </Button>
            <Button
              className="actionButton"
              onClick={() => {
                setAddCar(false);
                setCarImage("");
                setCarNumber("");
                setVehicleModel("");
                setCarType("");

              }}
              style={{ margin: "10px" }}
            >
              Cancle
            </Button>
          </div>
        </Modal>
      </div>

      <Table
        style={{ marginTop: "10px" }}
        columns={columns}
        dataSource={data}
      />
    </>
  );
};
export default CarRental;

// export default function CarRental() {
//   const { Option } = Select;
//   const { TextArea } = Input;
//   const newcar = mockdata.data.cars;

//   function vehicleType(value) {
//     console.log(`selected ${value}`);
//   }

//   const [addNewCar, setAddNewCar] = useState(false);
//   const showcar = () => {
//     setAddNewCar(true);
//   };

//   const handleOk = () => {
//     setAddNewCar(false);
//   };

//   const handleCancel = () => {
//     setAddNewCar(false);
//   };

//   return (
//     <>
//       <div className="addButton">
//         <>
//           <Button
//             type="primary"
//             onClick={showcar}
//             className="addCarButton"
//             style={{ background: "#56676 !important" }}
//           >
//             Add New Car
//           </Button>
//           <Modal
//             title="New Car"
//             visible={addNewCar}
//             onOk={handleOk}
//             onCancel={handleCancel}
//           >
//             <div className="rentDetails">
//               <div className="kmCharge">
//                 <p className="detailText">
//                   Car Name
//                   <Input placeholder="Car Name" />
//                 </p>
//                 <p className="detailText">
//                   Car Model
//                   <Input placeholder="Car Model" />
//                 </p>
//               </div>
//               <div className="kmCharge">
//                 <p className="detailText">
//                   Car Number
//                   <Input placeholder="Car Number" />
//                 </p>
//                 <p className="detailText">
//                   Car Type
//                   <Select
//                     defaultValue="Micro"
//                     style={{ width: "200px", marginRight: "5px" }}
//                     onChange={vehicleType}
//                   >
//                     <Option value="Micro">Micro</Option>
//                     <Option value="Sedan">Sedan</Option>
//                     <Option value="SUV">SUV</Option>
//                   </Select>
//                 </p>
//               </div>
//             </div>
//           </Modal>
//         </>
//       </div>

//       <div className="rentDetails">
//         {newcar.map((cars) => {
//           return (
//             <Car
//               addcars={cars.addcars}
//               vehicleID={cars.vehicleID}
//               vehiclename={cars.vehiclename}
//               vehicletype={cars.vehicletype}
//               carnumber={cars.carnumber}
//             />
//           );
//         })}

//         {/* <p className="detailText">Description  <TextArea rows={4} /></p> */}
//       </div>
//     </>
//   );
// }
