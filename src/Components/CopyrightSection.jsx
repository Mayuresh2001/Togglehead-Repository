import React from 'react'
import './CopyrightSection.css'
import cprt from '../assets/copyright.svg'
const CopyrightSection = () => {
    return <>
        <div className='cprt-wrapper'>
            <div className='cprt-container'>
                <div className='cprt'><img src={cprt} alt='copyright'  height={24}/></div>
            </div>
        </div>
    </>
}
export default CopyrightSection