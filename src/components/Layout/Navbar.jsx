import React from 'react'
import './Navbar.css';
import {NavLink} from 'react-router-dom';

function Navbar() {
  return (
   <>
    <nav className="navbar">

    <div className="navbar-title">

        <div className="logo">
            🛒
        </div>
        <h2>Product Management Dashboard</h2>

    </div>
    <ul>
        <li>
        <NavLink to="/product">Products</NavLink>
        </li>
        <li>
        <NavLink  to="/add" className="add-btn">Add Product</NavLink>
        </li>


    </ul>

</nav>

   </>
  )
}

export default Navbar
