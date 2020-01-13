import React from 'react'

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'

import Logo from '../../images/logo.svg'
import './Toolbar.css'

export default function Toolbar(props) {
    return (
        <header className="toolbar">
            <nav className="toolbar-navigation">
                <div className="toolbar-toggle-button">
                    <DrawerToggleButton click={props.drawerClickHandler} />
                </div>
                <div className="toolbar-logo"><a href="/"><img src={Logo}/></a></div>
                <div className="spacer" />
                <div className="toolbar-navigation-items">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Pricing</a></li>
                        <li><a href="/">For Brands</a></li>
                        <li><a href="/">For Creators</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><button>Login</button></li>
                        <li><button>Sign Up</button></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
