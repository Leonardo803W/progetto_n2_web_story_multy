import React, { useState } from 'react';

const cards = [
  { id: 1,
      title: 'Invenzioni',
      content: 'Le invenzioni sono il fulcro del progresso, vuoi sapere quali invenzioni sono state fatte?'
  },
  { id: 2,
      title: 'Continenti',
      content: 'I continenti non sono altro che le piu grandi montagne vivibili della terra, ma ogni continente ha la sua di storia!'
  },
  { id: 3,
      title: 'Epoche',
      content: "Fin dagli inzi l'uomo credeva sempre di essere nell'epoca moderna qualunque essa fosse, e adesso che epoca vivi?"
  }
]

const MainHomeSection3 = () => {

  const [activeArticolo, setActiveArticolo] = useState(null);
  const [isAnyActive, setIsAnyActive] = useState(false);

  const handleClickArticole = (id) => {
    if (id === 4) {
      setActiveArticolo(null);
      setIsAnyActive(false);
    } else {
      setActiveArticolo(id);
      setIsAnyActive(true);
    }
  };

  return (
    <>
      <article id = "Main-home-section3">
        <div className = {isAnyActive ? 'd-none' : 'div-main-home-section3'}>
          <div id = 'div-main-home-section3-intro'>
            <h4>La storia umana puo essere molto di piu di quello che sembra!</h4>
            <p>
              Di storie ce ne sono di diverse salse, tra cui Invenzioni, Continenti, Cultura e molto altro,
              nel mondo ci sono milliardi di umani, ma di storie c'e' ne sono molte di piu,
              vuoi scoprire quale altre storie e versioni ci sono?
            </p>
          </div>
        </div>

        <section id={isAnyActive ? 'multi-sezione-active' : 'multi-sezione'}>
          {cards.map((articolo) => {
            const isActive = activeArticolo === articolo.id;
            return (
              <div key={articolo.id} className={isActive ? 'articolo-active' : 'articolo'} id={`articolo${articolo.id}`}>
                <div className={isActive ? 'articolo-intro-active' : 'articolo-intro'}>
                  <h5 className={isActive ? 'articolo-title-active' : 'articolo-title'}>{articolo.title}</h5>
                  <button
                    onClick={() => handleClickArticole(articolo.id)}
                    className={isActive ? 'd-none' : 'articolo-button'}
                  >
                    Dettagli
                  </button>
                </div>

                <p className={isActive ? 'articolo-contenuto-active' : 'articolo-contenuto'}>
                  {articolo.content}
                </p>

                <div className={isActive ? 'articolo-group-button-active' : 'd-none'}>
                  <button onClick={() => handleClickArticole(4)} className={isActive ? 'singole-button' : 'd-none'}>
                    indietro
                  </button>
                  <button className={isActive ? 'singole-button' : 'd-none'}>Scopri</button>
                </div>
              </div>
            );
          })}
        </section>
      </article>
    </>
  );
}

export default MainHomeSection3;