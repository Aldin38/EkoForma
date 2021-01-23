import React, { useState } from 'react'

import Navigation from './Navigation/Navigation';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './backdrop/Backdrop';

export default function Navbar() {

    const [sideDrawerOpen , setSideDrawerOpen ] = useState(false)

   const drawerToggleClickHandler = () => {
        setSideDrawerOpen(!sideDrawerOpen);
    }   
    
    const backdropClickHandler = () => {
        setSideDrawerOpen(false)
    };

    let backdrop;

    if (sideDrawerOpen) {
        backdrop = <Backdrop click={backdropClickHandler} />;
    }
    
    return (
        <div style={{height:'100%'}}>
        <Navigation drawerClickHandler={drawerToggleClickHandler}/>
        <SideDrawer show={sideDrawerOpen}/>
        {backdrop}
    </div>
    )
}
