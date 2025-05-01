import React from 'react'
import sectionImage from "../assets/MaskGroup.svg"
import Arrow from "../assets/Polygon1.svg"
import './HeroSection.css'

const HeroSection = () => {
  return (
    <div className='hero-section-wrapper'>
      {/* <div className='hero-section-container'> */}
      <div className='hero-section-left-section'>
        <h3 className='hero-section-heading'>Lorem ipsum</h3>
        <p className='hero-section-description'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd</p>

        <button className='hero-section-button'>Know More <span> <img className='.hero-section-right-section-img' src={Arrow} width={6}
          alt='section-image' /></span></button>
      </div>
      <div className='hero-section-right-section'>
        <img className='.hero-section-right-section-img' src={sectionImage} width={'auto'}
          height={360} alt='section-image' />
      </div>
      {/* </div> */}
    </div>
  )
}

export default HeroSection