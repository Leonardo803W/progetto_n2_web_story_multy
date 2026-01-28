import { useState } from 'react';
import { invenzioni } from './datiInvenzione';

import img1 from  '../../img/img_mainInvenzioni/freaccia sinistra.jpg'

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
        <div key={item.id} className="box">

          {item.id % 2 === 0 ? (
            <>
              <img src={img1} alt="" className="arrowRight" />

              <div className="bigArticole">
                <div
                  className="epocheInvenzioni"
                  onClick={() => handelInvenzione(item.id)}
                >
                  <h3>{item.title}</h3>
                  <hr />
                </div>

                <div
                  className={
                    activeInvention.includes(item.id)
                      ? 'inventionOpen'
                      : 'd-none'
                  }
                >
                  {item.invenzioni.map((inv) => (
                    <article className="articoleInvention" key={inv.id}>
                      <h5>{inv.title}</h5>
                      <button>Dettagli</button>
                    </article>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="bigArticole">
                <div
                  className="epocheInvenzioni"
                  onClick={() => handelInvenzione(item.id)}
                >
                  <h3>{item.title}</h3>
                  <hr />
                </div>

                <div
                  className={
                    activeInvention.includes(item.id)
                      ? 'inventionOpen'
                      : 'd-none'
                  }
                >
                  {item.invenzioni.map((inv) => (
                    <article className="articoleInvention" key={inv.id}>
                      <h5>{inv.title}</h5>
                      <button>Dettagli</button>
                    </article>
                  ))}
                </div>
              </div>

              <img src={img1} alt="" className="arrowLeft" />
            </>
          )}

          <div className = 'waterMirrorUp'>-</div>
          <div className = 'waterMirrorDown' >-</div>

        </div>
      ))}

    </section>
  );
};

export default Invenzioni;
