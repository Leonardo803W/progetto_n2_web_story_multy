import { useState } from 'react';
import { epoche } from '../mainEpoche/datiEpoche';

const HumanEpoche = () => {

    const [activeEpoca, setActiveEpoca] = useState ([])

    const handelEpoca = (item) => {

        setActiveEpoca(prev => 
            prev.includes(item)
                ? prev.filter(id => id !== item)
                : [...prev, item]
        )
    }

    return (
        <section id = "bigSectionEpoche">
            <div id = 'introBigSectionEpoche'>
                <h1>Epoche</h1>
            </div>

            <section className="epoche-scroll">
                {epoche.map((epoca) => (
                        <div
                            key={epoca.id}
                            id={`epoca-${epoca.title.toLowerCase().replace(/\s+/g, '-')}`}
                            onClick={() => handelEpoca(epoca.id)}
                            className={activeEpoca.includes(epoca.id) ? 'activeEpoca' : 'inactiveEpoca'}
                        >
                            <div>
                                <h4 className = {activeEpoca.includes(epoca.id) ? 'titoloTesto' : 'titoloTesto'}>{epoca.title} {epoca.name}</h4>
                                <p className = {activeEpoca.includes(epoca.id) ? 'd-none' : 'introEpoca'}>{epoca.intro}</p>
                                <p className = {activeEpoca.includes(epoca.id) ? 'titoloTesto' : 'd-none'}>{epoca.testo}</p>
                            </div>
                        </div>
                ))}
            </section>
        </section>
    );
};

export default HumanEpoche;
