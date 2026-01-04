import GlobalNavbar from "../GlobalNavbar";
import Invenzioni from "../mainInvenzioni/Invenzioni";

const SchermataInvenzioni = () => {

    return(
        <>
            <header>
                <GlobalNavbar/>
            </header>

            <main id = "schermataInvenzioneMain">
                <Invenzioni/>
            </main>
            
        </>
    )
}

export default SchermataInvenzioni;