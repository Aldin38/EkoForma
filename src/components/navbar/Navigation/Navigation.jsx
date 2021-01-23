import React, { Component } from 'react';
import './Navigation.css';
import '../SideDrawer/DrawerToggleButton';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar, Container, NavDropdown, Nav, Dropdown } from "react-bootstrap";
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import logo  from '../../../static/ekoFormaW.png'




 const  Navigation = props => {

  
 return( 
<nav class="navbar navbar-light bg-primary">
  <Link class="navbar-brand" to="/"><img src={logo}></img></Link>
    <div class="list">
       <li className="right-menu">
      <button className="list-link drop-btn" href="#">MATERIJALI</button>

        <div className="dropdown-menu">
        <Link to="plastika">Plastika</Link>
        <Link to="papir">Papir</Link>
        <Link to="staklo">Staklo</Link>
        </div>
      </li>
        <li>
      <Link className="list-link" to="/">POČETNA</Link>
      </li>
      <li>
      <Link className="list-link" to="/lokacija">LOKACIJA</Link>
      </li>
      <li>
      <Link className="list-link" to="/kontakt">KONTAKT</Link>
      </li>
      <li>
      <Link className="list-link" to="/o_nama">O NAMA</Link>
      </li>
    </div>
    <DrawerToggleButton click={props.drawerClickHandler} />

</nav>

);

}

export default Navigation;