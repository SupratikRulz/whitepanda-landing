import React from 'react'

import HeroImage from '../../../images/hero-img.svg'

import './Home.css'

export default function Home() {
    return (
        <div>
            <section className="section">
                <div className="hero-img-section">
                    <img src={HeroImage} className="hero-img"/>
                    <div className="centered">
                        <div><h1 className="mw-820">Thoughtful, Impactful, Powerful Content</h1></div>
                        <div><h3 className="mw-540">Structured by Domain Experts, Crafted by Copywriters, Delivered at the speed of thought</h3></div>
                        <button>Get Started</button>
                    </div>
                </div>
            </section>
        </div>
    )
}
