import {useState} from "react";
import "../pages/Dashboard.css";
import { useAuth0 } from "@auth0/auth0-react";
import Hamburger from "../assets/hamburger.svg";
const Dash =()=>
{
    const { user, logout, isAuthenticated } = useAuth0();
    const [isActive, setIsActive] = useState(false);

    const toggleSidebar = () => {
      const sidebarContainer = document.querySelector(".sidebar__container");
      sidebarContainer?.classList.toggle("active"); // Use optional chaining
      setIsActive(!isActive);
  };
    return (
      <div className="dash__header__bar">
      <button className="menu__toggle" onClick={toggleSidebar}>
      <i className={`ri-menu-4-line ${isActive ? "active" : ""}`}>
          <img src={Hamburger} alt="navMenu" />
      </i>
  </button>
        <h2 className="dahsboard">Upload CSV</h2>
  
        <div className="header__right">
         
  
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

        </div>
      </div>
    );

}
export default Dash;