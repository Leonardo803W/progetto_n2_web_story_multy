import { useState } from "react";
import { continenti } from "./datiContinenti";

const Continenti = () => {

    const [activeContinents, setActiveContinents] = useState([]);

    const handelEpoca = (item) => {

        setActiveContinents(prev => 
            prev.includes(item)
                ? prev.filter(id => id !== item)
                : [...prev, item]
        )
    }

    return(
        <>
            <section id = 'bigSectionContinenti'>
                <div id = "introContinenti">
                    <h1>Continenti</h1>
                </div>

                <section>
                    {continenti.map((item) => (
                        <article key = {item.id} className={activeContinents.includes(item.id) ? 'activeGround' : 'unactiveGround'} id={`continente-${item.title.toLowerCase().replace(/\s+/g, '-')}`}>
                            <div className = "cardContinent">
                                <h3 onClick={() => handelEpoca(item.id)}>{item.title}</h3>
                                <div className={activeContinents.includes(item.id) ? 'd-block' : 'd-none'}>
                                    <p>{item.testo}</p>
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                        {item.link}
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </section>

                <div id = "groupVideoContinent">
                    <div>
                        <p>Storia di come si e formato il pianeta</p>
                        <iframe 
                            src="https://www.youtube.com/embed/TfnbdMD2KIk" 
                            title="Storia del pianeta Terra" 
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen
                        >
                        </iframe>
                    </div>
                    
                    <div>
                        <p>La deriva dei continenti, come si sono formati i continenti odierni</p>
                        <iframe
                            src="https://www.youtube.com/embed/IpthYu3KckQ" 
                            title="National Geographic La deriva dei continenti ITA HD1080i" 
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen
                        >
                        </iframe>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Continenti;