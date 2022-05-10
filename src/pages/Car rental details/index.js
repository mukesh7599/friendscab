import React, { useState } from "react";
import "antd/dist/antd.css";
import "./Rent.css";
import {
  Select,
  Radio,
  Input,
  Modal,
  Button,
  Table,
  Space,
  Tabs,
  Popconfirm,
  InputNumber,
  Form,
  notification, Divider,
  Typography,
} from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import uniqid from "uniqid";
const { Option } = Select;
let initialData = [
  {
    id: uniqid(),
    cartype: "Micro",
    triptype: "Round",
    seatcapacity: "3+1 Seater",
    actype: "AC",
    basekm: "50KM",
    basehour: "5hours",
    kmcharge: "₹1000",
    hourcharge: "₹1200",
    kmrent: "₹15/km",
    hourlyrent: "₹60/hr",
    driverfee: "₹800",
  },
  {
    id: uniqid(),
    cartype: "Micro",
    triptype: "OneWay",
    seatcapacity: "3+1 Seater",
    actype: "Non-AC",
    basekm: "50KM",
    basehour: "5hours",
    kmcharge: "₹1000",
    hourcharge: "₹1200",
    kmrent: "₹15/km",
    hourlyrent: "₹60/hr",
    driverfee: "₹800",
  },
  {
    id: uniqid(),
    cartype: "Micro",
    triptype: "Round",
    seatcapacity: "3+1 Seater",
    actype: "Non-AC",
    basekm: "50KM",
    basehour: "5hours",
    kmcharge: "₹1000",
    hourcharge: "₹1200",
    kmrent: "₹15/km",
    hourlyrent: "₹60/hr",
    driverfee: "₹800",
  },
  {
    id: uniqid(),
    cartype: "Sedan",
    triptype: "OneWay",
    seatcapacity: "3+1 Seater",
    actype: "AC",
    basekm: "50KM",
    basehour: "5hours",
    kmcharge: "₹1000",
    hourcharge: "₹1200",
    kmrent: "₹15/km",
    hourlyrent: "₹60/hr",
    driverfee: "₹800",
  },
  {
    id: uniqid(),
    cartype: "Sedan",
    triptype: "Round",
    seatcapacity: "3+1 Seater",
    actype: "AC",
    basekm: "50KM",
    basehour: "5hours",
    kmcharge: "₹1000",
    hourcharge: "₹1200",
    kmrent: "₹15/km",
    hourlyrent: "₹60/hr",
    driverfee: "₹800",
  },
  {
    id: uniqid(),
    cartype: "Sedan",
    triptype: "OneWay",
    seatcapacity: "3+1 Seater",
    actype: "Non-AC",
    basekm: "50KM",
    basehour: "5hours",
    kmcharge: "₹1000",
    hourcharge: "₹1200",
    kmrent: "₹15/km",
    hourlyrent: "₹60/hr",
    driverfee: "₹800",
  },
  {
    id: uniqid(),
    cartype: "Sedan",
    triptype: "Round",
    seatcapacity: "3+1 Seater",
    actype: "Non-AC",
    basekm: "50KM",
    basehour: "5hours",
    kmcharge: "₹1000",
    hourcharge: "₹1200",
    kmrent: "₹15/km",
    hourlyrent: "₹60/hr",
    driverfee: "₹800",
  },
  {
    id: uniqid(),
    cartype: "SUV",
    triptype: "OneWay",
    seatcapacity: "6+1 Seater",
    actype: "AC",
    basekm: "50KM",
    basehour: "5hours",
    kmcharge: "₹1000",
    hourcharge: "₹1200",
    kmrent: "₹15/km",
    hourlyrent: "₹60/hr",
    driverfee: "₹800",
  },
  {
    id: uniqid(),
    cartype: "SUV",
    triptype: "Round",
    seatcapacity: "6+1 Seater",
    actype: "AC",
    basekm: "50KM",
    basehour: "5hours",
    kmcharge: "₹1000",
    hourcharge: "₹1200",
    kmrent: "₹15/km",
    hourlyrent: "₹60/hr",
    driverfee: "₹800",
  },
  {
    id: uniqid(),
    cartype: "SUV",
    triptype: "OneWay",
    seatcapacity: "6+1 Seater",
    actype: "Non-AC",
    basekm: "50KM",
    basehour: "5hours",
    kmcharge: "₹1000",
    hourcharge: "₹1200",
    kmrent: "₹15/km",
    hourlyrent: "₹60/hr",
    driverfee: "₹800",
  },
  {
    id: uniqid(),
    cartype: "SUV",
    triptype: "Round",
    seatcapacity: "6+1 Seater",
    actype: "Non-AC",
    basekm: "50KM",
    basehour: "5hours",
    kmcharge: "₹1000",
    hourcharge: "₹1200",
    kmrent: "₹15/km",
    hourlyrent: "₹60/hr",
    driverfee: "₹800",
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
  const [carType, setCarType] = useState("");
  const [tripType, setTripType] = useState("");
  const [acType, setAcType] = useState("");
  const [baseKm, setBaseKm] = useState("");
  const [baseHour, setBaseHour] = useState("");
  const [kmCharge, setKmCharge] = useState("");
  const [hourCharge, setHourCharge] = useState("");
  const [kmRent, setKmRent] = useState("");
  const [hourlyRent, setHourlyRent] = useState("");
  const [driverFee, setDriverFee] = useState("");
  const [seatCapacity, setSeatCapacity] = useState("");
  const [modalType, setModalType] = useState("");
  const [editIndex, setEditIndex] = useState();
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
        'New Rent Added Sucessfully',
      placement,
    });
  };

  function addRentFunction() {
    console.log("wel", uniqid());
    if (carType === "") return alert("please enter Car Type");
    if (seatCapacity === "") return alert("please enter Seat Capacity");
    if (acType === "") return alert("please enter AC Type");
    if (baseKm === "") return alert("please enter Base KM");
    if (baseHour === "") return alert("please enter Base Hour");
    if (kmCharge === "") return alert("please enter KM Charge");
    if (hourCharge === "") return alert("please enter Hour Charge");
    if (kmRent === "") return alert("please enter KM Rent");
    if (hourlyRent === "") return alert("please enter Hourly Rent");
    if (tripType === "") return alert("please enter Trip Type");
    if (driverFee === "") return alert("please enter Driver Fee");

    const data = {
      id: uniqid(),
      seatcapacity: seatCapacity,
      cartype: carType,
      triptype: tripType,
      actype: acType,
      basekm: baseKm,
      basehour: baseHour,
      kmcharge: kmCharge,
      hourcharge: hourCharge,
      kmrent: kmRent,
      hourlyrent: hourlyRent,
      driverfee: driverFee,
    };
    setData((prev) => [data,...prev]);
    setCarType("");
    setTripType("");
    setAcType("");
    setBaseKm("");
    setBaseHour("");
    setKmCharge("");
    setHourCharge("");
    setKmRent("");
    setHourlyRent("");
    setDriverFee("");
    setAddRent(false);
  }

  function handleDelete(index) {
    const result = data.filter((item) => item.id !== index);
    console.log("data", result);
    setData(result);
    
    
    
    
  }

  function editData() {
    if (carType === "") return alert("please enter Car Type");
    if (seatCapacity === "") return alert("please enter Seat Capacity");
    if (acType === "") return alert("please enter AC Type");
    if (baseKm === "") return alert("please enter Base KM");
    if (baseHour === "") return alert("please enter Base Hour");
    if (kmCharge === "") return alert("please enter KM Charge");
    if (hourCharge === "") return alert("please enter Hour Charge");
    if (kmRent === "") return alert("please enter KM Rent");
    if (hourlyRent === "") return alert("please enter Hourly Rent");
    if (tripType === "") return alert("please enter Trip Type");
    if (driverFee === "") return alert("please enter Driver Fee");

    const editedData = {
      id: editIndex,
      seatcapacity: seatCapacity,
      cartype: carType,
      triptype: tripType,
      actype: acType,
      basekm: baseKm,
      basehour: baseHour,
      kmcharge: kmCharge,
      hourcharge: hourCharge,
      kmrent: kmRent,
      hourlyrent: hourlyRent,
      driverfee: driverFee,
    };
    //const result = data.filter((item) => item.key !== data.editIndex);
    const results = data.map((item) => {
      if (item.id === editedData.id) {
        return editedData;
      }
      return item;
    });
    console.log({ results });
    setCarType("");
    setTripType("");
    setAcType("");
    setBaseKm("");
    setBaseHour("");
    setKmCharge("");
    setHourCharge("");
    setKmRent("");
    setHourlyRent("");
    setDriverFee("");
    setAddRent(false);
    setData(results);
  }

  function vehicleType(value) {
    console.log(`selected ${value}`);
  }

  //   const showcar = () => {
  //     setAddRent(true);
  //     setModalType("add")
  //   };

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

  const handleEdit = (rowData) => {
    console.log(rowData);
    setAddRent(true);
    console.log(rowData);
    setSeatCapacity(rowData.seatcapacity);
    setCarType(rowData.cartype);
    setTripType(rowData.triptype);
    setAcType(rowData.actype);
    setBaseKm(rowData.basekm);
    setBaseHour(rowData.basehour);
    setKmCharge(rowData.kmcharge);
    setHourCharge(rowData.hourcharge);
    setKmRent(rowData.kmrent);
    setHourlyRent(rowData.hourlyrent);
    setDriverFee(rowData.driverfee);
    setModalType("edit");
    console.log(rowData.id);
    setEditIndex(rowData.id);
  };

  const columns = [
    // { dataIndex: 'id',title: 'ID', key: 'id', ...this.getColumnSearchProps('id'),},
    {
      dataIndex: "cartype",
      title: "Car Type",
      id: "cartype",
      ...getColumnSearchProps("cartype"),
    },
    {
      dataIndex: "triptype",
      title: "Trip Type",
      id: "triptype",
      ...getColumnSearchProps("triptype"),
    },
    {
      dataIndex: "seatcapacity",
      title: "Seat Capacity",
      id: "seatcapacity",
      // ...getColumnSearchProps("actype"),
    },
    {
      dataIndex: "actype",
      title: "AC Type",
      id: "actype",
      // ...getColumnSearchProps("actype"),
    },
    {
      dataIndex: "basekm",
      title: "Base KM",
      id: "basekm",
      // ...getColumnSearchProps("basekm"),
    },
    {
      dataIndex: "basehour",
      title: "Base Hour",
      id: "basehour",
      // ...getColumnSearchProps("basehour"),
    },
    {
      dataIndex: "kmcharge",
      title: "KM Charge",
      id: "kmcharge",
      // ...getColumnSearchProps("kmcharge"),
    },
    {
      dataIndex: "hourcharge",
      title: "Hour Charge",
      id: "hourcharge",
      // ...getColumnSearchProps("hourcharge"),
    },
    {
      dataIndex: "kmrent",
      title: "KM Rent",
      id: "kmrent",
      // ...getColumnSearchProps("kmrent"),
    },
    {
      dataIndex: "hourlyrent",
      title: "Hourly Rent",
      id: "hourlyrent",
      // ...getColumnSearchProps("hourlyrent"),
    },
    {
      dataIndex: "driverfee",
      title: "Driver Fee",
      id: "driverfee",
      // ...getColumnSearchProps("driverfee"),
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
                onConfirm={() =>[ handleDelete(obj.id),deleteNotification('top')]}
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
          Add New
        </Button>
        <Modal
          title="Add New"
          visible={addRent}
          closable={false}
          footer={false}
        >
          <div className="rentDetails">
            <div className="kmCharge">
              <p className="detailText">
                Car Type
                <Select
                  value={carType}
                  style={{ width: "200px", marginRight: "5px" }}
                  onChange={(v) => {
                    setCarType(v);
                  }}
                >
                  <Option value="">Select Car Type</Option>
                  <Option value="Micro">Micro</Option>
                  <Option value="Sedan">Sedan</Option>
                  <Option value="SUV">SUV</Option>
                </Select>
              </p>
              <p className="detailText">
                Seat Capacity
                <Select
                  value={seatCapacity}
                  style={{ width: "200px", marginRight: "5px" }}
                  onChange={(v) => {
                    setSeatCapacity(v);
                  }}
                >
                  <Option value="">Select Seat Capacity</Option>
                  <Option value="3+1 Seater">3+1 Seater</Option>
                  <Option value="4+1 Seater">4+1 Seater</Option>
                  <Option value="6+1 Seater">6+1 Seater</Option>
                  <Option value="7+1 Seater">7+1 Seater</Option>
                </Select>
              </p>
            </div>
            <div className="kmCharge">
              <p className="detailText">
                AC Type
                <Input
                  value={acType}
                  placeholder="AC Type"
                  onChange={(e) => {
                    setAcType(e.target.value);
                  }}
                />
              </p>
              <p className="detailText">
                Base KM
                <Input
                  placeholder="Base KM"
                  value={baseKm}
                  onChange={(e) => {
                    setBaseKm(e.target.value);
                  }}
                />
              </p>
            </div>
            <div className="kmCharge">
              <p className="detailText">
                Base Hour
                <Input
                  placeholder=" Base Hour"
                  value={baseHour}
                  onChange={(e) => {
                    setBaseHour(e.target.value);
                  }}
                />
              </p>
              <p className="detailText">
                KM Charge
                <Input
                  placeholder="KM Charge"
                  value={kmCharge}
                  onChange={(e) => {
                    setKmCharge(e.target.value);
                  }}
                />
              </p>
            </div>
            <div className="kmCharge">
              <p className="detailText">
                Hour Charge
                <Input
                  placeholder=" Hour Charge"
                  value={hourCharge}
                  onChange={(e) => {
                    setHourCharge(e.target.value);
                  }}
                />
              </p>
              <p className="detailText">
                KM Rent
                <Input
                  placeholder="KM Rent"
                  value={kmRent}
                  onChange={(e) => {
                    setKmRent(e.target.value);
                  }}
                />
              </p>
            </div>
            <div className="kmCharge">
              <p className="detailText">
                Hourly Rent
                <Input
                  placeholder=" Hourly Rent"
                  value={hourlyRent}
                  onChange={(e) => {
                    setHourlyRent(e.target.value);
                  }}
                />
              </p>
              <p className="detailText">
                Trip Type
                <Select
                  value={tripType}
                  placeholder="Select Trip Type"
                  style={{ width: "200px", marginRight: "5px" }}
                  onChange={(v) => {
                    setTripType(v);
                  }}
                >
                  <Option value="">Select Trip Type</Option>
                  <Option value="One Way">One Way</Option>
                  <Option value="Round">Round</Option>
                </Select>
              </p>
            </div>
            {/* <div className="kmCharge"> */}
            <p className="detailText">
              Driver Fee
              <Input
                placeholder=" Driver Fee"
                value={driverFee}
                onChange={(e) => {
                  setDriverFee(e.target.value);
                }}
              />
            </p>
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
                modalType == "add" ? [addRentFunction(),addNotification('top') ]: [editData(),editNotification('top')]
              }
              // onClick={() =>editData()}
              style={{ margin: "10px" }}
            >
              Ok
            </Button>
            <Button
              className="actionButton"
              onClick={() => {
                setAddRent(false);
                setCarType("");
                setTripType("");
                setAcType("");
                setBaseKm("");
                setBaseHour("");
                setKmCharge("");
                setHourCharge("");
                setKmRent("");
                setHourlyRent("");
                setDriverFee("");
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
//   const [type, setType] = React.useState(1);
//   const micro = mockdata.data.micro;
//   const sedan = mockdata.data.sedan;
//   const suv = mockdata.data.suv;

//   const acType = (e) => {
//     console.log("radio checked", e.target.value);
//     setType(e.target.value);
//   };

//   function vehicleType(value) {
//     console.log(`selected ${value}`);
//   }

//   return (
//     <div className="rentDetails">
//       {micro.map((micro) => {
//         return (
//           <React.Fragment key={micro.id}>
//             <Microcar
//               triptype={micro.triptype}
//               carpic={micro.carpic}
//               cartype={micro.cartype}
//               actype={micro.actype}
//               Fixedkm={micro.Fixedkm}
//               fixedhours={micro.fixedhours}
//               Fixedkmcharge={micro.Fixedkmcharge}
//               fixedhourcharge={micro.fixedhourcharge}
//               additionalhourcharge={micro.additionalhourcharge}
//               additionalkmcharge={micro.additionalkmcharge}
//               driverfee={micro.driverfee}
//             />
//           </React.Fragment>
//         );
//       })}
//       ,
//       {sedan.map((sedan) => {
//         return (
//           <React.Fragment key={sedan.id}>
//             <Sedancar
//               triptype={sedan.triptype}
//               carpic={sedan.carpic}
//               cartype={sedan.cartype}
//               actype={sedan.actype}
//               Fixedkm={sedan.Fixedkm}
//               fixedhours={sedan.fixedhours}
//               Fixedkmcharge={sedan.Fixedkmcharge}
//               fixedhourcharge={sedan.fixedhourcharge}
//               additionalhourcharge={sedan.additionalhourcharge}
//               additionalkmcharge={sedan.additionalkmcharge}
//               driverfee={sedan.driverfee}
//             />
//           </React.Fragment>
//         );
//       })}
//       ,
//       {suv.map((suv) => {
//         return (
//           <React.Fragment key={suv.id}>
//             <Suvcar
//               triptype={suv.triptype}
//               carpic={suv.carpic}
//               cartype={suv.cartype}
//               actype={suv.actype}
//               Fixedkm={suv.Fixedkm}
//               fixedhours={suv.fixedhours}
//               Fixedkmcharge={suv.Fixedkmcharge}
//               fixedhourcharge={suv.fixedhourcharge}
//               additionalhourcharge={suv.additionalhourcharge}
//               additionalkmcharge={suv.additionalkmcharge}
//               driverfee={suv.driverfee}
//             />
//           </React.Fragment>
//         );
//       })}
/* <p className="detailText">Vehicle Type </p>{" "}
      <>
        <Select
          defaultValue="4+1 Seater"
          style={{ width: 160 }}
          onChange={vehicleType}
        >
          <Option value="4+1 Seater">Sedan 4+1 Seater</Option>
          <Option value="6+1 Seater">SUV 6+1 Seater</Option>
        </Select>
        <Radio.Group onChange={acType} value={type}>
          <Radio value={1}>A/C</Radio>
          <Radio value={2}>Non-A/C</Radio>
        </Radio.Group>
      </>
      <div className="kmCharge">
        <p className="detailText">
          Fixed Kilometers
          <Input placeholder="Fixed Kilometers" />
        </p>
        <p className="fixedHourText">
          Fixed Hours
          <Input placeholder="Fixed Hours" />
        </p>
      </div>
      <div className="hourCharge">
        <p className="detailText">Fixed Kilometers Charges</p>
        <Input placeholder="Fixed Charges" />
        <p className="detailText">Fixed Hours Charges</p>
        <Input placeholder="Fixed Hours Charges" />
      </div>
      <p className="detailText">Additional Kilometers Charges</p>
      <Input placeholder="Additional Charges" />
      <p className="detailText">Additional Hourly Charges</p>
      <Input placeholder="Additional Charges" />
      <p className="otherCharges">Other Charges</p>
      <p className="detailText">Driver Fee {"&"} Food</p>
      <Input placeholder="Driver Fee" />
      <div className="editButtom"> 
      {/* <div className="edit">
        {" "}
        <Button type="primary">Edit</Button>
      </div>
      <div className="delete">
        {" "}
        <Button type="primary">Delete</Button>
      </div>
      <div className="save">
        {" "}
        <Button type="primary">Save</Button>
      </div> */

//     </div>
//   );
