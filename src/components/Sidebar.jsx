import '../pages/Dashboard.css';
const Sidebar =()=>{
    <div className="sidebar__container">
    <h1 className="board__logo">Board.</h1>

    <ul className="nav__links">
      <li className="nav__link">
        <a
          href="http://"
          target="blank"
          className="active"
          rel="noopener noreferrer"
        >
          <i className="ri-pie-chart-line"></i>Dashboard
        </a>
      </li>
      <li className="nav__link">
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <i className="ri-price-tag-3-line"></i>Transactions
        </a>
      </li>
      <li className="nav__link">
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <i className="ri-calendar-line"></i>Schedules
        </a>
      </li>
      <li className="nav__link">
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <i className="ri-user-3-line"></i>users
        </a>
      </li>
      <li className="nav__link">
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <i className="ri-settings-3-line"></i>Settings
        </a>
      </li>
    </ul>

    <div className="sidebar__footer">
      <a href="http://" target="blank" rel="noopener noreferrer">
        Help
      </a>
      <a href="http://" target="blank" rel="noopener noreferrer">
        Contact Us
      </a>
    </div>
  </div>

}
export default Sidebar;
