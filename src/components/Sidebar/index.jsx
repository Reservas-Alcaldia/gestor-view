import React from 'react';
import './Sidebar.css';
import AlcaldiaLogo from '../../assets/alcaldia.png'

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img className='image' src={AlcaldiaLogo} alt="Alcaldía de Medellín" />
      </div>
      <button className="menu-button">Solicitudes</button>
    </div>
  );
}

export default Sidebar;
