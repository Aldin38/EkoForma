import React from 'react'
import './basetemp.css'




import bimage1 from '../static/bimage1s.jpg';
import bimage2 from '../static/bimage2s.jpg';
import bimage3 from '../static/bimage3s.jpg';
import bimage4 from '../static/bimage4s.jpg';
import bimage5 from '../static/bimage5s.jpg';



 const BaseTemp = (props) => {

    return (
    <div>
        <div className="Hwrapper">
            <div className='content-img' >
                <img src={bimage1} alt="first slide image"/>
                <img src={bimage2} alt="second slide image"/>
                <img src={bimage3} alt="third slide image"/>
                <img src={bimage4} alt="forth slide image"/>
                <img src={bimage5} alt="first slide image"/>
            </div>
            <div className="Cname">
                <h1>EKO FORMA</h1>
            </div>


        </div>
        <div className="container">
            <div className="main-content">
                {props.content}
                </div>
            <div className="side-content">
            {props.sideContent}
            </div>
    
        </div>
        </div>

    )
}
export default BaseTemp;