import React from 'react'
import logo from "../assets/logo.png"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div id="navbar">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <ul id="Nav-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/user/dashboard/aryan">Dashboard</NavLink></li>
        <li><NavLink to="/Data-Breach">Breach Checker</NavLink></li>
        <li><NavLink to="/SecurityScore">Security Score</NavLink></li>
        <li><NavLink to="/alerts">Alerts</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar
