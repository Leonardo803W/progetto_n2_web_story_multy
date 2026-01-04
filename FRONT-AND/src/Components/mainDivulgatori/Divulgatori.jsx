import { divulgatori } from '../mainDivulgatori/datiDivulgatoriStoria'
import { canaliDivulgatori } from './datiDivulgatoriCanaliYutube'; 

const Divulgatori = () => {
    
    return(
        <>
            <section id = 'BigSectionDivulgatori'>
                <div id = 'introSectionDivulgatori'>
                    <h1>Divulgatori</h1>
                    <hr />
                </div>

                <section>
                    {divulgatori.map((item) => (
                        <div key= {item.id} className = 'articoleDivulgatori'>
                            <div className = 'introCard'>
                            <p className = 'imgCard'>foto</p>
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