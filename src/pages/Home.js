import React from 'react'
import './Home.css'
import Cards from '../components/Cards'
import Page1 from '../pages/Page1'
import Contact from '../components/Contact'
const Home = () => {
  return (
    <div className='div'>
    
    <Page1/>
    <Cards/>
    <Contact/>
    </div>
  )
}

export default Home
