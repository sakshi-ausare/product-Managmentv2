import React,{useContext}from 'react'
import './Navbar.css';
import {NavLink} from 'react-router-dom';
import ThemeContext from'./theme.jsx';


function Navbar() {
    const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
   <>
    
    <nav className={`navbar ${darkMode ? "dark" : "light"}`}> 

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

        <li>
       <button className="theme-switch" onClick={toggleTheme}>
       <span className={darkMode ? "switch-on" : "switch-off"}></span>
      </button>
        

        </li>


    </ul>

</nav>


   </>
  )
}

export default Navbar
