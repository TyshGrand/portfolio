import React, { useState } from 'react';
import { FaBars, FaHome, FaPlus, FaCog } from 'react-icons/fa';
import './SideNavbar.css'; 

const SideNavbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const menuItems = [
    { icon: <FaPlus />, label: 'New Chat' },
    { icon: <FaHome />, label: 'Home' },
    { icon: <FaCog />, label: 'Settings' },
  ];

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'collapsed'}`}>
      <div className="toggle-btn" onClick={toggleSidebar}>
        <FaBars />
      </div>
      <ul className="menu">
        {menuItems.map((item, idx) => (
          <li key={idx} className="menu-item">
            {item.icon}
            {isOpen && <span>{item.label}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNavbar;