import React from 'react'

function Contact() {
  return (
    <div className='contact'>
    <h3>Contact</h3>
    <form>
    <label>
        <span>Your email:</span>
        <input type='email' name='email' required />
    </label>
    <label>
        <span>Your Message</span>
        <textarea type='email' name='message' required ></textarea>
    </label>
      <button>Submit</button>
      </form>
    </div>
  )
}

export default Contact
