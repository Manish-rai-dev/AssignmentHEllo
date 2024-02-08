import "./Dashboard.css";
import SideBar from "../components/Sidebar";
// import DashHeader from "../components/Dash";
// import {  useState } from "react";
// import axios from "axios";


const Dashboard = () => {

  // const [coinHistory, setCoinHistory] = useState([]);
  // const [loading, setLoading] = useState(true);
  return (
    <>
      {/* {loading ? (
        <div className="loader">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      ) : ( */}
        <div className="dashb__container">
          <SideBar />
{/* 
          <div className="main__dashboard__container"> */}
            {/* Dhashboard-Header */}
            {/* <DashHeader /> */}

            {/* Top-Crypto-Coins */}
           

            {/* History-Chart-Of-A-Single-Chart */}
          {/* </div> */}
        </div>
      {/* )} */}
    </>
  );
};

export default Dashboard;
