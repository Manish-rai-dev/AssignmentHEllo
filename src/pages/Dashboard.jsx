import "./Dashboard.css";
import React from "react";
import DashHeader from "../components/Dash";
import SideBar from "../components/SideBar";
import { useState } from "react";
import Excel from "../assets/excel.svg";
// import { Menu, Transition } from '@headlessui/react';
// import { CheckIcon } from '@heroicons/react/outline';
import {  Typography } from "@material-tailwind/react";
import { FaFileCsv, FaArrowUp, FaTimes } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";
// import { Button, Select, MenuItem } from '@mui/material';
// const TABLE_HEAD = ["SlNO", "Links", "Prefix", "Add Tags", "Selected Tags"];

// const TABLE_ROWS = [
//   {
//     SlNO: "1",
//     Links: "Manager",
//     Prefix: "Prefixsample",
//   },
//   {
//     name: "2",
//     Links: "Developer",
//     Prefix: "Prefixsample",
//   },
//   {
//     name: "3",
//     Links: "Executive",
//     Prefix: "Prefixsample",
//   },
//   {
//     name: "Michael Levi",
//     Links: "Developer",
//     Prefix: "Prefixsample",
//   },
//   {
//     name: "Richard Gran",
//     Links: "Manager",
//     Prefix: "Prefixsample",
//   },
// ];

const tagsList = ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag7", "tag8", "tag9", "tag10"];







const Dashboard = ({onUpload}) => {

  const [selectedTags, setSelectedTags] = useState({});
  const [isDropdownExpanded, setIsDropdownExpanded] = useState(false);

  const handleTagSelection = (name, selectedValues) => {
    setSelectedTags((prevTags) => ({ ...prevTags, [name]: selectedValues }));
  };

  const toggleDropdown = () => {
    setIsDropdownExpanded(!isDropdownExpanded);
  };
  const handleRemoveTag = (siNo, tagToRemove) => {
    // Update the selectedTags state to remove the tagToRemove from the array at the index siNo
    setSelectedTags(prevState => {
      const updatedTags = { ...prevState };
      updatedTags[siNo] = updatedTags[siNo].filter(tag => tag !== tagToRemove);
      return updatedTags;
    });
  };

    const [file, setFile] = useState(null);
    const [uploaded, setUploaded] = useState(false);
    const data = [
      {
        siNo: "01",
        links: "www.google.com",
        prefix: "prefixsample",
        addTags: "Tag 1 X Tag 2 X",
        selectedTags: "TAG 1 X TAG 2 X",
      },
      {
        siNo: "02",
        links: "www.google.com",
        prefix: "prefixsample",
        addTags: "Tag 1 X Tag 2 X Tag 3 X",
        selectedTags: "TAG 1 X TAG 2 X",
      },
      {
        siNo: "03",
        links: "www.google.com",
        prefix: "prefixsample",
        addTags: "Tag 1 X",
        selectedTags: "TAG 1 X TAG 3 X",
      },
      {
        siNo: "04",
        links: "www.google.com",
        prefix: "prefixsample",
        addTags: "Tag 1 X Tag 2 X",
        selectedTags: "TAG 1 X TAG 2 X TAG 3 X TAG 4 X",
      },
      {
        siNo: "05",
        links: "www.google.com",
        prefix: "prefixsample",
        addTags: "Tag 3 X",
        selectedTags: "TAG 4 X",
      },
    ];
  
  
  return (
    <>
      <div className="dashb__container">
        <SideBar/>
        <div className="main__dashboard__container">
          <DashHeader />


          <div className="upload-csv">
          <h2>Upload CSV</h2>
          <div className="upload-csv__input-container">
            <input
              type="file"
              accept=".csv"
              className="upload-csv__input-file"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label htmlFor="csv-file-input" className="upload-csv__input-label">
              <FaFileCsv />
              <span>Select CSV file</span>
            </label>
          </div>
          <button
            className={`upload-csv__button ${uploaded ? "uploaded" : ""}`}
            disabled={!file}
            onClick={() => {
              onUpload(file);
              setUploaded(true);
            }}
          >
            <FaArrowUp />
            <span>Upload</span>
          </button>
          <button
            className="upload-csv__button reset"
            disabled={!uploaded}
            onClick={() => setFile(null)}
          >
            <FaTimes />
            <span>Reset</span>
          </button>
        </div>

          <div className=" addCsv" >
          <div className="dottedBorder">
            <div className="addImage">
            <img src={Excel} style={{height:"36px",width:"36px"}} alt="Excel sheet Logo"/>
            </div>
            <div className="addText">Drop your sheet here or <span style={{color:"#605BFF"}}>browse</span></div>
            </div>
            
            </div>
          <div className="addBtn">
              <div className="BtnInside">
              <MdOutlineFileUpload/>Upload
              </div>
          </div>

          <div className="pie__profile__container">
          
            Uploads


    
          <table className="table">
          <thead>
            <tr style={{padding:"5px",margin:"5px",background:"black"}}>
              <th>SI No.</th>
              <th>Links</th>
              <th>Prefix</th>
              <th>Add Tags</th>
              <th>Selected Tags</th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ siNo, links, prefix }, index) => {
              const isLast = index === data.length - 1;
              const classes = isLast
                ? "p-4 last-row"
                : "p-4";
    
              return (
                <tr key={siNo} className={classes}
                
                style={{padding:"5px",margin:"5px",background:"black",borderRadius:"10px"}}
                >
                  <td>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {siNo}
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {links}
                    </Typography>
                  </td>
                  <td>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {prefix}
                    </Typography>
                  </td>
                  <td>
                  <div className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="border border-gray-300 rounded-md p-1"
                  >
                    Tags
                  </button>
                  {isDropdownExpanded && (
                    <div className="">
                      <select
                        multiple
                        className="p-1 w-full absolute z-10 mt-1 bg-white border border-gray-300 rounded-md shadow-lg"
                        onChange={(e) =>
                          handleTagSelection(
                            siNo,
                            Array.from(e.target.selectedOptions).map(
                              (option) => option.value
                            )
                          )
                        }
                      >
                        {tagsList.map((tag) => (
                          <option key={tag} value={tag}>
                            {tag}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>
              
              
                  </td>
                  <td>
                  {selectedTags[siNo] && selectedTags[siNo].map((tag, tagIndex) => (
                    <div key={tagIndex} className="tag-wrapper" style={{ background: '#605BFF', color: 'white', borderRadius: '5px', padding: '3px 8px', marginRight: '5px', display: 'inline-flex', alignItems: 'center' }}>
                      <span>{tag}</span>
                      <button
                        onClick={() => handleRemoveTag(siNo, tag)}
                        style={{ background: 'transparent', border: 'none', color: 'white', marginLeft: '5px', cursor: 'pointer' }}
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                </td>
                </tr>
              )
            })}
          </tbody>
        </table>
<hr/>





<hr/>
<hr/>
<hr/>


      
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
