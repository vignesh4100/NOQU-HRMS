import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './AdminLayout.css';
import logo from '../assets/logo.png';
import Admin_dashboard from '../assets/Admin_dashboard.svg';
import { RiMenu3Line } from 'react-icons/ri';

const AdminSidebar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [newsLetter, setNewsLetter] = useState(false);
  const [CMSmenu, setCMSmenu] = useState(false);
  const [CPmenu, setCPmenu] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <div className="admin_mobile_menu_control">
        <RiMenu3Line color="black" size={27} onClick={() => setToggleMenu(true)} />
      </div>

      <div className="admin_menu">
        <div className="admin_menu_head">
          <div className="admin_menu_head-img">
            <img src={logo} alt="Logo" />
          </div>
          <h5>NoQu HRMS</h5>
        </div>

        <div className="admin_menu_body">
          <ul>
            <li>
              <NavLink to="/" 
              end
              className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                <img src={Admin_dashboard} width={15} style={{ marginRight: 8 }} /> Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/interview" end className={({ isActive }) => (isActive ? 'active-link' : '')}>
                <img src={Admin_dashboard} width={15} style={{ marginRight: 8 }} /> Interview
              </NavLink>
            </li>
            <li>
              <NavLink to="/onboard" end className={({ isActive }) => (isActive ? 'active-link' : '')}>
                <img src={Admin_dashboard} width={15} style={{ marginRight: 8 }} /> Onboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/documents" end className={({ isActive }) => (isActive ? 'active-link' : '')}>
                <img src={Admin_dashboard} width={15} style={{ marginRight: 8 }} /> Documents
              </NavLink>
            </li>
            <li>
              <NavLink to="/assets" end className={({ isActive }) => (isActive ? 'active-link' : '')}>
                <img src={Admin_dashboard} width={15} style={{ marginRight: 8 }} /> Assets
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
