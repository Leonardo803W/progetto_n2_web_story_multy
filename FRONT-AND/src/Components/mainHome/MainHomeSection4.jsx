import { useState } from 'react';
import { divulgatori } from '../mainDivulgatori/datiDivulgatoriStoria'

const MainHomeSection4 = () => {

    return(
        <>
            <section id = 'section4'>

                <div className=' p-3 position-relative'>
                    <p id = 'introDivulgatori'>
                            La storia non sarebbe mai conosciuta se non fosse grazie a chi la divulga,
                            di divulgatori ve ne sono diversi, ognuno con le proprie abilita e competenze!                        
                    </p>                    
                </div>

                <section id = 'groupCardDivulgatoriTelefonoETablet'>
                    {divulgatori.slice(0, 3).map((articolo) => {
                        return (
                            <div key={articolo.id} className="card">
                                <img src={articolo.src} alt="" />
                                <hr className='m-1 text-light'/>
                                <div className='groupContent'>
                                    <h5>{articolo.title}</h5>
                                </div>
                            </div>
                        );
                    })}
                </section>

                <section id = 'groupCardDivulgatoriLaptopEDesktop'>
                    {divulgatori.slice(0, 3).map((articolo) => {
                        return (
                            <article key={articolo.id} className = 'articleDivulgatori'>
                                <div className="card">
                                    <img src={articolo.src} alt="" />
                                    <hr className='m-1 text-light'/>
                                    <div className='groupContent'>
                                        <h5>{articolo.title}</h5>
                                    </div>
                                </div>

                                <iframe
                                    src = {articolo.youtube}
                                    title = {`Video di ${articolo.title}`}
                                    loading = "lazy"          
                                    sandbox = "allow-scripts allow-same-origin" 
                                    allow = "fullscreen"  
                                    className = 'videoDivulgatoriIntro'      
                                />
                            </article>
                        );
                    })}
                </section>
                <button id = 'introButtonDivulgatori'>clicca qui per vederne altri!</button>
            </section>
        </>
    )
}

export default MainHomeSection4;