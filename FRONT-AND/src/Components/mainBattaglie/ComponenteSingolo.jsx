import { continents } from '../mainBattaglie/datiBattaglie';

const ComponenteSingolo = () => {
  return (
    <section id="bigSectionBattaglie">
        <div id = 'introBattaglie'>
            <h1>Battaglie</h1>
            <hr />
        </div>

      {continents.map((continent) => (
        <div 
            key={continent.id}
            id={`continent-${continent.title.toLowerCase().replace(/\s+/g, '-')}`} 
        >
          <h2 className="continentBlock">{continent.title}</h2>

          {continent.millennia.map((mill, idx) => (
            <section key={idx}>
              <h3 className="millenniumBlock">{mill.range}</h3>

              {mill.battles.map((battle, i) => (
                <article key={i} className="battleCard">
                  <h4>{battle.title}</h4>
                  <p>{battle.text}</p>
                </article>
              ))}
            </section>
          ))}
        </div>
      ))}
    </section>
  );
};

export default ComponenteSingolo;
