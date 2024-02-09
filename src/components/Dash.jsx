import {useState} from "react";
import "../pages/Dashboard.css";
import Hamburger from "../assets/hamburger.svg";

import bell from "../assets/Bell.svg";
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from "react-router-dom";
import user from "../assets/user.svg";
const Dash =()=>
{
    
    const [isActive, setIsActive] = useState(false);

    const toggleSidebar = () => {
      const sidebarContainer = document.querySelector(".sidebar__container");
      sidebarContainer?.classList.toggle("active"); // Use optional chaining
      setIsActive(!isActive);
  };
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }
    return (
      <div className="dash__header__bar">

        <h2 className="dahsboard">Upload CSV</h2>
  
        <div className="header__right">
         

          <button className="bell__icon">
           <img src={bell} alt="bell Icon"  className="ri-notification-2-line"/>
         
          </button>
  
          <div className="profile__icon">
           <img src={user} alt="userimage"/>
  
            <ul
              className="profile__dropdown"
            >
             
              <li>
                <button onClick={handleLogout} >Log Out</button>
              </li>
            </ul>
          </div>
          <button className="menu__toggle" onClick={toggleSidebar}>
          <i className={`ri-menu-4-line ${isActive ? "active" : ""}`}>
              <img src={Hamburger} className="hamburger" alt="navMenu" />
          </i>
      </button>

        </div>
      </div>
    );

}
export default Dash;