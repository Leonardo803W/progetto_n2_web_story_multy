import { useState } from 'react';
import { divulgatori } from '../mainDivulgatori/datiDivulgatoriStoria'
import { canaliDivulgatori } from './datiDivulgatoriCanaliYutube'; 

const Divulgatori = () => {

    const [showDivulgatori, setShowDivulgatori] = useState (false)

    const handelDivulgatori = () => {

        setShowDivulgatori(prev => !prev)
    }
    
    return(
        <>
            <section id = 'BigSectionDivulgatori'>
                <div id = 'introSectionDivulgatori'>
                    <h1>Divulgatori</h1>
                    <hr />
                </div>

                <div className = {showDivulgatori ? 'd-none' : 'introDivulgatori'}>
                    <div className = 'testoDivulgatori'>
                        <p className = 'mb-3'>
                            L’essere umano 🧍‍♂️🧍‍♀️ ha sempre sentito il bisogno di raccontare la storia 📖. Talvolta essa appare chiara e lineare, altre volte complessa e incompleta. Anche quando esiste una forte volontà di essere imparziali ⚖️, è inevitabile che, in modo involontario, si tralasci qualche dettaglio o si finisca per assumere una prospettiva leggermente più vicina a una parte che all’altra.
                        </p>
                        <p>
                            Tuttavia, questo non deve mai diventare una scusa per zittire 🛑 chi tenta di raccontare il passato. L’unico modo realmente efficace per comprendere la storia 🧠 è ascoltare più punti di vista 👂, confrontarli tra loro e trarre le proprie conclusioni in modo autonomo, cercando di non farsi influenzare né da un esperto 🎓 né da una persona comune.
                        </p>
                    </div>

                    <article className = 'groupImgDivulgatori'>
                        <div>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Roberto_Giacobbo_-_Lucca_Comics_%26_Games_2014.JPG/960px-Roberto_Giacobbo_-_Lucca_Comics_%26_Games_2014.JPG" alt="" />
                            <img src="https://premiostrega.it/PS/wp-content/uploads/2022/09/Alessandro-Barbero.jpg" alt="" />
                        </div>
                        <button className = 'showDivulgatoriOn' onClick = {() => handelDivulgatori()}>Scopri</button>
                        <div>
                            <img src="https://premiorotondi.it/wp-content/uploads/2019/02/Alberto-Angela_01.jpg" alt="" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Luciano_Canfora.jpg" alt="" />
                        </div>
                    </article>
                </div>

                <section className = {showDivulgatori ? 'd-block' : 'd-none'}>
                    <button className = 'showDivulgatoriOf' onClick = {() => handelDivulgatori()}>Back</button>

                    {divulgatori.map((item) => (
                        <div key= {item.id} className = 'articoleDivulgatori'>
                            <div className = 'introCard'>
                            <img src = {item.src} alt = "immagine persona" className = 'imgCard' />
                                <div className = 'contenutoCard'>
                                    <h3 className = 'mb-3'>{item.title}</h3>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                            <div className = 'fontiPrincipaleCard'>
                                <p>fonte principale: </p>
                                <a href = {item.fonte} target="_blank" rel="noopener noreferrer">
                                    {item.fonte}
                                </a>
                            </div>
                        </div>
                    ))}
                </section>

                <div className = 'introDivulgatori'>
                    <div className = 'testoDivulgatori'>
                        <p className = 'mb-3'>
                            I social network 📱 sono spesso criticati e considerati dannosi, ma se utilizzati con prudenza e consapevolezza 🌱, possono diventare uno strumento potentissimo di diffusione della conoscenza 🚀. Essi permettono una circolazione esponenziale delle informazioni e offrono spazio anche a quei piccoli divulgatori 🗣️ che, senza i social, non avrebbero mai voce né visibilità.
                        </p>
                        <p>
                            In questo modo, i social favoriscono l’incontro di idee diverse 💬, la pluralità di opinioni e il confronto tra punti di vista. È però fondamentale non usarli per opprimere o dividere ⚠️, ma piuttosto per aiutare gli altri a comprendere, ricordando che siamo tutti esseri umani 🤝 e che uniti siamo più forti che divisi 💪.
                        </p>
                    </div>
                </div>

                <section id = 'divulgatoriCanaliYoutube'>
                    {canaliDivulgatori.map((item) => (
                        <div key = {item.id} className = 'articoleCardCanali'>
                            <div className = 'introCardCanali'>
                                <img src = {item.image} alt = "immagine canale di yutube" />
                            </div>
                            <div className = 'contenutoCardCanali'>
                                <h3>{item.title}</h3>
                                <a href = {item.link} target="_blank" rel="noopener noreferrer">{item.link}</a>
                            </div>
                        </div>
                    ))}
                </section>
            </section>
        </>
    )
}

export default Divulgatori;