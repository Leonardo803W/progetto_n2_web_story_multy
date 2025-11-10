import React, { useState } from 'react';

const MainHomeSection3 = () => {
  const [animationArticole1, setAnimationArticole1] = useState(false);
  const [animationArticole2, setAnimationArticole2] = useState(false);
  const [animationArticole3, setAnimationArticole3] = useState(false);
  const [isAnyActive, setIsAnyActive] = useState (false);

  const handleClickArticole = (n) => {

    if(n === 1)
    {
        setAnimationArticole1(true)
        setAnimationArticole2(false)
        setAnimationArticole3(false)
        setIsAnyActive(true)
    }
    else if(n === 2)
    {
        setAnimationArticole1(false)
        setAnimationArticole2(true)
        setAnimationArticole3(false)
        setIsAnyActive(true)
    }
    else if(n === 3)
    {
        setAnimationArticole1(false)
        setAnimationArticole2(false)
        setAnimationArticole3(true)
        setIsAnyActive(true)
    }
    else if(n === 4)
    {
        setAnimationArticole1(false)
        setAnimationArticole2(false)
        setAnimationArticole3(false)
        setIsAnyActive(false)
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

        <section id = {isAnyActive ? 'multi-sezione-active' : 'multi-sezione'}>
          <div className = {animationArticole1 ? 'articolo-active' : 'articolo'} id = "articolo1">
            <div className = {animationArticole1 ? 'articolo-intro-active' : 'articolo-intro'}>
                <h5 className = {animationArticole1 ? 'articolo-title-active' : 'articolo-title'}>Invenzioni</h5>
                <button onClick={() => handleClickArticole(1)} className = {animationArticole1 ? 'd-none' : 'articolo-button'}>Dettagli</button>
            </div>
            <p className = {animationArticole1 ? 'articolo-contenuto-active' : 'articolo-contenuto'}>Le invenzioni sono il fulcro del progresso, vuoi sapere quali invenzioni sono state fatte?</p>
            <div className = {animationArticole1 ? 'articolo-group-button-active' : 'd-none'}>
                <button onClick={() => handleClickArticole(4)} className = {animationArticole1 ? 'singole-button' : 'd-none'}>indietro</button>
                <button className = {animationArticole1 ? 'singole-button' : 'd-none'}>Scopri</button>
            </div>          
          </div>

          <div className = {animationArticole2 ? 'articolo-active' : 'articolo'} id = "articolo2">
            <div className = {animationArticole2 ? 'articolo-intro-active' : 'articolo-intro'}>
                <h5 className = {animationArticole2 ? 'articolo-title-active' : 'articolo-title'}>Continenti</h5>
                <button onClick={() => handleClickArticole(2)} className = {animationArticole2 ? 'd-none' : 'articolo-button'}>Dettagli</button>
            </div>
            <p className = {animationArticole2 ? 'articolo-contenuto-active' : 'articolo-contenuto'}>I continenti non sono altro che le piu grandi montagne vivibili della terra, ma ogni continente ha la sua di storia!</p>
            <div className = {animationArticole2 ? 'articolo-group-button-active' : 'd-none'}>
                <button onClick={() => handleClickArticole(4)} className = {animationArticole2 ? 'singole-button' : 'd-none'}>indietro</button>
                <button className = {animationArticole2 ? 'singole-button' : 'd-none'}>Scopri</button>
            </div>          
          </div>

          <div className = {animationArticole3 ? 'articolo-active' : 'articolo'} id = "articolo3">
            <div className = {animationArticole3 ? 'articolo-intro-active' : 'articolo-intro'}>
                <h5 className = {animationArticole3 ? 'articolo-title-active' : 'articolo-title'}>Epoche</h5>
                <button onClick={() => handleClickArticole(3)} className = {animationArticole3 ? 'd-none' : 'articolo-button'}>Dettagli</button>
            </div>
            <p className = {animationArticole3 ? 'articolo-contenuto-active' : 'articolo-contenuto'}>Fin dagli inzi l'uomo credeva sempre di essere nell'epoca moderna qualunque essa fosse, e adesso che epoca vivi?</p>
            <div className = {animationArticole3 ? 'articolo-group-button-active' : 'd-none'}>
                <button onClick={() => handleClickArticole(4)} className = {animationArticole3 ? 'singole-button' : 'd-none'}>indietro</button>
                <button className = {animationArticole3 ? 'singole-button' : 'd-none'}>Scopri</button>
                <button onClick={() => handleClickArticole(3)} className = {animationArticole3 ? 'd-none' : 'articolo-button'}>Dettagli</button>
            </div>          
          </div>
        </section>
      </article>
    </>
  );
}

export default MainHomeSection3;