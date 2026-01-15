import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { continents } from '../mainBattaglie/datiBattaglie';


const Battaglie = () => {

  const [activeContinents, setActiveContinents] = useState([]);
  const [activePeriods, setActivePeriods] = useState([]);
  const [showBattles, setShowBattles ] = useState (false);
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const totalParagraphs = 3;
  
  useEffect(() => {
    if (currentParagraph < totalParagraphs) {
      const timeoutId = setTimeout(() => {
        setCurrentParagraph(prev => prev + 1);
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [currentParagraph]);
  
  const isParagraphVisible = (index) => {
    if (currentParagraph < totalParagraphs) {
      return index <= currentParagraph;
    } else {
      return true;
    }
  };

  const handelShowBattles = () => {

    setShowBattles(prev => !prev)
  }

  const handel = (item, string) => {

    switch(string){
      case 'continent':
        setActiveContinents(prev =>
          prev.includes(item)
            ? prev.filter(id => id !== item)
            : [...prev, item]
        );
      break;

      case 'period':
        setActivePeriods(prev =>
          prev.includes(item)
            ? prev.filter(id => id !== item)
            : [...prev, item]
        );
      break;
    }
  };
  
  return (
    <section id = "bigSectionBattaglie">
      <div id = 'titleBattaglie'>
          <h1>Battaglie</h1>
          <hr />
      </div>

      <section className = {showBattles ? 'd-none' : 'introMainBattaglie'}>
        <p className = {isParagraphVisible(0) ? 'firstP' : 'd-none'}>
          I vincitori scrivono la storia, ma avvolte basta cambiare il punto di vista,
          per poter vedere una vittoria o una sconfitta, che siano grandi o immense sono solo di facciata,
          spesso non si da peso che dietro ad una battaglia, non sempre per cambiarne il corso di essa
          e farla diventare vittoria o sconfitta, non sono sempre decisioni di grande spessore,
          ma ben si delle piccole azioni, che se ripetute possono fare la differenza totale,
          una differenza che non fa rumore, e spesso sottovalutata.
        </p>

        <div className = {isParagraphVisible(1) ? 'cssVideoMomentaneo' : 'd-none'}>
          video
        </div>

        <p className = {isParagraphVisible(3) ? 'secondP' : 'd-none'}>
          Sei pronto per vedere le battaglie che hanno segnato la storia non solo umana, 
          ma dei continenti stessi? sei pronto ad analizzarle e vedere oltre a cio' che c'e' scritto?
          <button className = 'buttonShowBattlesOn' onClick = {() => handelShowBattles()}>Scopri</button>
        </p>
      </section>

      <section className = {showBattles ? 'd-block' : 'd-none'}>
        {continents.map((continent) => {
          const continentActive = activeContinents.includes(continent.id)

          return(
              <div 
                key={continent.id}
                id={`continent-${continent.title.toLowerCase().replace(/\s+/g, '-')}`} 
                className = {showBattles ? 'articleBattles' : 'd-none'}
              >
              <h2 
                className="continentBlock"
                onClick={() => handel(continent.id, 'continent')}
              >
                {continent.title}
              </h2>
              <hr />
              
              {continentActive && (
                <>

                  {continent.millennia.map((mill, idx) => {
                    const periodKey = `${continent.id}-${idx}`;
                    const isActive = activePeriods.includes(periodKey);

                    return (
                      <section key={periodKey}>
                        <h3
                          className="millenniumBlock"
                          onClick={() => handel(periodKey, 'period')}
                        >
                          {mill.range}
                        </h3>

                        {isActive && (
                          <div className="d-flex justify-content-around">
                            {mill.battles.map((battle, i) => (
                              <article key={i} className="battleCard">
                                <h4>{battle.title}</h4>
                                <hr />
                                <p>{battle.text}</p>
                                <Link to={`/battaglie/${i}`} >
                                  <button className = 'buttonShowBattlesOn'>Scopri</button>
                                </Link>
                              </article>
                            ))}
                          </div>
                        )}
                      </section>
                      );
                    })}
                  </>
                )}
              </div>
          );
        })}
      </section>

        <div className = 'buttonShowBattlesOff'>
          <button className = {showBattles ? 'd-block' : 'd-none'} onClick = {() => handelShowBattles()}>Back</button>
        </div>
    </section>
  );
};

export default Battaglie;
