import { useState } from 'react';
import { continents } from '../mainBattaglie/datiBattaglie';

const Battaglie = () => {

  const [activeContinents, setActiveContinents] = useState([]);
  const [activePeriods, setActivePeriods] = useState([]);

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
        <div id = 'introBattaglie'>
            <h1>Battaglie</h1>
            <hr />
        </div>

      {continents.map((continent) => {
        const continentActive = activeContinents.includes(continent.id)

        return(
          <div 
            key={continent.id}
            id={`continent-${continent.title.toLowerCase().replace(/\s+/g, '-')}`} 
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
  );
};

export default Battaglie;
