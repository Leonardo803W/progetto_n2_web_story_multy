import { useState } from 'react';

/*card e import da sostituire con fetch in un secondo momneto*/
import imgDivulgatori1 from '../../img/divulgatori/alessandro barbero.webp'
import imgDivulgatori2 from '../../img/divulgatori/roberto-giacobbo.jpg'
import imgDivulgatori3 from '../../img/divulgatori/ulisse-il-piacere-della-scoperta-alberto-angela-rai1-1.jpg'

const cards = [
  { id: 1,
      title: 'Roberto Giacobbo',
      content: 'Un divulgatore molto noto e altrettanto adorato dai spettatori',
      src: 'https://www.youtube.com/embed/ugXwgScJS8Y',
  },
  { id: 2,
      title: 'Alessandro Barbero',
      content: 'Un divulgatore molto noto e altrettanto adorato dai spettatori',
      src: 'https://www.youtube.com/embed/y6gTYOq1oGU',
  },
  { id: 3,
      title: 'Alberto Angela',
      content: 'Un divulgatore molto noto e altrettanto adorato dai spettatori',
      src: 'https://www.youtube.com/embed/5bMZYuLm0Tc',
  }
]

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
                    {cards.map((articolo) => {
                        return (
                            <div key={articolo.id} className="card">
                                <img src={imgDivulgatori1} alt="" />
                                <hr className='m-1 text-light'/>
                                <div className='groupContent'>
                                    <h5>{articolo.titile}</h5>
                                    <p>{articolo.content}</p>
                                </div>
                            </div>
                        );
                    })}
                </section>

                <section id = 'groupCardDivulgatoriLaptopEDesktop'>
                    {cards.map((articolo) => {
                        return (
                            <article key={articolo.id} className = 'articleDivulgatori'>
                                <div className="card">
                                    <img src={imgDivulgatori1} alt="" />
                                    <hr className='m-1 text-light'/>
                                    <div className='groupContent'>
                                        <h5>{articolo.titile}</h5>
                                        <p>{articolo.content}</p>
                                    </div>
                                </div>

                                <iframe
                                    src = {articolo.src}
                                    title = 'video di Alberto Angela'
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