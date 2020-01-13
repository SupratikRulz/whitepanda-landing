import React, { Component } from 'react'

import Toolbar from '../Toolbar'
import SideDrawer from '../SideDrawer'
import Backdrop from '../Backdrop'

import '../../styles/reset.css'

export default class Layout extends Component {
    state = {
        sideDrawerOpen: false
    }

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen };
        });
    };

    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false });
    }

    render() {
        let backdrop;

        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />
        }
        return (
            <div>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                <SideDrawer show={this.state.sideDrawerOpen} />
                {
                    backdrop
                }
                <main style={{margin: 'auto', marginTop: '64px',  maxWidth: '1440px'}}>
                    {
                        this.props.children
                    }
                </main>
            </div>
        )
    }
}
