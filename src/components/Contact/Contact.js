import React from 'react';
import "./Contact.css";
import {Phone ,EnvelopeOpen
} from "react-bootstrap-icons"
import facebook from "../../static/facebook.png"
import instagram from "../../static/instagram.png"
export default function Contact() {
    return (
        <div>
            <div>
                <h1 className="m-5 ">KONTAKT</h1>
                <div className="ml-5 mt-5 contact-wrapper">
                    <div className='d-flex'>
                    <Phone className="d-flex mt-2" size={40}/>
                    <ul className="d-flex flex-column pl-3">
                    <li className="d-flex  font-weight-bolder font-size-20">Direktor Babić Safet:  <strong class="ml-2">063-723-260</strong></li>
                    <li className="d-flex  font-weight-bolder font-size-20">Tel-fax centrala: <strong class="ml-2"> +387(0)30 263 353</strong></li>
                    <li className="d-flex  font-weight-bolder font-size-20">Kupovina/Prodaja Babić Šida:  <strong class="ml-2">063-723-275</strong></li>
                    <li className="d-flex  font-weight-bolder font-size-20">Knjigovodstvo:  <strong class="ml-2">030/263-353 063-723-188</strong></li>
                    <li className="d-flex  font-weight-bolder font-size-20">Transport Babić Safet:<strong class="ml-2">063-723-260</strong></li>


                    </ul>
                    </div>
                    <div className='d-flex'>
                    <EnvelopeOpen className="d-flex mt-2" size={40}/>
                    <ul className="d-flex flex-column pl-3">
                    <li className="d-flex  font-weight-bolder">mob. komercijala: <strong class="ml-2">+387(0) 63 723 275 +387(0)63 723 260</strong></li>
                    <li className="d-flex  font-weight-bolder">E-mail: <strong class="ml-2">safet_babic@yahoo.com</strong></li>
                    </ul>
                    </div>
                    <div>
                        <img className="fb-img" src={facebook}/>
                        <a className="pl-3 font-weight-bolder" style={{color: "black"}} href="https://www.facebook.com/Eko-forma-108491847521969/">Facebook:<br/> https://www.facebook.com/Eko-forma-108491847521969/</a>
                    </div>
                    <div className="mt-3">
                        <img className="ig-img " src={instagram}/>
                        <a className="pl-3 mt-5 font-weight-bolder" style={{color: "black"}} href="https://www.instagram.com/ekoforma.doo/">Instagram:<br/> https://www.instagram.com/ekoforma.doo/</a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
