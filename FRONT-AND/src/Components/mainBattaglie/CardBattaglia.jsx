import GlobalNavbar from '../GlobalNavbar';
import { singleBattle } from './datoSingoloBattaglia';

const CardBattaglia = () => {

    return(
        <>
            <header>
                <GlobalNavbar/>
            </header>
            
            <main id = 'cardMainB'>
                {singleBattle.map((item) => (
                    <div key = {item.id} className = 'pb-2'>
                        <section id = 'cardB'
                        style={{
                            backgroundImage: `url(${item.secondImg})`
                        }}
                        >
                            <div>
                                <h1 className = 'cardIntroB'>{item.title}</h1>
                                <hr />
                            </div>
                            <div className = 'cardIntroB'>
                                {item.intro.year} 
                                {item.intro.location}
                            </div>
                        </section>
                        <div id = 'cardContentB'>
                            <p className = 'cardTextB'>{item.text}</p>
                            <img src = {item.firstImg} alt="" id = 'cardImgTestoB'/> 
                            <p className = 'cardTextB'>Fonte: <a href = {item.fonteLink} target="_blank" rel="noopener noreferrer">{item.fonteLink}</a></p>
                        </div>
                    </div>
                ))}
            </main>
        </>
    )
}

export default CardBattaglia;