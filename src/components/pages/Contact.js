import React, { useState }from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { validateEmail } from '.'

function Contact () {
    const











  return (
    <div className='contact-box'>
        <div className='contact-hero'>
            <h1>Let's get acquainted!</h1>
              <p>Send me a message</p>
        </div>
        <div className='form'>
        <form>
            <label>Your Name</label><input type="text"></input>
            <label>Email</label><input type="email"></input>
            <label>Subject</label><input type="text"></input>
            <label>Message</label><textarea rows="6" placeholder="Type your message here"/>
            <button className="btn">Submit</button>
        </form>
        </div>


    </div>
  )
}

export default Contact;