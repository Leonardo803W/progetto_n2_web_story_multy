import GlobalNavbar from "../GlobalNavbar";
import Battaglie from "../mainBattaglie/Battaglie";

const SchermataBattaglie = () => {

    return(
        <>
            <header>
                <GlobalNavbar/>
            </header>

            <main id = "schermataBataglieMain">
                <Battaglie/>
            </main>
            
        </>
    )
}

export default SchermataBattaglie;