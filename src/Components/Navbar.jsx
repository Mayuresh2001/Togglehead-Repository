import React from 'react'
import './NavbarStyles.css'
import searchImg from '.././assets/Icon material-search.svg'
const Navbar = () => {

    const navbarEle = [
        'Qualifications',
        'Organizations',
        'Research & Analysis',
        'Lorem ipsum',
        'Lorem ipsum',
    ]
    return (
        <div className='navbar-main-wrapper'>
            <div  className='navbar-logo'>LOGO</div>
            <div className='navbar-container'>
            <div className='navbar-list'>
                {navbarEle.map((item, index) => (<div key={index + item}>{item}</div>))}
            </div>
            <img src={searchImg} width={16} alt={"search-Icon"}/>
            <div>
                <button className='navbar-button'>
                    Enrolment
                </button>
            </div>
            </div>

        </div>
    )
}

export default Navbar