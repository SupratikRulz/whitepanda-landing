import React from 'react'

import cardConfig from './card-config'

import HeroImage from '../../../images/hero-img.svg'

import './Home.css'

export default function Home() {
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
                        cardConfig.map(content => (
                            <div className="card">
                                <img src={content.img} className="card-image" />
                            </div>
                        ))
                    }
                    <div className="fake-card">
                        {' '}
                    </div>

                </div>
            </div>
        </div>
    )
}
