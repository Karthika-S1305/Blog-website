import React from 'react'
import {useNavigate} from 'react-router-dom';
import '../header/Header.css'
import Instagram from '../assets/instagram.webp'
import Facebook from '../assets/facebook.png'
import Twitter from '../assets/twitter.webp'
const Header = () => {

    const navigate = useNavigate();

    const handleAbout = () => {
        navigate('/about');
    }
  return (
    <div>
        <div className='header-box'>

            <div className='media-icons'>
                <div>
                    <img src={Instagram} alt='instagram'/>
                </div>
                <div>
                    <img src={Facebook} alt='facebook'/>
                </div> 
                <div>
                    <img src={Twitter} alt='twitter'/>
                </div>
            </div>
            <div className='header-flex'>
                <div className='header-details'>
                    HOME
                </div>
                <div className='header-details' onClick={handleAbout}>
                    ABOUT
                </div>
                <div className='header-details'>
                    CONTACT
                </div>
                <div className='header-details'>
                    WRITE
                </div>
                <div className='header-details'>
                    LOGOUT
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header