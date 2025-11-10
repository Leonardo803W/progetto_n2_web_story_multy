import img1 from '../img/alert/gift per allerta 1.gif'
import img2 from '../img/alert/gift per allerta 2.gif'

const AlertBattaglia = () => {

    return(
        <>
        <div id = "alertBattaglia">
                <img src = {img1} alt="" id = "imgAlertBattaglia1"/>
                <p>
                    Salve generale, le truppe sono in posizione ma attualmente il terreno non e ancora a nostra portata, 
                    pero lei si prepari appena sara pronto dovra dare i comandi alle nostre truppe, che la fortuna vi assista!!
                </p>
                <img src = {img2} alt="" id = "imgAlertBattaglia2"/> 
            </div>
        </>
    )
}

export default AlertBattaglia;