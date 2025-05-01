import React, { useState } from 'react'
import "./FaqSection.css"
import Add from "../assets/add_circle.svg"
import Minus from "../assets/minus_circle.svg"

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState(null);


    const toggleIndex = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const faqItems = [
        {
            title: 'How does an investor gain access to MF Utility?',
            content: (
                <p>
                    Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
            ),
        },
        {
            title: 'Will investors be able to have multiple Common Account Numbers?',
            content: (
                <p>
                    Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
            ),
        },
        {
            title: 'How does an investor gain access to MF Utility?',
            content: (
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                </p>
            ),
        },
    ];


    return (
        <div className='faq-wrapper'>
            <h1 className='faq-heading'>FAQ</h1>
            <div className='faq-container'>
                {faqItems.map((item, index) => {
                    const isOpen = index === openIndex;
                    return (
                        <div key={index} className="accordion-item">
                            <button
                                className="accordion-header"
                                onClick={() => toggleIndex(index)}
                                aria-expanded={isOpen}
                                aria-controls={`accordion-content-${index}`}
                                id={`accordion-header-${index}`}
                            >
                                {item.title}
                                <span className="accordion-icon">
                                    {isOpen ?
                                        <span>
                                            <img className='.hero-section-right-section-img' src={Minus} width={24}
                                                alt='section-image' />
                                        </span>
                                        :
                                        <span>
                                            <img className='.hero-section-right-section-img' src={Add} width={24}
                                                alt='section-image' />
                                        </span>
                                    }
                                </span>
                            </button>

                            <div
                                id={`accordion-content-${index}`}
                                className={`accordion-content ${isOpen ? 'is-open' : ''}`}
                                role="region"
                                aria-labelledby={`accordion-header-${index}`}
                            >
                                {item.content}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default FaqSection