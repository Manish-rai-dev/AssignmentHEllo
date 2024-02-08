import React from "react";
import "../pages/Dashboard.css";
import { useAuth0 } from "@auth0/auth0-react";
const Dash =()=>
{
    const { user, logout, isAuthenticated } = useAuth0();

    return (
      <div className="dash__header__bar">
        <h2 className="dahsboard">Dashboard</h2>
  
        <div className="header__right">
          <div className="search__box">
            <input
              type="text"
              className="search__bar"
              placeholder="Search..."
            />
            <i className="ri-search-line"></i>
          </div>
  
          <button className="bell__icon">
            <i className="ri-notification-2-line"></i>
          </button>
  
          <div className="profile__icon">
            {isAuthenticated && <img src={user.picture} alt="userimage" />}
  
            <ul
              className="profile__dropdown"
            >
              <li>{user?.name}</li>
              <li>
                <button onClick={logout}>Log Out</button>
              </li>
            </ul>
          </div>
          <button
            className="menu__toggle"
            onClick={() => {
              document
                .querySelector(".sidebar__container")
                .classList.toggle("active");
            }}
          >
            <i className="ri-menu-4-line"></i>
          </button>
        </div>
      </div>
    );

}
export default Dash;