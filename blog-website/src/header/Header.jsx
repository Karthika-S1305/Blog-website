// eslint-disable-next-line no-unused-vars
import React from 'react'
import {useNavigate} from 'react-router-dom';
import '../header/Header.css'

const Header = () => {

    const navigate = useNavigate();

    const handleHome = () =>{
        navigate('/')
    }

    const handleContact = ()=>{
        navigate('/contact')
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
                <h2 style={{fontSize: '32px'}}>Welcome!</h2>
            </div>
            <div className='header-flex'>
                <div className='header-details' onClick={handleHome}>
                    HOME
                </div>
                <div className='header-details' onClick={handleAbout}>
                    ABOUT
                </div>
                <div className='header-details' onClick={handleContact}>
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