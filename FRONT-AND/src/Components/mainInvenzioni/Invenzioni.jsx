import { useState } from 'react';
import { invenzioni } from './datiInvenzione';

const Invenzioni = () => {

  const [activeInvention, setActiveInvention] = useState ([])

  const handelInvenzione = (item) => {

    setActiveInvention(prev => 
        prev.includes(item)
          ? prev.filter(id => id !== item)
          : [...prev, item]
    )
  }

  return (
    <section id="bigSectionInvenzioni">
      <div id="introBigSectionInvenzioni">
        <h1>Invenzioni</h1>
      </div>

      {invenzioni.map((item) => (
        <div key={item.id} className = 'bigArticole'>
          <div className = 'epocheInvenzioni' onClick={() => handelInvenzione(item.id)}>
            <h3>{item.title}</h3>
            <hr />
          </div>
          
            <div className = {activeInvention.includes(item.id) ? 'groupInvenzioni' : 'd-none'}>
                {item.invenzioni.map((inv) => (
                  <>
                    <article key={inv.id}>
                        <div className = 'invenzioni'>
                            <div className = 'cardInvenzioni'>
                                <h5>{inv.title}</h5>
                                <p className = 'mb-2'>{inv.testo}</p>
                                <button>Dettagli</button>
                                <p>
                                  Fonte:
                                  <a href={inv.link} target="_blank" rel="noopener noreferrer" className = 'm-1'>
                                    {inv.link}
                                  </a>
                                </p>
                            </div>
                        </div>
                    </article>
                  </>
                ))}
            </div>
        </div>
      ))}

    </section>
  );
};

export default Invenzioni;
