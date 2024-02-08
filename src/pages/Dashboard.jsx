import "./Dashboard.css";
import SideBar from "../components/SideBar";
import DashHeader from "../components/Dash";
import { useEffect, useState } from "react";
import axios from "axios";


// const url =
//   "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=6&page=1&sparkline=false&locale=en";

const Dashboard = () => {
  // const [apiData, setAPIData] = useState();
  // const [coinHistory, setCoinHistory] = useState([]);
  // const [loading, setLoading] = useState(true);

  

  // useEffect(() => {
  //   const fetchApi = async () => {
  //     try {
        // const response = await axios.get(url);
        // const { data } = await axios.get(
        //   `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=inr&days=1d`
        // );
        // setCoinHistory(data.prices);
        // setAPIData(response.data);
        // setLoading(false);
      // } catch (error) {
      //   console.log(error);
      //   alert("API request limit reached pls request after few-mins...");
      //   setLoading(false);
      // }
    // };
    // fetchApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, );

  return (
    <>
   
        <div className="dashb__container">
          <SideBar/>

          <div className="main__dashboard__container">
           
            <DashHeader />

            {/* Top-Crypto-Coins */}
          

            {/* History-Chart-Of-A-Single-Chart */}
            <div className="pie__profile__container">
          
            </div>
          </div>
        </div>
     
    </>
  );
};

export default Dashboard;
