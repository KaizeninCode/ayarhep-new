import React from 'react'

function FooterHelp() {
  return (
    <div className='footer-help'>
      <h1>Any questions?</h1>
      <p>Reach out to us.</p>
      <form className='form'>
        <div className="form-name">
          <label htmlFor="name">Name</label>
          <input type="text" name="form-name" id="name" />
        </div>
        <div className="form-name">
          <label htmlFor="email">Email</label>
          <input type="email" name="form-email" id="email" />
        </div>
        <div className="form-name">
          <label htmlFor="message">Message</label>
          <textarea type="text" name="form-message" id="message" />
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  )
}

export default FooterHelp
