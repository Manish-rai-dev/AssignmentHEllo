import '../pages/Dashboard.css';
import MobileLogo from "../assets/mobileSideLogo.svg";
import Dashboard from "../assets/dashboard/Iconly/Bold/Category.svg";
import Invoice from "../assets/Invoice/Iconly/Bold/Ticket.svg";
import Schedule from "../assets/Schedule/Iconly/Bold/Document.svg";
import Calendar from "../assets/Calendar/Iconly/Bold/Calendar.svg";
import Notification from "../assets/Notification/Iconly/Bold/Notification.svg";
import  Settings from "../assets/Setting/Iconly/Bold/Setting.svg";

const SideBar = () => {

  return (
    <div className="sidebar__container">
  

  
    <img src={ MobileLogo} alt="brand" style={{height:"35px", 
    textAlign:"center",
    marginTop:"15%",
    color:"#605BFF",
    marginBottom:"15%",
    display:"inline-flex",
    // marginLeft:"5%",
    width:"auto",}} className=''/>
  
      <ul className="nav__links">
        <li className="nav__link">
          <p

            className="active"
           
          >
            <img  style={{height:"24px",
            width:"24px",
            display:"inline-flex" ,  
              marginRight: "8px"}}  
              src={Dashboard} alt='iconSidebar' 
              className ="ri-pie-chart-line"/>Dashboard
          </p>
        </li>
        <li className="nav__link">
          <p href="http://" target="_blank" 
          rel="noopener noreferrer">
            <img style={{height:"24px",
              width:"24px",
            display:"inline-flex", 
               marginRight: "8px"}}  
               src={Invoice} alt='iconSidebar' 
                className="ri-price-tag-3-line"/>Upload
          </p>
        </li>
        <li className="nav__link">
          <p href="http://" target="_blank" rel="noopener noreferrer">
            <img style={{height:"24px",width:"24px",display:"inline-flex",
                marginRight: "8px",}}  src={Invoice} alt='iconSidebar'  className="ri-calendar-line"/>Invoice
          </p>
        </li>
        <li className="nav__link">
          <p href="http://" target="_blank" rel="noopener noreferrer">
            <img style={{height:"24px",width:"24px",display:"inline-flex",  
              marginRight: "8px"}}  alt='iconSidebar' src={ Schedule}className="ri-user-3-line"/>Schedule
          </p>
        </li>
        <li className="nav__link">
          <p href="http://" target="_blank" rel="noopener noreferrer">
            <img  style={{height:"24px",width:"24px",display:"inline-flex", 
               marginRight: "8px"}}  src={Calendar} alt='iconSidebar'  className="ri-settings-3-line "/>calendar
          </p>
        </li>
        <li className="nav__link" style={{ display: "flex", alignItems: "center" }}>
        <p href="http://" target="_blank" rel="noopener noreferrer">
          <span style={{ marginRight: "5px" }}>
            <img style={{ height: "24px", width: "24px" ,display:"inline-flex",    
            
            marginRight: "8px"}} src={Notification} alt='iconSidebar' className="ri-settings-3-line" />
          </span>
          <span>Notification</span>
        </p>
      </li>
      <li className="nav__link">
      <p href="http://" target="_blank" rel="noopener noreferrer">
        <img src={Settings} style={{height:"24px",width:"24px",display:"inline-flex",  
        
        marginRight: "8px"}} alt='iconSidebar'  className="ri-settings-3-line"/>Settings
      </p>
    </li>
      </ul>


    </div>
  );
}

export default SideBar;