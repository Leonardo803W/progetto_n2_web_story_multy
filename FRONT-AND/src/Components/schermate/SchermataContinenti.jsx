import GlobalNavbar from "../GlobalNavbar";
import MainContinenti from "../mainContinenti/Continenti";

const SchermataContinenti = () => {

    return(
        <>
            <header>
                <GlobalNavbar/>
            </header>

            <main id = "schermataContinentiMain">
                <MainContinenti/>
            </main>
            
        </>
    )
}

export default SchermataContinenti;