import React from 'react'
import './Home.css'
import Cards from '../components/Cards'
import Page1 from '../pages/Page1'
import Contact from '../components/Contact'
import Slider from '../components/Slider'
const Home = () => {
  return (
    <div className='div'>
    
    <Page1/>
    <Cards/>
    <Slider/>
    <Contact/>
    </div>
  )
}

export default Home
