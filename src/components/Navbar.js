import './Navbar.css'


const Navbar = () => {
    return(
        <div className='navbar'>
            <div className='logo'>
                RAN
            </div>

            <div>
            <nav>
                <ul className='navlist'>
                    <navLink> <li>Home</li></navLink>
                    <navLink> <li>Projects</li></navLink>
                    <navLink> <li>Info</li></navLink>
                    <navLink> <li>Contact</li></navLink>
                </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar