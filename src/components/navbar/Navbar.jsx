import './navbar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import avatar from '../../assets/navbar/avatar.png';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="time">
          <p>Hello Kruluz Utsman</p>
          <p>4.45 pm 19 Jan 2022</p>
        </div>
        <div className="search">
          <SearchOutlinedIcon className="icon" />
          <input type="text" placeholder="Search" />
        </div>
        <div className="info">
          <div className="notification">
            <NotificationsNoneIcon className="icon" />
            <div className="counter"></div>
          </div>
          <div className="person">
            <p>Kruluz Utsman</p>
            <img src={avatar} alt="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
