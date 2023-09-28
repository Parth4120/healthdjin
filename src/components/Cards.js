import React from 'react';
import './Cards.css'
import Navbar from './Navbar';

const Cards = () => {
  return (
    
    <div className='cards-main-container'>
    <div><Navbar></Navbar></div>
      <div className='cards-main-heading'>
      Projects
      </div>
      <div className='cards-main-box'>
        <div className='cards-main-box-1'>box-1</div>
        <div className='cards-main-box-2'>box-2</div>
        <div className='cards-main-box-3'>box-3</div>
      </div>
    </div>
  )
}

export default Cards
