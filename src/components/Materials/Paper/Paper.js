import React from 'react'
import './Paper.css'
import PaperHeader from '../../../static/PaperHeader.jpg'

export default function Paper() {
    return (
        <div className="m-3">
            <h3 className="mt-4">OTVORITE NOVO POGLAVLJE I ZAPOČNITE RECIKLIRANJE PAPIRA</h3>

            <img className="paper-img" src={PaperHeader} />

            <h4>Papir spada u sirovine koje su savršeno pogodne za reciklažu - postoji više proizvoda koji se proizvode od otpadnog papira.</h4>
            <p>Otpadni papir čini 70% najvažnijih materijala za proizvodnju novog papira. Svakodnevno koristimo značajne količine otpadnog papira 
                koji kao sekundarni materijal za papirnu industriju može u velikoj mjeri doprinijeti zaštiti prirodnih sirovina.</p>

            <h5>Sakupljanje otpadnog papira obavezno je za mnoga preduzeća i domaćinstva - novi proizvodi se proizvode od ove sirovine kao rezultat recikliranja.</h5>

<p>Reciklaža papira i sakupljanje starog papira nemaju dugu istoriju. Prve akcije u okviru sakupljanja i recikliranja otpadnog papira započele su u Bosni i Hercegovini početkom 80-ih. 
    Suprotno upotrebi papira - jednostavnom upotrebom ove vrijedne sirovine, recikliranje papira rezultira proizvodnjom proizvoda poput novina i kartona.</p>
    
    <h5>Trgovina otpadnim papirom i reciklažom papira trenutno se duboko reorganizira.

</h5>

<p>U direktnoj usporedbi s recikliranjem papira i upotrebom papira ili otpadnog papira, 
    trenutno možemo primijetiti povoljnije vrste aktivnosti i planiramo provesti sljedeću procjenu trgovine
     otpadnim papirom u 2016. godini. Možemo vam ponuditi razne usluge kao što su recikliranje i upotreba papira,
      potencijalno u slučaju sljedećih vrsta papira:</p>

     <ul className="paper-list">
         <li>- Karton i otpadni papir (svih vrsta)</li>
         <li>- mixani papir</li>
        <li>- Novine</li>
        <li>- W52 - otpadna valovita ploča</li>
        <li>- Proizvodi prikupljeni od domaćinstava</li>
        <li>- Multi-print </li>
        <li>- Korištene etikete iz industrije pića</li>
        <li>- Slojeviti papir (tetrapak, snopovi itd.)</li>

     </ul>
     <h5>Čitav svijet upotrebe i obrade sekundarnih materijala pod jednim krovom - Eko Forma, vaše preduzeće za upotrebu u Evropi.</h5>
         <p>Eko Forma ne pruža podršku samo u korištenju papira i njegovoj reciklaži - sa zadovoljstvom ćemo vam pomoći i u vezi s korištenjem određenih sekundarnih materijala kao što su građevinski otpad, aluminijski čips ili rasuti otpad. Molimo kontaktirajte naš tim izravno - drago nam je što vam možemo savjetovati.</p>
        </div>
    )
}
