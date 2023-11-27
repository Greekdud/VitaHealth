import React from 'react'
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom'
import './Navbar.css';


const Navbar = () => {
  return (
    <nav className='main-nav container'>
      <div className='logo-img-container'>
           <Link  to='/login'>
             <img className='nav-logo' src={logo} alt="" />
           </Link>
      </div>
            <div className='nav-titles'>
                  <Link className='link' to='/login'>
                    <p>Blog</p>
                </Link>
                  <Link className='link' to='/'>
                    <p>About Us</p>
                </Link>
                <Link className='link' to='/chat'>
                    <p>Faq</p>
                </Link>
                <Link className='link' to='/login'>
                    <p>Contact Us</p>
                </Link>
            </div>

    </nav>
  )
}

export default Navbar