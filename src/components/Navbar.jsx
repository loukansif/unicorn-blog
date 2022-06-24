/* eslint-disable jsx-a11y/anchor-is-valid */
import matriceLogo from '../assets/img/matriceLogo.png'
import React from 'react'

 const Navbar = () => {
    return (
      <div className="Header">
        <div >
          <img src={matriceLogo} className="logoMatrice" alt="Logo" />
        </div>
        <nav>
          <ul>
            <li>Upload</li>
            <li>Gallery</li>
          </ul>
        </nav>
      </div>
    );
  };
  
  export default Navbar;