import GlobalNavbar from "../GlobalNavbar";
import Divulgatori from "../mainDivulgatori/Divulgatori";

const SchermataDivulgatori = () => {

    return(
        <>
            <header>
                <GlobalNavbar/>
            </header>

            <main id = "schermataDivulgatoriMain">
                <Divulgatori/>
            </main>
            
        </>
    )
}

export default SchermataDivulgatori;