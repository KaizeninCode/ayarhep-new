import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    const navlinkStyles = {
        textDecoration: 'none',
        color: 'ivory',
        borderRadius: '0.3125rem',
        margin: '0 1rem',
        padding: '0.625rem',
        textAlign: 'center',
        transition: '.8s ease-in-out',
    }
  return (
    <div className='header'>
      <div className="logo">
        <div className="logo-img"></div>
        <NavLink exact to='/'><h1>AYARHEP</h1></NavLink>  
      </div>
      <NavLink to='/focus-area' style={navlinkStyles}>Focus Area</NavLink>
      <NavLink to='/resources' style={navlinkStyles}>Resources</NavLink>
      {/* <NavLink to='/news' style={navlinkStyles}>News</NavLink> */}
      <NavLink to='/activities' style={navlinkStyles}>Activities</NavLink>
      <NavLink to='/interventions' style={navlinkStyles}>Interventions</NavLink>
    </div>
  )
}

export default NavBar
