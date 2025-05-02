import React from 'react'
import './AboutSection.css'
import linkedIn from '../assets/linkedin.svg'
import instagram from '../assets/instagram.svg'
import quora from '../assets/quora.svg'
import youtube from '../assets/youtube.svg'
import twitter from '../assets/twitter.svg'
import facebook from '../assets/facebook.svg'
import location from '../assets/location.svg'
import watch from '../assets/watch.svg'
import train from '../assets/train.png'

const AboutSection = () => {
    const images = [facebook, linkedIn, instagram, twitter, youtube, quora]
    return (
        <div className='about-section-wrapper'>
            <div className='about-section-container'>
                <div className='about-section-one section'>
                    <div className='section-heading'>Contact us</div>
                    <p className='section-description'>
                        Address: amet, consetetur sadipscing elitr, sed diam <br />Email id: eirmod tempor invidunt ut labore et dolore <br />Phone no: 123456789</p>
                </div>
                <div className='about-section-two section'>
                    <div className='section-heading'>Follow us</div>
                    <div className='section-links'>
                        {images.map((item, index) => (
                            <div key={index} style={{ transform: index == 0 ? " scale(0.6)" : 'scale(1)' }}>
                                <img loading='lazy' src={item} alt={item} width={35} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='about-section-three section'>
                    <div className='section-heading'>Head Office</div>
                        <ul >
                            <li className='about-section-list'>
                                <span>
                                    <img loading='lazy' src={location} alt='location' width={15} /></span>
                                <div className='list-description'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut

                                </div>
                            </li>
                            <li className='about-section-list'>
                                <span>
                                    <img loading='lazy' src={watch} alt='watch' width={15} />
                                </span>
                                <div className='list-description'>Lorem ipsum dolor sit amet, consetetur sadipscing</div>
                            </li>
                            <li className='about-section-list'>
                                <span>
                                    <img loading='lazy' src={watch} alt='watch' width={15} />
                                </span>
                                <div className='list-description'>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing
                                </div>
                            </li>
                            <li className='about-section-list'>
                                <span>
                                    <img loading='lazy' src={train} alt='train' width={15} />
                                </span>
                                <div className='list-description'>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing 
                                </div>
                            </li>
                        </ul>
                </div>
            </div>
        </div >
    )
}

export default AboutSection