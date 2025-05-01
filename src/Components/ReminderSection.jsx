import React from 'react'
import './ReminderSection.css'
import calendar from '../assets/calender.png'
import Arrow from '../assets/ArrowButton.svg'

const ReminderSection = () => {
    const reminderContent = [
        {
            id: 1,
            title: '02th October 2014',
            level: 'Level 1',
            description: 'exam'
        },
        {
            id: 2,
            title: 'Nov-Dec 2016',
            level: 'Level 2',
            description: 'Lorem Ipsum Lorem Ipsum'
        },
        {
            id: 2,
            title: 'Ongoing this year',
            level: 'Level 3 (Grad)'
        },

    ]
    const slides = Array.from({ length: 7 });
    return (
        <div className='reminder-section-wrapper'>
            <div className='reminder-section-container'>
                <div className='reminder-section-events-container'>
                    <div className='reminder-section-upper-part'>
                        <div className='reminder-section-title'>
                            <h2 className='reminder-section-heading'>Upcoming<br /> Examinations</h2>
                            <p className='reminder-section-desc'>Enquire about the examination & register for the exams</p>
                        </div>
                        <div className='event-calendar-wrapper'>{reminderContent.map((item, index) => (
                            <div key={index} className='event-calendar-card'>
                                <img src={calendar} alt={"calendar"} width={55} height={53} />
                                <div>
                                    <p className='event-heading'>{item.title}</p>
                                    <p style={{ color: '#525252' }}>
                                        {item.level}<br />
                                        {item?.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
                <div className='reminder-section-carousel-wrapper'>
                    {slides.map((_, id) => (
                        <div key={id} className='reminder-section-carousel-container'>
                            <div className='reminder-section-carousel-card'>
                                <div className='reminder-section-carousel-card-title'>
                                    Lorem ipsum
                                </div>
                                <div className='reminder-section-carousel-card-description'>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                </div>
                                <button className='reminder-section-carousel-card-button'>Know More <span className='carousel-card-button'><img className='image-card' src={Arrow} width={17} /></span></button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default ReminderSection