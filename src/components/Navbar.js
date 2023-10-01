import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                RAN
            </div>
            <div>
                <nav>
                    <ul className='navlist'>
                        <li><NavLink exact to="/" >Home</NavLink></li>
                        <li><NavLink to="/projects" >Projects</NavLink></li>
                        <li><NavLink to="/info" >Info</NavLink></li>
                        <li><NavLink to="/contact" >Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
