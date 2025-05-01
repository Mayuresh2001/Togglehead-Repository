import React from 'react'
import Arrow from "../assets/Polygon1.svg"
import Subscibe from "../assets/Subscribe-img.svg"
import "./SubscribeSection.css"

const SubscribeSection = () => {
    return (
        <div className='subscribe-section-wrapper'>
            <div className='subscribe-section-container'>
                <div className='subscribe-left-section-container'>
                    <div className='subscribe-section-title'>Subscribe</div>
                    <div className='subscribe-section-description'>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    </div>
                    <div className='subscribe-section-input-container'>
                        <input className='subscribe-section-input-section' placeholder='Enter your Email Address' />
                        <button className='subscribe-button'>Subscribe Now<span>
                            <img className='subscribe-button-section-img' src={Arrow} width={6} alt='Arrow-image' />
                        </span>
                        </button>
                    </div>
                </div>
                <div className='subscribe-right-section-container'><img className='subscribe-button-section-img' src={Subscibe} alt='subscribe-image' /></div>
            </div>
        </div>
    )
}

export default SubscribeSection