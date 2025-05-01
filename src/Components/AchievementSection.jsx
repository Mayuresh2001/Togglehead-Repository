import React from 'react'
import "./AchievementSection.css"
const AchievementSection = () => {
    const slides = [
        {
            title: "Lorem Ipsum",
            value: '123+',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et'
        },
        {
            title: "Lorem Ipsum",
            value: '12+',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et'
        },
        {
            title: "Lorem Ipsum",
            value: '12+',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et'
        },
        {
            title: "Lorem Ipsum",
            value: '123+',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et'
        },
    ]

    return (
        <div className='achievement-section-wrapper'>
            <div className='achievement-section-container'>
                {slides.map((item, index) => (
                    <div key={index} className='achievement-section-card'>
                        <p className='achievement-section-upper-title'>{item.title}</p>
                        <h1 className='achievement-section-value'>{item.value}</h1>
                        <p className='achievement-section-lower-title'>{item.title}</p>
                        <p className='achievement-section-description'>{item.description}</p>
                    </div>))}
            </div>

        </div>
    )
}

export default AchievementSection