import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
      <div className='footer'>
        <div className="footer-links">
          <NavLink to='/footer-about'>About</NavLink>
          <NavLink to='/faq'>FAQ</NavLink>
          <NavLink to='/privacy'>Privacy Policy</NavLink>
          <NavLink to='/help'>Help</NavLink>
          <NavLink to='/tc'>Terms and Conditions</NavLink>
        </div>
        <div className="footer-contact">
          <h2>Contact Us</h2>
          <p>Telephone: +254 722 390 634</p>
          <p><a href="mailto:ayarhep@gmail.com">ayarhep@gmail.com</a></p>
        </div>
      </div>

  )
}

export default Footer
