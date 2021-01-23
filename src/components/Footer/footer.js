import React from 'react'
import './footer.css'
import Ffb from '../../static/Ffb.png'
import Fig from '../../static/Fig.png'

export default function footer() {
    return (
        <div>
            <div className="footer">
                <div className="d-flex ml-5 mt-5 h-100 mr-5 flex-column">


                <div className="flex-row right-footer-links d-flex flex-column  align-items-center">
                <h2>Ostali Linkovi</h2>
                <div className="d-flex flex-row">
                    <a href="https://www.facebook.com/Eko-forma-108491847521969/"><img className="ffb" src={Ffb}/></a>
                    <a href="https://www.instagram.com/ekoforma.doo/"><img className="fig" src={Fig}/></a>
                </div>
                    <p>&copy; 2020 Eko Forma d.o.o Bugojno</p>
                </div>

              

                </div>
            </div>
            
        </div>
    )
}
