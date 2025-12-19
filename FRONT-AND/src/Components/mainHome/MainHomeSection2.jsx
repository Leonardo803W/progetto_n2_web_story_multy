import { useState } from "react";
import { Link } from "react-router-dom";

/* card e import da sostituire con fetch in un secondo momento */
import imgB2 from '../../img/img (caroselli home)/battaglie/Battaglia di Waterloo.jpg';

const cards = [
  {
    id: 1,
    title: 'Battaglia di Waterloo (1815)',
    intro: 'Lo scontro decisivo che segnò la fine dell’era napoleonica in Europa.'
  },
  {
    id: 2,
    title: 'Battaglia di Canne (216 a.C.)',
    intro: 'Una delle più grandi vittorie tattiche di Annibale contro l’esercito romano.'
  },
  {
    id: 3,
    title: 'Battaglia di Stalingrado (1942-1943)',
    intro: 'Un punto di svolta cruciale della Seconda guerra mondiale sul fronte orientale.'
  },
  {
    id: 4,
    title: 'Battaglia di Hastings (1066)',
    intro: 'Lo scontro che portò alla conquista normanna dell’Inghilterra.'
  },
  {
    id: 5,
    title: 'Battaglia di Lepanto (1571)',
    intro: 'La grande battaglia navale che fermò l’espansione ottomana nel Mediterraneo.'
  }
];

const MainHomeSection2 = () => {

  // variabili per le animazioni
  const [animateDiv, setAnimateDiv] = useState(true);
  const [animateCarosell, setAnimateCarosell] = useState(false);

  // indici carosello
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndexTablet, setActiveIndexTablet] = useState(0);
  const totalCards = cards.length;

  const handleGiraPagina = () => {
    setAnimateDiv(prev => !prev);
    setAnimateCarosell(prev => !prev);
  };

  const goToNextOrPrev = (direction) => {
    if (direction === 'next') {
      setActiveIndex(prev => Math.min(prev + 1, totalCards - 1));
      setActiveIndexTablet(prev => Math.min(prev + 1, totalCards - 1));
    } else {
      setActiveIndex(prev => Math.max(prev - 1, 0));
      setActiveIndexTablet(prev => Math.max(prev - 1, 0));
    }
  };

  // indici visibili per tablet
  const visibleIndicesTablet = () => {
    const indices = [];
    const start = Math.max(0, activeIndexTablet - 1);
    const end = Math.min(totalCards - 1, activeIndexTablet + 1);

    for (let i = start; i <= end; i++) indices.push(i);
    return indices;
  };

  return (
    <>
      <section id="section2">
        <section id="groupSection2">

          {/* Pagina introduttiva */}
          <div className={animateDiv ? "divVisible" : "d-none"}>
            <p id="introGroupSection2">
              La storia dell'uomo è stata impregnata di battaglie ⚔️, alcune decisero
              il destino di interi paesi. Certe erano prevedibili, altre imprevedibili,
              rendendo difficile immaginare come sarebbe stata la storia 🌟.
            </p>
            <button className="allButton" onClick={handleGiraPagina}>
              Vuoi scoprire quali di queste battaglie hanno avuto un impatto così grande?
            </button>
          </div>

          {/* Carosello mobile */}
          <section className={animateCarosell ? "carousellVisibleTelefono" : "d-none"}>
            <div className="carouselWrapperTelefono">
              <button className="allArrow" onClick={() => goToNextOrPrev('prev')}>&lt;</button>

              <article className="allBox">
                <img src={imgB2} alt="copertina" id="boxTelefonoImg1" />
                <div className="allCardWrapper">
                  {cards.map((card, index) => (
                    <div
                      key={card.id}
                      className={`cardCaroselloTelefono ${
                        index === activeIndex ? 'activeCardCarousellTelefono' : 'd-none'
                      }`}
                    >
                      <h3 className="allTitleSection2">{card.title}</h3>
                      <p className="allParagrafoSection2">{card.intro}</p>
                      <Link to="/Battaglie">
                        <p className="allButton">scopri</p>
                      </Link>
                    </div>
                  ))}
                </div>
              </article>

              <button className="allArrow" onClick={() => goToNextOrPrev('next')}>&gt;</button>
            </div>
          </section>

          {/* Carosello tablet */}
          <section className={animateCarosell ? "carousellVisibleTablet" : "d-none"}>
            <div className="carousel-wrapperTablet">
              <button className="allArrow" onClick={() => goToNextOrPrev('prev')}>&lt;</button>
              <img src={imgB2} alt="copertina" className="coverTabletBattle" />

              <article className="allBox">
                <div className="cardRowTablet">
                  {visibleIndicesTablet().map(idx => {
                    const card = cards[idx];
                    return (
                      <div
                        key={card.id}
                        className={`cardCaroselloTablet ${
                          idx === activeIndexTablet
                            ? 'activeCardCarosellSection2Tablet'
                            : 'hiddenCardCarosellTablet'
                        }`}
                      >
                        <div className="m-3">
                          <h3 className="allTitleSection2">{card.title}</h3>
                          <p className="allParagrafoSection2">{card.intro}</p>
                          <Link to="/Battaglie">
                            <p className="allButton">scopri</p>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </article>

              <button className="allArrow" onClick={() => goToNextOrPrev('next')}>&gt;</button>
            </div>
          </section>

          {/* Carosello laptop */}
          <section className={animateCarosell ? "carousellVisibleLaptop" : "d-none"}>
            <div className="carouselWrapperTablet">
              <button className="arrowLaptop" onClick={() => goToNextOrPrev('prev')}>&lt;</button>

              <article className="box">
                <div className="cardRowTablet">
                  {cards.map((card, index) => (
                    <div
                      key={card.id}
                      className={`cardCaroselloLaptop ${
                        index === activeIndex ? 'activeCardCarosellSection2Laptop' : ''
                      }`}
                    >
                      <h3 className="allTitleSection2">{card.title}</h3>
                      <p className="allParagrafoSection2">{card.intro}</p>
                      <Link to="/Battaglie">
                        <p className="allButton">scopri</p>
                      </Link>
                    </div>
                  ))}
                </div>
              </article>

              <button className="arrowLaptop" onClick={() => goToNextOrPrev('next')}>&gt;</button>
            </div>
          </section>

        </section>
      </section>
    </>
  );
};

export default MainHomeSection2;
