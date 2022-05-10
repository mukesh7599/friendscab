import React, { useState } from "react";
import "../App.css";
import "../pages/Car rental details/Rent.css";
import micro from "../Images/Micro.jpg";

// import { DataGrid, GridColDef,  } from '@mui/x-data-grid';
import { Select, Radio, Input, Modal, Button,Table, Space} from "antd";
// import Highlighter from 'react-highlight-words';
// import { SearchOutlined } from '@ant-design/icons';

// import "antd/dist/antd.css";

  
//   const data = [
//     // { id: 1, cartype:'Micro' , triptype: 'OneWay' , actype:'AC' ,basekm:'50KM' ,basehour: '5hours',kmcharge:'₹1000' ,hourcharge:'₹1200' ,kmrent:'₹15/km',hourlyrent:'₹60/hr',driverfee:'₹800' },
//      { key: '1', cartype: 'Micro' , triptype: 'Round', actype:'AC' ,basekm:'50KM' ,basehour: '5hours',kmcharge:'₹1000' ,hourcharge:'₹1200' ,kmrent:'₹15/km',hourlyrent:'₹60/hr',driverfee: '₹800'},
//     { key: '2',cartype: 'Micro' , triptype: 'OneWay' , actype:'Non-AC' ,basekm:'50KM' ,basehour: '5hours',kmcharge:'₹1000' ,hourcharge:'₹1200' ,kmrent:'₹15/km',hourlyrent:'₹60/hr',driverfee: '₹800'},
//     { key: '3',cartype: 'Micro' , triptype: 'Round' , actype:'Non-AC' ,basekm: '50KM',basehour:'5hours' ,kmcharge: '₹1000',hourcharge: '₹1200',kmrent:'₹15/km',hourlyrent:'₹60/hr',driverfee:'₹800' },
//     { key: '4', cartype:'Sedan' , triptype: 'OneWay' , actype:'AC' ,basekm:'50KM' ,basehour:'5hours' ,kmcharge:'₹1000' ,hourcharge: '₹1200',kmrent:'₹15/km',hourlyrent:'₹60/hr',driverfee:'₹800' },
//     { key: '5', cartype: 'Sedan', triptype: 'Round' , actype:'AC' ,basekm:'50KM' ,basehour:'5hours' ,kmcharge:'₹1000' ,hourcharge:'₹1200' ,kmrent:'₹15/km',hourlyrent:'₹60/hr',driverfee: '₹800'},
//     { key: '6', cartype: 'Sedan', triptype: 'OneWay', actype:'Non-AC' ,basekm:'50KM' ,basehour:'5hours' ,kmcharge:'₹1000' ,hourcharge:'₹1200' ,kmrent:'₹15/km',hourlyrent:'₹60/hr',driverfee:'₹800'},
//     { key: '7', cartype: 'Sedan', triptype:'Round' , actype:'Non-AC' ,basekm:'50KM' ,basehour: '5hours',kmcharge:'₹1000' ,hourcharge:'₹1200' ,kmrent:'₹15/km',hourlyrent:'₹60/hr',driverfee:'₹800'},
//     { key: '8', cartype: 'SUV', triptype:'OneWay' , actype:'AC' ,basekm:'50KM' ,basehour: '5hours',kmcharge:'₹1000' ,hourcharge:'₹1200' ,kmrent:'₹15/km',hourlyrent:'₹60/hr',driverfee:'₹800'},
//     // { key: '1', 9, cartype:'SUV' , triptype: 'OneWay' , actype: 'AC',basekm: '50KM',basehour: '5hours',kmcharge:'₹1000' ,hourcharge: '₹1200',kmrent:'₹15/km',hourlyrent:'₹60/hr',driverfee:"'₹800'},
//     { key: '9', cartype: 'SUV', triptype:'Round' , actype:'AC' ,basekm:'50KM' ,basehour:'5hours' ,kmcharge:'₹1000' ,hourcharge:'₹1200' ,kmrent:'₹15/km',hourlyrent:'₹60/hr',driverfee:'₹800'},
//     { key: '10', cartype:'SUV' , triptype: 'OneWay' , actype: 'Non-AC',basekm: '50KM',basehour:'5hours' ,kmcharge:'₹1000' ,hourcharge: '₹1200',kmrent:'₹15/km',hourlyrent:'₹60/hr',driverfee:'₹800'},
//     { key: '11', cartype:'SUV' , triptype:'Round' , actype:'Non-AC' ,basekm:'50KM' ,basehour: '5hours',kmcharge:'₹1000' ,hourcharge:'₹1200' ,kmrent:'₹15/km',hourlyrent:'₹60/hr',driverfee:'₹800'},
//   ];
//   class App extends React.Component {
//     state = {
//       searchText: '',
//       searchedColumn: '',
//     };
  
//     getColumnSearchProps = dataIndex => ({
//       filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
//         <div style={{ padding: 8 }}>
//           <Input
//             ref={node => {
//               this.searchInput = node;
//             }}
//             placeholder={`Search ${dataIndex}`}
//             value={selectedKeys[0]}
//             onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
//             onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
//             style={{ marginBottom: 8, display: 'block' }}
//           />
//           <Space>
//             <Button
//               type="primary"
//               onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
//               icon={<SearchOutlined />}
//               size="small"
//               style={{ width: 90 }}
//             >
//               Search
//             </Button>
//             <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
//               Reset
//             </Button>
//             <Button
//               type="link"
//               size="small"
//               onClick={() => {
//                 confirm({ closeDropdown: false });
//                 this.setState({
//                   searchText: selectedKeys[0],
//                   searchedColumn: dataIndex,
//                 });
//               }}
//             >
//               Filter
//             </Button>
//           </Space>
//         </div>
//       ),
//       filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
//       onFilter: (value, record) =>
//         record[dataIndex]
//           ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
//           : '',
//       onFilterDropdownVisibleChange: visible => {
//         if (visible) {
//           setTimeout(() => this.searchInput.select(), 100);
//         }
//       },
//       render: text =>
//         this.state.searchedColumn === dataIndex ? (
//           <Highlighter
//             highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
//             searchWords={[this.state.searchText]}
//             autoEscape
//             textToHighlight={text ? text.toString() : ''}
//           />
//         ) : (
//           text
//         ),
//     });
  
//     handleSearch = (selectedKeys, confirm, dataIndex) => {
//       confirm();
//       this.setState({
//         searchText: selectedKeys[0],
//         searchedColumn: dataIndex,
//       });
//     };
  
//     handleReset = clearFilters => {
//       clearFilters();
//       this.setState({ searchText: '' });
//     };
// render()
// {
//     const columns= [
//         // { dataIndex: 'id',title: 'ID', key: 'id', ...this.getColumnSearchProps('id'),},
//         { dataIndex: 'cartype',title: 'Car Type', key: 'cartype', ...this.getColumnSearchProps('cartype'),},
//         { dataIndex: 'triptype',title: 'Trip Type', key: 'triptype', ...this.getColumnSearchProps('triptype'),},
//         { dataIndex: 'actype',title: 'AC Type', key: 'actype', ...this.getColumnSearchProps('actype'),}, 
//         { dataIndex: 'basekm',title: 'Base KM', key: 'basekm', ...this.getColumnSearchProps('basekm'),},
//         { dataIndex: 'basehour',title: 'Base Hour', key: 'basehour', ...this.getColumnSearchProps('basehour'),},
//         { dataIndex: 'kmcharge',title: 'KM Charge', key: 'kmcharge', ...this.getColumnSearchProps('kmcharge'),},
//         { dataIndex: 'hourcharge',title: 'Hour Charge', key: 'hourcharge', ...this.getColumnSearchProps('hourcharge'),},
//         { dataIndex: 'kmrent',title: 'KM Rent', key: 'kmrent', ...this.getColumnSearchProps('kmrent'),},
//         { dataIndex: 'hourlyrent',title: 'Hourly Rent', key: 'hourlyrent', ...this.getColumnSearchProps('hourlyrent'),},
//         { dataIndex: 'driverfee',title: 'Driver Fee', key: 'driverfee', ...this.getColumnSearchProps('driverfee'),},
//       ];
//       return <Table columns={columns} dataSource={data} />;
//     }
  
// }  
const Card = ({
    
  cartype,
  actype,
  Fixedkm,
  fixedhours,
  Fixedkmcharge,
  fixedhourcharge,
  additionalkmcharge,
  additionalhourcharge,
  driverfee,
  carpic,
  triptype,
}) => {
  {
    const [newRent, setNewRent] = useState(false);

    const showEdit = () => {
      setNewRent(true);
    };

    const handleOk = () => {
      setNewRent(false);
    };

    const handleCancel = () => {
      setNewRent(false);
    };
    const { Option } = Select;
    const [type, setType] = React.useState(1);

    const acType = (e) => {
      console.log("radio checked", e.target.value);
      setType(e.target.value);
    };

    function vehicleType(value) {
      console.log(`selected ${value}`);
    }

    return (
      <>
         <div className="rentDetails">
          <div className="carRent">
            <div className="acType">
                <p>{triptype}</p>
              <p>{actype}</p>
            </div>
            <div
              className="carcharge"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div className="rentText">
                <p className="rentObject"> {Fixedkm}</p>
                <p>Base KM</p>
              </div>

              <div className="rentText">
                {" "}
                <p className="rentObject"> {fixedhours} </p>
                <p>Base Time </p>
              </div>
            </div>
            <div className="microCar">
              <img
                src={carpic}
                style={{ height: "140px", width: "150px" }}
              ></img>

              <p className="carType">{cartype}</p>
            </div>

            <div
              className="carcharge"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div className="rentText">
                <p className="rentObject"> {Fixedkmcharge}</p>
                <p>Base KM Charge</p>
              </div>

              <div className="rentText" style={{ marginLeft: "50px" }}>
                <p className="rentObject"> {fixedhourcharge}</p>
                <p>Base Time Charge</p>
              </div>
            </div>
            <div
              className="carcharge"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div className="rentText">
                {" "}
                <p className="rentObject">{additionalkmcharge}</p>
                <p>Kilometers Rent</p>
              </div>
              <div className="rentText">
                {" "}
                <p className="rentObject">{additionalhourcharge}</p>
                <p>Hourly Rent</p>
              </div>
            </div>
            <p className="driverText">
              <span>{"*"}</span> Driver Fee {"+"} Food <span>{driverfee}</span>
            </p>
            <>
              <Button type="primary" onClick={showEdit} style={{display:"flex",justifyContent:"flex-end",alignItems:"flex-end"}}>
                Edit
              </Button>
              <Modal
                title="Edit Rent"
                visible={newRent}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <div className="rentDetails">
                  <div className="kmCharge">
                    <p className="detailText">
                      Base Kilometers
                      <Input placeholder="Base Kilometers" />
                    </p>
                    <p className="detailText">
                      Base Hours
                      <Input placeholder="Base Hours" />
                    </p>
                  </div>
                  <div className="kmCharge">
                    <p className="detailText">Base KM Charges
                    <Input placeholder="Base Charges" /></p>
                    <p className="detailText">Base HR Charge
                    <Input placeholder="Base Hours Charges" /></p>
                  </div>
                  <div className="kmCharge">
                  <p className="detailText">Kilometer Rent
                  <Input placeholder="Kilometer Rent" /></p>
                  <p className="detailText">Hourly Rent
                  <Input placeholder="Hourly Rent" /></p>
                  </div>
                 <div> <p className="detailText">Driver Fee {"+"} Food</p>
                  <Input placeholder="Driver Fee" /></div>
            
                </div>
              </Modal>
            </>
          </div>
        </div> 
    </>
    );
  }
};
  
    
export default Card;
