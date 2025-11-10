import { useState } from "react";

import GlobalNavbar from "./GlobalNavbar";
import MainHomeSection1 from "./MainHomeSection1";
import MainHomeSection2 from "./MainHomeSection2";
import MainHomeSection3 from "./MainHomeSection3";
import MainHomeSection4 from "./MainHomeSection4";
import AlertBattaglia from "../Components/AlertBattaglia";

//schermata principale iniziale

const SchermataHome = () => {

    const [showAlert1, setShowAlert1] = useState(false);

    const showAlert = () => {
        setShowAlert1(true);

        setTimeout(() => {
            setShowAlert1(false);
        }, 5000);
    };
    
    return (
        <>
            <div className = {showAlert1 ? 'customAlertOverlay' : 'd-none'}>
                <AlertBattaglia />
            </div>

            <div className = {showAlert1 ? 'dark-overlay-wrapper' : ''}>
                <header>
                    <GlobalNavbar triggerAlert = {showAlert} />
                </header>

                <main>
                    <MainHomeSection1 />
                    <hr className="spaziatoriHomeMain" />
                    <MainHomeSection2 />
                    <hr className="spaziatoriHomeMain" />
                    <MainHomeSection3 />
                    <hr className="spaziatoriHomeMain" />
                    <MainHomeSection4 />
                    <hr className="spaziatoriHomeMain" />
                </main>

                <footer></footer>
            </div>
        </>
    )
}

export default SchermataHome;