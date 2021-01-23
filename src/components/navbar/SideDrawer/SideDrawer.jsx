import React, {useState} from 'react';
import {ChevronRight} from 'react-bootstrap-icons';
import {BrowserRouter as Router, Link} from "react-router-dom"
import './SideDrawer.css';

const SideDrawer = props =>{
    const [openDropMenu, setOpenDropMenu] = useState(false)

const dropMenuController = () =>{
        setOpenDropMenu(!openDropMenu)
    }

    let drawerClasses = 'side-drawer';
    let showDLinks = {
        display: "none"
    }
    let arrowAnimation = {
        transform: '',
        transition: "ease-out 0.2s"

    }
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    if(openDropMenu){
        arrowAnimation = {
            transform: "rotate(90deg)",
            transition: "ease-in 0.2s"
        }
        showDLinks = {
            display: "block"
        }
    }
return(
<nav className={drawerClasses}>
    <ul>
        <li onClick={dropMenuController}><a href='#'><span><ChevronRight color="white" size={20} className="mb-1 mr-2" style={arrowAnimation}  />
</span>MATERIJALI</a></li>
        <div className="sideD-dropmenu" style={showDLinks}>
            <li><Link to="/plastika">Plastika</Link></li>
            <li><Link to="/papir">Papir</Link></li>
            <li><Link to="/staklo">Staklo</Link></li>


        </div>
        <li><Link to='/'>POČETNA</Link></li>
        <li><Link to='/lokacija'>LOKACIJA</Link></li>
        <li><Link to='/kontakt'>KONTAKT</Link></li>
        <li><Link to='/o_nama'>O NAMA</Link></li>
    </ul>

</nav>
);
};

export default SideDrawer;