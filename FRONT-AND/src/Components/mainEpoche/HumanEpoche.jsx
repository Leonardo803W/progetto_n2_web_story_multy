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

            <div id = 'testoEpoche'>
                <p>
                    Le epoche della storia umana vengono generalmente classificate a posteriori, sulla base di eventi globali 🌍, grandi trasformazioni sociali o scoperte rivoluzionarie 🔬. Raramente gli esseri umani, mentre vivono un determinato periodo storico, sono consapevoli di trovarsi in un’“epoca” ben definita. Spesso credono di vivere nel momento più moderno possibile, oppure semplicemente non si pongono il problema del contesto storico ⏳ in cui esistono.
                </p>
                <p>
                    Questo accade perché la classificazione delle epoche richiede distanza temporale: solo quando il tempo è passato diventa possibile osservare i cambiamenti, riconoscerne l’impatto e dare loro un nome.
                </p>
                <p>
                    Oggi, quindi, in che epoca ci troviamo davvero? 🤔
                    Siamo nell’Era Digitale 💻, nell’Antropocene 🌱, o forse all’inizio di una nuova epoca tecnologica e cognitiva 🧠 guidata dall’intelligenza artificiale 🤖, dalla biotecnologia e dall’esplorazione spaziale?
                </p>
                <p> 
                    E soprattutto: in quale epoca entreremo in futuro? 🚀
                    Quali scoperte fondamentali ci attendono?
                    Riusciremo a diventare una specie interstellare 🌌, capace di viaggiare tra le galassie, oppure l’umanità non riuscirà a superare il cosiddetto “Grande Filtro ⚠️”, fermandosi prima di raggiungere un reale futuro cosmico?
                </p>
                <p>
                    Queste domande non riguardano solo la scienza, ma il destino stesso della civiltà umana.
                </p>
            </div>

            <div id = 'videoEpoche'>
                <iframe 
                    width="1335" 
                    height="751" 
                    src="https://www.youtube.com/embed/Gn_SjqksZjg" 
                    title="LA TEORIA PIÙ TERRIFICANTE - dal paradosso di Fermi alla fine dell’umanità" 
                    frameborder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen
                >
                </iframe>
            </div>
        </section>
    );
};

export default HumanEpoche;
