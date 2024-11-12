// eslint-disable-next-line no-unused-vars
import React from 'react'
import {useNavigate} from 'react-router-dom';
import '../header/Header.css'
import Instagram from '../assets/instagram.webp'
import Facebook from '../assets/facebook.png'
import Twitter from '../assets/twitter.webp'
const Header = () => {

    const navigate = useNavigate();

    const handleHome = () =>{
        navigate('/')
    }

    const handleAbout = () => {
        navigate('/about');
    }

    const handleWrite = () =>{
        navigate('/write')
    }
  return (
    <div>
        <div className='header-box'>
        <button style={{
        color: 'White', 
        background: 'grey',
        border: '3px',
        alignItems:'right',
        width: '70px',
        height: '30px',
        cursor:'pointer'
      }} onClick={() => navigate(-1)}>Go back</button>
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
                <div className='header-details' onClick={handleHome}>
                    HOME
                </div>
                <div className='header-details' onClick={handleAbout}>
                    ABOUT
                </div>
                <div className='header-details'>
                    CONTACT
                </div>
                <div className='header-details' onClick={handleWrite}>
                    WRITE
                </div>
            </div>
            {/* <div className='profile-flex'>
                <button className='profile-button'></button>
            </div> */}
        </div>
    </div>
  )
}

export default Header