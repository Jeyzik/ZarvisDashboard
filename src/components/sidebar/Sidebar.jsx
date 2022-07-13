import './sidebar.scss';
import logo from '../../assets/sidebar/logo.png';
import DashboardIcon from '@mui/icons-material/Dashboard';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import { DarkModeContext } from '../context/darkModeContext';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <img src={logo} alt="logo" />
          <span className="logo">ZARVIS</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>

          <Link to="/products" style={{ textDecoration: 'none' }}>
            <li>
              <StoreOutlinedIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>

          <Link to="/users" style={{ textDecoration: 'none' }}>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>

          <li>
            <CalendarMonthOutlinedIcon className="icon" />
            <span>Schedules</span>
          </li>
          <li>
            <AccountBalanceWalletOutlinedIcon className="icon" />
            <span>Payouts</span>
          </li>
          <li>
            <SettingsOutlinedIcon className="icon" />
            <span>Settings</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={() => dispatch({ type: 'LIGHT' })}></div>
        <div className="colorOption" onClick={() => dispatch({ type: 'DARK' })}></div>
      </div>
      <div className="protect">
        <div className="rad">
          <AddModeratorIcon className="icon" />
        </div>
        <p className="text">Keep you safe!</p>
        <p className="text">Update your security password, keep your account safe!</p>
        <p className="text">Update Privacy</p>
      </div>
    </div>
  );
};

export default Sidebar;
