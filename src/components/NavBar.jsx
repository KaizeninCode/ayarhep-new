import React from 'react'
// import { NavLink } from 'react-router-dom'

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
      <a href="#home" style={navlinkStyles}>Home</a>
      <a href="#about" style={navlinkStyles}>About</a>
      <a href="#focus" style={navlinkStyles}>Focus Area</a>
      <a href="#news" style={navlinkStyles}>News</a>
      <a href="#gallery" style={navlinkStyles}>Gallery</a>
    </div>
  )
}

export default NavBar
