import React, {useState} from 'react'
import { ChevronRight} from 'react-bootstrap-icons';
import {Link}  from 'react-router-dom';

import "./Home.css"

export default function Home() {

    const [readMore, setReadMore] = useState(false);

    
   const showReadMore = () =>{
       setReadMore(!readMore)
    
    }

    let readMoreClasses = "read-more-btn";
    let readMoreIcon = {
        transform: "",
        transition: "ease-out 0.2s"
    }
    let showMoreContent = {
        display: "none",
    }
    if(readMore){
         readMoreIcon = {
         transform: "rotate(90deg)",
         transition: "ease-in 0.2s"
        }
        showMoreContent = {
            display: "block",
        }
    }
    console.log(readMore)
    return ( 
        <div>
            <h1 className="ml-4 mt-2 font-weight-light">MATERIJALI</h1>
            <div className="d-flex mt-3">
          
                <ul className="mat-list-right"> 
                    <Link to="/plastika"><li className="right-items"><span>Plastika</span></li></Link>
                    <Link to="/papir"><li className="right-items"><span>Papir</span></li></Link>
                    <Link to="/staklo"><li className="right-items"><span>Staklo</span></li></Link>
                </ul>
                <hr />
               
            </div>
            <h1 className="ml-3 mr-3">EKO FORMA BUGOJNO</h1>
            <div className="ml-3 mr-3 main-home-headers ">
                <h4>PRIKUPLJANJE, OTKUP I PRIMARNA OBRADA NEMETALNIH SEKUNDARNIH SIROVINA</h4>
                <h4>Djelatnost: Reciklaža posebno izdvojene materijala</h4>
                <p>preduzeće osnovano 2010. Godine. Svjesni smo da živimo u
                     društvu koje je definisano ogromnom produkcijom proizvoda
                      koji se prodaju u različitim vrstama ambalaže, a koja u 
                      velikoj mjeri opterećuje okoliš. Upravljanje otpadom, a 
                      tako i onim ambalažnim treba da bude prioritetno pitanje 
                      svake zajednice. Ono na što je fokusirana naša firma jeste 
                      upravo smanjenje štetnosti za okoliš  sakupljanjem i obrađivanjem 
                      ambalažnog otpada.</p>
            </div>
            <div className="read-more-container">

            <button onClick={showReadMore} className={readMoreClasses}>
                <span className="mr-2"><ChevronRight color="black" size={30} className="mb-1" style={readMoreIcon}  />
</span>PROČITAJ VIŠE</button>
            </div>
            <div style={showMoreContent} className="ml-3 mr-3 home-text">
            <p>Preduzeće  zbrine više od 8000 t ambalažnog otpada godišnje.
                 Naša sakupljačka mreža djeluje na području cijele Bosne i Hercegovine. 
                 Za građane smo obezbjedili otkupne stanice na podrčju Bugojna i Sarajeva
                  gdje mogu dostaviti sve vrste ambalažnog otpada koji proizvedu u svojim 
                  domovima.</p>

            <p>Preduzeće zapošljava 15 radnika. Ono što nam daje snagu i motivaciju 
                jeste što posao kojim se bavimo obezbjeđuje egzistenciju za naše uposlenike,
                za mnoge ljude kojima je to jedini izvor prihoda.
            </p>

            <p>Preduzeće posjeduje opremu za zbrinjavanje, pakovanje, šrediranje ambalažnog otpada.
            </p>
            <p>Ambalažni otpad koji zbrinemo plasiramo na domaće tržište i zemlje regiona.</p>
            <p>Vizija i ostvareni rezultati koji su dio i same vizije su motivacija za dalje i uspješnije poslovanje.
</p>
<p>Naš tim je za poslovnu saradnju koja proizvodi korist za sve učesnike. Nastupamo slobodno i iskreno i sve to doprinosi pozitivne rezultate.  </p>
          <p>Radimo posao koji je društveno korisnog karaktera ali to nosimo isključivo sami. Bilo je izazova i iskušenja nikad nismo odustajali.
</p>
         <p>
Želja za radom, želja da više ljudi ima koristi od onoga što radite,  prevazilazi materijalne stvari,  dolazite u stanje iz kojeg ne možete izaći, a i ne želite. Želite da se borite i radite u korist svih građana države u kojoj živite.
</p>
<p>EKO-FORMA d.o.o. Bugojno stoji na raspolaganju svim građanima, partnerima, poslovnim saradnicima sa ciljem da zajedno napravimo bolje i uspješnije uslove našeg djelovanja!</p>
            </div>
        </div>
    )
}
