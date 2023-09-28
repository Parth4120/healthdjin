import React, { useState } from 'react';
// import { formatPhoneNumber, isValidPhoneNumber } from 'react-phone-number-input';
import './Contact.css';
import Navbar from './Navbar';

const Contact = () => {
  const [formData, setFormData] = useState({ Name: "", email: "", tel:""});

  function changeHandler(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }
  

  function submitHandler(event) {
    event.preventDefault();
    const data = { ...formData };
    console.log(data);

    // You can reset the form fields by creating a new empty object
    setFormData({ Name: "", email: "", tel: "" });
  }

  return (
  <div className='contactus-container'>
        <div >
          <Navbar></Navbar>
        </div>   
      <div className='contact'>
          <div className='form-heading'>
            <h1 className='contactus-heading'>Contact Us</h1>
          </div>
          <div>
            <form onSubmit={submitHandler} id="contactUs-form">
              <div>
                <input
                className='form-Name , form-data'
                type="text"
                name='Name'
                placeholder='Enter name'
                value={formData.Name}
                onChange={changeHandler}
                required
                />
              </div>
          

              <div>
                <input
                className='form-email , form-data'
                type="email"
                name="email"
                placeholder='Enter email id'
                value={formData.email}
                onChange={changeHandler}
                required
                />
              </div>

              <div>
                <input
                className='form-data form-tel'
                type="tel"
                placeholder="Enter phone number"
                value={formData.tel}
                onChange={changeHandler}
                id="tel"
                name="tel"
                />
              </div>

              <div className='form-btn-container'>
                <button className='form-btn' type="submit">
                   Submit
                </button>
              </div>
           </form>
          </div>
        </div>
  </div>
  );
};

export default Contact;


 