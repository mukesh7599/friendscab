import React, { useState } from "react";
import "antd/dist/antd.css";
import uniqid from "uniqid";
import {
  Select,
  Radio,
  Input,
  Modal,
  Button,
  Table,
  notification,
  Space,
  Tabs ,
  Popconfirm,
  InputNumber,
  Form,
  Typography,
} from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
let initialData = [
  {
    id: uniqid(),
    drivername: "Sathish",
    drivermobile: "9956432980",
    licenseno:"DL98765",
    address: "Chennai",
    
  },
  {
    id: uniqid(),
    drivername: "Mani",
    drivermobile: "8688095664",
    licenseno:"DL98765",
    address: "Chennai",
  
  },
 
];

const CarRental = () => {
  const [searchText, setSearchText] = useState("");
  const [addRent, setAddRent] = useState(false);
  const [searchedColumn, setSearchedColumn] = useState("");
  const [addNewCar, setAddNewCar] = useState(false);
  const [data, setData] = useState(initialData);
  const [rentData, setRentData] = useState([]);
  const [key, setKey] = useState("");
  const [licenseno, setLicenseno] = useState("");
  const [driverName, setDriverName] = useState("");
  const [driverMobile, setDriverMobile] = useState("");
  const [address, setAddress] = useState("");
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
        'New Driver Added Sucessfully',
      placement,
    });
  };

  function addDriverFunction() {
    if (driverName == "") return alert("please enter Car Type");
    if (driverMobile == "") return alert("please enter Seat Capacity");
    if (licenseno == "") return alert("please enter AC Type");
    if (address == "") return alert("please enter Base KM");
   

    const data = {
      id: uniqid(),
      licenseno: licenseno,
      drivername: driverName,
      drivermobile: driverMobile,
      address: address,
    
    };
    setData((prev) => [...prev, data]);
    setLicenseno("");
    setDriverName("");
    setDriverMobile("");
    setAddress("");
    setAddRent(false);
  }

  function editData() {
    if (driverName == "") return alert("please enter Car Type");
    if (driverMobile == "") return alert("please enter Seat Capacity");
    if (licenseno == "") return alert("please enter AC Type");
    if (address == "") return alert("please enter Base KM");

   

    const  editedData = {
      id: editIndex,
      licenseno: licenseno,
      drivername: driverName,
      drivermobile: driverMobile,
      address: address,
    };
    const results = data.map((item) => {
      if (item.id === editedData.id) {
        return editedData;
      }
      return item;
    });
    setLicenseno("");
    setDriverName("");
    setDriverMobile("");
    setAddress("");
    setAddRent(false);
    setData(results)
  }
   
  const handleEdit = (rowData) => {
    console.log(rowData)
  setAddRent(true)
  console.log(rowData)
  setLicenseno(rowData.licenseno);
  setDriverName(rowData.drivername);
  setDriverMobile(rowData.drivermobile);
  setAddress(rowData.address); 
  setModalType("edit");
  setEditIndex(rowData.id);
  

}

  function handleDelete(index) {
    const result = data.filter((item) => item.id !== index);
    console.log("data", result);
    setData(result);
  }

  function vehicleType(value) {
    console.log(`selected ${value}`);
  }

  const showcar = () => {
    setAddRent(true);
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
    setSearchText(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
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
            <Button
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
                      </Button>
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
    // { dataIndex: 'id',title: 'ID', key: 'id', ...this.getColumnSearchProps('id'),},
    {
      dataIndex: "drivername",
      title: "Driver Name",
      id: "drivername",
      ...getColumnSearchProps("drivername"),
    },
    {
      dataIndex: "drivermobile",
      title: "Driver Mobile",
      id: "drivermobile",
      // ...getColumnSearchProps("drivermobile"),
    },
    {
        dataIndex: "licenseno",
        title: "License Number",
        id: "licenseno",
        // ...getColumnSearchProps("address"),
      },
    {
      dataIndex: "address",
      title: "Address",
      id: "address",
      // ...getColumnSearchProps("address"),
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
                onConfirm={() => [handleDelete(obj.id), deleteNotification('top')]}
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
            setAddRent(true);
            setModalType("add");
          }}
          className="addCarButton"
          style={{ background: "#56676 !important" }}
        >
          Add Driver
        </Button>
        <Modal
          title="Add Driver"
          visible={addRent}
          closable={false}
          footer={false}
        >
          <div className="rentDetails">
            <div className="kmCharge">
            <p className="detailText">
                Driver Name
                <Input
                value={driverName}
                  placeholder="Driver Name"
                  onChange={(e) => {
                    setDriverName(e.target.value);
                  }}
                />
              </p>
              <p className="detailText">
                Driver Mobile
                <Input
                value={driverMobile}
                  placeholder="Mobile Number"
                  onChange={(e) => {
                    setDriverMobile(e.target.value);
                  }}
                />
              </p>
            </div>
            <div className="kmCharge">
              <p className="detailText">
                License Number
                <Input
                value={licenseno}
                  placeholder="AC Type"
                  onChange={(e) => {
                    setLicenseno(e.target.value);
                  }}
                />
              </p>
              <p className="detailText">
                Address
                <Input
                  placeholder="Address"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </p>
            </div>
           
            {/* </div> */}
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
                modalType == "add" ? [addDriverFunction(),addNotification('top')] : [editData(),editNotification('top')]
              }
              style={{ margin: "10px" }}
            >
              Ok
            </Button>
            <Button
              className="actionButton"
              onClick={() => {setAddRent(false)
                setDriverName("");
                setDriverMobile("");
                setLicenseno("");
                setAddress("");
               
            }
        }
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