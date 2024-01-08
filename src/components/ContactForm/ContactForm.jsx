import React, { useState } from 'react';
import "./ContactForm.css";

function ContactForm() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        tag: '',
        message: ''
    });

    const handleChange = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
        console.log(formState);
    };

    return (
        <div className='contact-form'><div><p className='contact-paragraph'>We value your feedback and inquiries.
             If you have any questions, suggestions, or require assistance, please don’t 
             hesitate to reach out. Fill out the contact form below with your name, email
             , and a brief message. We strive to respond to all inquiries promptly. Your communic
             ation is important to us, and we look forward to assisting you. Thank you for choosi
             ng our services.</p></div>
            <form onSubmit={handleSubmit}>
                <div><label>
                    Name:<br></br> <input type="text" name="name" value={formState.name} onChange={handleChange} required />
                </label></div>
              <div>  <label>
                    Email:<br></br>
                    <input type="email" name="email" value={formState.email} onChange={handleChange} required />
                </label></div>
               <div> <label>
                    Tag:<br></br>
                    <input type="text" name="tag" value={formState.tag} onChange={handleChange} required />
                </label></div>
               <div> <label>
                    Message:<br></br>
                    <textarea name="message" rows="4" cols="50" value={formState.message} onChange={handleChange} required />
                </label></div>
                <div><input type="submit" value="Submit" className='submit-button' /></div>
                
            </form>
        </div>
       
    );
}

export default ContactForm;