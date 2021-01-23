import './App.css';
import  Navbar from './components/navbar/navbar'
import BaseTemp from './components/baseTemp'
import {BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home/Home'
import SideHome from './components/Home/SideHome'
import Contact from './components/Contact/Contact'
import Plastic from './components/Materials/Plastic/Plastic'
import Paper from './components/Materials/Paper/Paper'
import Staklo from './components/Materials/Glass/Glass'
import AboutUs from './components/AboutUs/AboutUs'
import Location from './components/Location/Location'
import Footer from "./components/Footer/footer"
function App() {

  return (
    <div className="App">
      <Router>
     <Navbar/>
    <Route exact path="/"><BaseTemp content={<Home/>} sideContent={<SideHome/>}/></Route>
    <Route exact path="/plastika"><BaseTemp content={<Plastic/>} sideContent={<SideHome/>}/></Route>
    <Route exact path="/papir"><BaseTemp content={<Paper/>} sideContent={<SideHome/>}/></Route>
    <Route exact path="/staklo"><BaseTemp content={<Staklo/>} sideContent={<SideHome/>}/></Route>

    <Route exact path="/kontakt"><BaseTemp content={<Contact/>} sideContent={<SideHome/>}/></Route>
    <Route exact path="/o_nama"><BaseTemp content={<AboutUs/>} sideContent={<SideHome/>}/></Route>
    <Route exact path="/lokacija"><BaseTemp content={<Location
  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
  loadingElement={<div style={{ height: `10%` }} />}
  containerElement={<div className="google-map-container" />}
  mapElement={<div className="google-map" />}
/>
} sideContent={<SideHome/>}/></Route>

    
     <Footer/>
     </Router>
    </div>
    
  );
}
export default App;
