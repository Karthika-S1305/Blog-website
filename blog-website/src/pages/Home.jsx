import React from 'react'
import '../pages/pages.css'
import Thanjavur from '../assets/thanjavur.jpeg';
import Kaveri from '../assets/kaveri.jpg';
import Travel from '../assets/travel.jpg';
import Photographer from '../assets/Photographer.jpg';
import Article1 from '../assets/article1.jpg';
import Tajmahal from '../assets/tajmahal.webp';

const Home = () => {
  return (
    <div>
        <div className='home-box'>
            <div className='home-details'>
                <div className='inner-home'>
                    <img src={Thanjavur} alt='big-temple'/>
                <p>Spontaneous Road Trip Surprises</p>
                </div>
                <div className='inner-home'>
                <img src={Kaveri} alt='river'/>
                <p>sacred river of southern India</p>
                </div>
                <div className='inner-home'>
                <img src={Travel} alt='travel'/>
                <p>Travelling is an amazing way to learn a lot of things in life</p>
                </div>
            </div>
            <div className='home-details'>
                <div className='inner-home'>
                <img src={Photographer} alt='photographer'/>
                <p>Capture the moments</p>
                </div>
                <div className='inner-home'>
                <img src={Article1} alt='book'/>
                <p> Books are known to be a man's best friend</p>
                </div>
                <div className='inner-home'>
                <img src={Tajmahal} alt='tajmahal'/>
                <p>Taj Mahal UNESCO World Heritage Site</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home