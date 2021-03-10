import React from 'react';
import logo from '../../images/logo.png'; 
import './Header.css';    //(in same folder ./)

const Header = () => {
    return (
        <div className="header">
          <img src={logo} alt=""/>

          <nav>
            <a href="/Shop">Shop</a>
            <a href="/Review">Order Review</a>
            <a href="/Inventory">Manage Inventory</a>
         </nav>

        </div>

        
    );
};

export default Header;