import './Page1.css'
import Navbar from '../components/Navbar'
import {RiArrowUpDoubleFill} from 'react-icons/ri'

const Page1 = () => {
    return(<div className='page1'>
         <div>
        <Navbar/>
      </div>

      <div className='slogens'>
      <div className="circle-container">
        <div className='dynamic-circle'></div>
        <div className='dynamic-circle'></div>
        <div className='dynamic-circle'></div>
        <div className='dynamic-circle'></div>
        <div className='dynamic-circle'></div>
        <div className='dynamic-circle'></div>
        <div className='dynamic-circle'></div>
      </div>

      
        <p className='text'>
            WELCOME TO
        </p>
        <p className='ran'>
            RAN
        </p>
        <p className='text'>
           We provide health tech solutions
        </p>
      </div>

      <div className='text'>
        <RiArrowUpDoubleFill size={80} color='#fff' className='swipeupicon'/>
        <p className='swipeupicon'>SWIPE UP</p>
      </div>
    </div>)
}

export default Page1