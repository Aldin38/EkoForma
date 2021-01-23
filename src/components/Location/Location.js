import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import React, {useState, useEffect} from 'react';
import './Location.css'


const Location =  withScriptjs(withGoogleMap(props =>{
 
    const changeCordsToBug = () => {
        setCords({
            lat: 44.070308,
            lng: 17.453151
          })         
    }
    const changeCordsToSar = () =>{
        setCords({
            lat: 43.848849, 
            lng: 18.332411
          })
    }

    const [cords, setCords] = useState({
        lat: 44.070308,
        lng: 17.453151
    });
return(
    <div className="google-map-wrapper">
    <GoogleMap 
        className="google-map-parent d-flex"
      defaultZoom={7.8}
      defaultCenter={{ lat: 44.070308,  lng: 18.023151}}
    >
      <Marker
        position={{  lat:cords.lat, lng:cords.lng }}
      />
    </GoogleMap>
    <div className="d-flex ml-3 flex-column eko-bug-addresa">
     <h2>EKO FORMA BUGOJNO</h2>
     <h5>Adresa: Gromile bb, 70230 Bugojno, Bosna i Hercegovina</h5>
     <button className="location-btn" onClick={changeCordsToBug}>Prikaži na mapi</button>
     <h2 className="mt-3">EKO FORMA SARAJEVO</h2>
     <h5>Adresa: SARAJEVO Halilovići bb (krug Feroelektra)</h5>
     <button  className="location-btn" onClick={changeCordsToSar}>Prikaži na mapi</button>
    </div>
 
    </div>
)}));


export default Location
