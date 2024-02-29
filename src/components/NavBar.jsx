import React from 'react'
import { NavLink } from 'react-router-dom'

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
      <h1>AYARHEP</h1>
      <NavLink exact to='/' style={navlinkStyles}>Home</NavLink>  
      <NavLink to='/about' style={navlinkStyles}>What We Do</NavLink>
      <NavLink to='/focus-area' style={navlinkStyles}>Focus Area</NavLink>
      <NavLink to='/news' style={navlinkStyles}>News</NavLink>
    </div>
  )
}

export default NavBar
