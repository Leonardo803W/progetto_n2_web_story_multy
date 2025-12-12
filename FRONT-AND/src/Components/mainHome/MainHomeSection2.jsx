import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

/*card e import da sostituire con fetch in un secondo momneto*/
import imgB2 from '../../img/img (caroselli home)/battaglie/Battaglia di Waterloo.jpg'

const cards = [
    { id: 1, 
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fit.wikipedia.org%2Fwiki%2FBattaglia_di_Hastings&psig=AOvVaw06Am8u7UoZrBo1nXXDeqNt&ust=1758482329107000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCJiThOaG6I8DFQAAAAAdAAAAABAK',
        title: 'Battaglia di Hastings', 
        content: "La conquista normanna dell'Inghilterra nel 1066." 
      },
    { id: 2, 
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fit.m.wikipedia.org%2Fwiki%2FFile%3ABattle_of_Waterloo_1815.PNG&psig=AOvVaw2IL4PwvNW0hJRhPjrgtjZ5&ust=1758482361921000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCPieovOG6I8DFQAAAAAdAAAAABAJ',
        title: 'Battaglia di Waterloo', 
        content: 'La sconfitta di Napoleone nel 1815.'
      },
    { id: 3, 
        img: 'https://www.google.com/imgres?q=La%20Battaglia%20di%20Stalingrado&imgurl=https%3A%2F%2Fwww.raicultura.it%2Fdl%2Fimg%2F2021%2F07%2F16%2F1626430871601_154652560392637161_ok.jpg&imgrefurl=https%3A%2F%2Fwww.raicultura.it%2Fstoria%2Farticoli%2F2019%2F01%2FLa-battaglia-di-Stalingrado-9f278b0e-eaad-4d36-b15b-980fbd5f1be2.html&docid=48kh-nXQ1cRjJM&tbnid=RXbhq4lvknC-wM&vet=12ahUKEwimtLG_h-iPAxUohv0HHdjSJNcQM3oECB8QAA..i&w=1920&h=1080&hcb=2&ved=2ahUKEwimtLG_h-iPAxUohv0HHdjSJNcQM3oECB8QAA',
        title: 'La Battaglia di Stalingrado', 
        content: 'Un punto di svolta nella Seconda Guerra Mondiale.'
      },
    { id: 4, 
        img: 'https://www.google.com/imgres?q=Battaglia%20di%20Midway&imgurl=https%3A%2F%2Fwww.italianshiplover.it%2Fwp-content%2Fuploads%2F2020%2F06%2FFig.-1-Midway-1038x584.jpg&imgrefurl=https%3A%2F%2Fwww.italianshiplover.it%2Fstoria%2Fla-battaglia-di-midway%2F&docid=j0FWWN9hCkgNMM&tbnid=6UCCE-Hswn1JwM&vet=12ahUKEwiD65DHh-iPAxW6nf0HHS-gD5YQM3oECCEQAA..i&w=1038&h=584&hcb=2&ved=2ahUKEwiD65DHh-iPAxW6nf0HHS-gD5YQM3oECCEQAA',
        title: 'Battaglia di Midway', 
        content: 'Decisiva battaglia nel Pacifico durante la Seconda Guerra Mondiale.'
      },
    { id: 5, 
        img: 'https://www.google.com/imgres?q=Battaglia%20di%20Lepanto&imgurl=https%3A%2F%2Fwww.storicang.it%2Fmedio%2F2021%2F10%2F04%2Fil-dipinto-del-xvi-secolo-raffigura-lo-scontro-tra-galere-cristiane-e-ottomane-a-lepanto-national-maritime-museum-greenwich-londra_4c408164_1200x630.jpg&imgrefurl=https%3A%2F%2Fwww.storicang.it%2Fa%2F7-ottobre-1571-battaglia-di-lepanto_15348&docid=Cktef0reaIl3YM&tbnid=o0QfUbK2bp5hPM&vet=12ahUKEwjli_HNh-iPAxUQ8LsIHQIOC-EQM3oECB0QAA..i&w=1200&h=630&hcb=2&ved=2ahUKEwjli_HNh-iPAxUQ8LsIHQIOC-EQM3oECB0QAA',
        title: 'Battaglia di Lepanto', 
        content: "Importante vittoria contro l'Impero Ottomano nel 1571."
    },
];

const MainHomeSection2 = () => {

    //variabile per le animazioni dei caroselli
    const [animateDiv, setAnimateDiv] = useState(true);
    const [animateCarosell, setAnimateCarosell] = useState(false);

    //variabili per l'index dei caroselli
    const [activeIndex, setActiveIndex] = useState (0)
    const [activeIndexTablet, setActiveIndexTablet] = useState (0)
    const totalCards = cards.length;
    
    const handleGiraPagina = () => {
        setAnimateDiv(prev => !prev);
        setAnimateCarosell(prev => !prev);
    };

    //funzione per avere la card attiva sempre al centro per dispositivi da tablet in su
    const getVisibleCardsForTablet = () => { 
        const indices = []; 
        const start = Math.max(0, activeIndexTablet - 1); 
        const end = Math.min(totalCards - 1, activeIndexTablet + 1); 
        
        for (let i = start; i <= end; i++) 
        { 
            indices.push(i); 
        } 
        return indices; 
    }; 
    const visibleIndicesTablet = getVisibleCardsForTablet();

    //funzione per fermare il carosello o all'inizio o alla fine
    const goToNextOrPrev = (next) => {

        if(next === 'next')
        {
        setActiveIndex(prev => Math.min(prev + 1, totalCards - 1));
        setActiveIndexTablet(prev => Math.min(prev + 1, totalCards - 1));
        }
        else
        {
        setActiveIndex(prev => Math.max(prev - 1, 0));
        setActiveIndexTablet(prev => Math.max(prev - 1, 0));
        }
    };

    return(
        <>
            <section id = "section2">
                <section id = 'groupSection2'>
                    <div className={animateDiv ? "divVisible" : "d-none"}>

                        <p id = "introGroupSection2">
                        La storia dell'uomo è stata impregnata di battaglie ⚔️, spesso anche piccole battaglie possono decidere il destino di un paese. 
                        Ma certe battaglie hanno influenzato profondamente la storia che conosciamo 📜. 
                        Alcune erano prevedibili nella loro direzione, mentre altre non si poteva mai immaginare come sarebbe andata, rendendo difficile anche solo immaginare come sarebbe stata diversa la storia 🌟. 

                        <button className = "allButton">Vuoi scoprire quali di queste battaglie hanno avuto un impatto così grande sulla storia dell'uomo?</button>

                        </p>

                        <button id = "giraPagina" onClick = {() => handleGiraPagina(1)}>Pagina successiva</button>
                    </div>

                    <section className = {animateCarosell ? "carousellVisibleTelefono" : "d-none"}>
                            <div className = "carouselWrapperTelefono">

                            <button className = "allArrow" onClick = {() => goToNextOrPrev()}>&lt;</button>

                            <article className = "allBox">
                                <img src = {imgB2} alt = "copertina" id = "boxTelefonoImg1"/>
                                <div className = "allCardWrapper">

                                {cards.map((card, index) => (
                                    <div
                                    key={card.id}
                                    className={`cardCaroselloTelefono ${index === activeIndex ? 'activeCardCarousellTelefono' : 'd-none'} `}
                                    >
                                    <h3 className = "allTitleSection2">{card.title}</h3>
                                    <p className = "allParagrafoSection2">{card.content}</p>

                                        <Link className = "text-decoration-none">
                                            <p className="allButton"> scopri </p>
                                        </Link>
                                    </div>
                                ))}
                                </div>
                            </article>

                            <button className = "allArrow" onClick = {() => goToNextOrPrev('next')}>&gt;</button>
                            </div>

                        <button id = "giraPagina" onClick = {() => handleGiraPagina(1)}>Pagina precedente</button>
                    </section>

                    <section className={animateCarosell ? "carousellVisibleTablet" : "d-none"}>
                        <div className="carousel-wrapperTablet">
                            <button className="allArrow" onClick={() => goToNextOrPrev()}>&lt;</button>
                                
                            <img src = {imgB2} alt = "copertina" className = "coverTabletBattle"/>

                            <article className="allBox">
                                <div className="cardRowTablet">
                                    {visibleIndicesTablet.map((idx) => {
                                    const card = cards[idx];
                                    return (
                                        <div
                                        key={card.id}
                                        className={`cardCaroselloTablet ${
                                            idx === activeIndexTablet ? 'activeCardCarosellSection2Tablet' : 'hiddenCardCarosellTablet'
                                        }`}
                                        >
                                        
                                        <div className = "m-3">
                                        <h3 className = "allTitleSection2">{card.title}</h3>
                                        <p className = "allParagrafoSection2">{card.content}</p>
                                            <Link to="#">
                                            <p className="allButton"> scopri </p>
                                            </Link>
                                        </div>
                                        </div>
                                    );
                                    })}
                                </div>
                            </article>

                            <button className="allArrow" onClick={() => goToNextOrPrev('next')}>&gt;</button>
                        </div>

                        <button id="giraPagina" onClick={() => handleGiraPagina(1)}>Pagina precedente</button>
                    </section>

                    <section className={animateCarosell ? "carousellVisibleLaptop" : "d-none"}>
                        <div className="carouselWrapperTablet">
                            <button className="arrowLaptop" onClick={() => goToNextOrPrev()}>&lt;</button>
                                
                            <article className="box">
                                <div className="cardRowTablet">
                                    {cards.map((card, index) => (
                                        <div
                                        key={card.id}
                                        className={`cardCaroselloLaptop ${index === activeIndex ? 'activeCardCarousellSection2Laptop' : ''} `}
                                        >
                                            
                                            <h3 className = "laptopTitleSection2">{card.title}</h3>
                                            <p className = "laptopParagrafoSection2">{card.content}</p>

                                            <Link>
                                                <p className="allButton"> scopri </p>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </article>

                            <button className="arrowLaptop" onClick={() => goToNextOrPrev('next')}>&gt;</button>
                        </div>

                        <button id="giraPagina" onClick={() => handleGiraPagina(1)}>Pagina precedente</button>
                    </section>

                </section>
            </section>
        </>
    )
}

export default MainHomeSection2;