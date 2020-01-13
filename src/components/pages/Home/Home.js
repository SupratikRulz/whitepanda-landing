import React, { useState } from 'react'

import cardConfig from './card-config'

import HeroImage from '../../../images/hero-img.svg'

import './Home.css'

export default function Home() {
    const [hoverIndex, setHoverIndex] = useState(-1)

    const handleOnMouseHover = index => setHoverIndex(index)
    const handleOnMouseOut = () => setHoverIndex(-1)

    return (
        <div>
            <div className="section">
                <div className="hero-img-section">
                    <img src={HeroImage} className="hero-img"/>
                    <div className="centered">
                        <div><h1 className="mw-820">Thoughtful, Impactful, Powerful Content</h1></div>
                        <div><h3 className="mw-540">Structured by Domain Experts, Crafted by Copywriters, Delivered at the speed of thought</h3></div>
                        <button>Get Started</button>
                    </div>
                </div>
            </div>
            <div className="section pbox-32">
                <div className="card-container">
                    {
                        cardConfig.map((content, index) => (
                            <div className="card" key={index} onMouseEnter={() => handleOnMouseHover(index)} onMouseLeave={handleOnMouseOut}>
                                <img src={content.img} className={`card-image ${hoverIndex === index ? 'blurred' : ''}`} />
                                {
                                    hoverIndex === index && (
                                        <div className="card-hover" style={{backgroundColor: content.color + '5f'}}>
                                            <h3>{content.header}</h3>
                                            <span>{content.description}</span>
                                            <h3>{content.footer}</h3>
                                        </div>
                                    )
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
