import { useState } from 'react'
import './contact.scss'
import { useForm, ValidationError } from '@formspree/react';
export default function Contact() {

  // const [message, setMessage] = useState(false)
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   setMessage(true)
  // }

  const [state, handleSubmit] = useForm("xknkbjkz");
  if (state.succeeded) {
      return <span>Thanks for Submitting your request</span>;
  }
  return (
    <div className='contact' id='contact'>
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
    <div className="right">
    
    <h2>Contact Me! </h2>
    <form onSubmit={handleSubmit} >
   
    <div >
      <input className="form-control" id="email" type="email" name="email" placeholder='Email Address' />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div>
      <textarea className='form-control' id="message" name="message" placeholder="Please submit any requests/inquiries"/>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
       </div>
      
       <div className='form-group buttons' >
      <button type="submit" disabled={state.submitting}>
          Submit Request
      </button>
      </div>
    </form>
   
    {/* <h2>Contact.</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Email' />
        <textarea placeholder='message'></textarea>
        <button type='submit'>Send</button>
        {message && <span>Your message has been recieved :)</span>}
      </form> */}
    </div>
    </div>
  )
}
