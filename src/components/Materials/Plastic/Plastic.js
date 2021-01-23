import React from 'react'
import './Plastic.css'
import PlasticHeader from "../../../static/plasticHeader.jpg"

export default function Plastic() {
    return (
        <div className="m-3">
            <h3>PLASTIKA - UPOTREBA I OBRADA RAZNIH PLASTIČNIH MASA.</h3>
            <img className="plastic-img" src={PlasticHeader} />
            <h5>Eko Forma je svoje poslovanje pravilno prilagodila razvoju evropskih rješenja za preradu plastike.</h5>

            <p>Safet Babic se etablirao kao priznati, visoko specijalizirani pružatelj usluga u okviru upotrebe plastike i njene prerade
                 u Bosni i Hercegovini. Naše iskustvo u trgovini sirovinama omogućava nam da vam ponudimo pojedinačna rešenja u okviru
                  prerade i upotrebe plastike kao što su polipropilen, polietilen, HDPE, mešana plastika i drugo.</p>

            <h5>Specijalista za područje prerade i upotrebe poljoprivrednih folija kao što su staklenička folija, folija od šparoga,
                 tunelska folija, jagoda i prirodna folija.</h5>

          <p>Na polju prerade / recikliranja / ponovne granulacije poljoprivrednih folija jedan smo od lidera u srednjoj Evropi. 
              Različite kvalitete folije s različitim nivoima onečišćenja zahtijevaju specijalizirane tehnologije za postizanje optimalne obrade.
               Trenutno surađujemo sa sedam poznatih europskih preduzeća za reciklažu što nam omogućava da vam ponudimo najbolje uvjete u okviru poljoprivrednih 
               folija poput silos folije, PR netkanog materijala kao i svih tunelskih folija.</p>

            <h5>Najbolje reference u području upotrebe, reciklaže i obrade plastike.</h5>
            <p>uveli smo uslugu sakupljanja folije za silos širom zemlje. Članovi Maschinenring grupe prihvatili su ovaj jedinstveni, efikasan i isplativ sistem sakupljanja plastike i poljoprivredne folije.</p>
            <p>Bilo da se radi o sortiranim ili mješovitim teretima od plastike - naš portfolio usluga u trgovini plastikom je širok:

</p> 
<h5>Plastika:</h5>
<ul className="plastics-list">
    <li>- Otpadna folia PE</li>
    <li>- Otpadna Plastika PP</li>
    <li>- Otpadna Plastika PE</li>


</ul>
<h5>Od recikliranja PVC-a do reciklaže PET boca - PAV se bavi profesionalnom upotrebom i preradom vaše plastike.</h5>
<p>Polipropilen i polietilen, kao i druga plastika mogu se lako obraditi i često se traže kao sekundarni materijali. 
    Bit će nam drago da se bavimo prijevozom i obradom za vas. Naš tim će vas sa zadovoljstvom provesti kroz sve moguće
     opcije za vaš plastični otpad. Kontaktirajte nas putem interneta - biće nam zadovoljstvo da vas posavetujemo!</p>

        </div>
    )
}
