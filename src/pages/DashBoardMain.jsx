import "./Dashboard.css";
import React from "react";
import DashHeader from "../components/Dash";
import SideBar from "../components/SideBar";
import { useState } from "react";
import Excel from "../assets/excel.svg";

import { MdOutlineFileUpload } from "react-icons/md";

const DashBoardMain = ({onUpload}) => {


    const [file, setFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
  
    const handleFileChange = (e) => {
      setFile(e.target.files[0]);
    };
  
    const handleRemove = () => {
      setFile(null);
    };
  
    const handleUpload = () => {
      // Simulating upload with a timeout
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        // Add your upload logic here
      }, 2000);
    };

  
  return (
    <>
      <div className="dashb__container">
        <SideBar/>
        <div className="main__dashboard__container">
          <DashHeader />

          <div className="containment">
          <div className="uploadCSVcontainer">
            <div className="addCsv">
              <div className="dottedBorder">
                <div className="addImage">
                  <img src={Excel} style={{ height: "36px", width: "36px" }} alt="Excel sheet Logo" />
                </div>
                <div className="addText">
                  {file ? (
                    <>
                      {file.name} <span onClick={handleRemove} style={{ color: "red", cursor: "pointer" }}>remove</span>
                    </>
                  ) : (
                    <>
                      Drop your sheet here or <label htmlFor="fileInput" style={{ color: "#605BFF", cursor: "pointer" }}>browse</label>
                      <input id="fileInput" type="file" onChange={handleFileChange} style={{ display: "none" }} />
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="addBtn">
              <div className="BtnInside upload" onClick={handleUpload}>
                {isLoading ? (
                  <div className="loader"></div> // Spinner replaces "Loading..." text
                ) : (
                  <>
                    <MdOutlineFileUpload /> Upload
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default DashBoardMain;
