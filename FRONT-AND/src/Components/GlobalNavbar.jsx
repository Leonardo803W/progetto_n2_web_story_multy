import { Link } from "react-router-dom";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const GlobalNavbar = ({ triggerAlert }) => {
    
  //inizializzazione variabili per menu e profile
  const [showMenu, setShowMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  //funzione per menu e profile
  const handlemenuProfile= (valore) => {

    switch(valore)
    {
      case 1:
        setShowMenu(true);
        break;
      case 2:
        setShowMenu(false);
        break;
      case 'profileOpen':
        setShowProfile(prevState => !prevState);
        break;
    }
  }

  const handelAlert = (n) => {
    setShow(false);
    
    switch (n) {
      case 1:
        triggerAlert(); // chiama la funzione passata dal parent
      break;
    }
  }

  return (
    <>
        <section className = "mb-5">

          <div id = "navbar">
            <Button onClick = {() => handlemenuProfile(1)} id = "show-on-mobile">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" className="bi bi-list" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
              </svg>
            </Button>

            <Offcanvas show = {showMenu} onHide={() => handlemenuProfile(2)}>
              <Offcanvas.Header closeButton id = "offCansHeader">
                <Offcanvas.Title>Sezioni disponibili:</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body id = "offCanvsBody">
                    <p className = "notEnter">
                      <Link to = "/">Home</Link>
                    </p>
                    <p className = "enter" onClick = {() => handelAlert(1)}>
                      <Link to = '/Battaglie'>Battaglie</Link>
                    </p>
                    <p className = "notEnter">
                      <Link to = "#">Invenzioni</Link>
                    </p>
                    <p className = "notEnter">
                      <Link to = "/Epoche">Epoche</Link>
                    </p>
                    <p className = "notEnter">
                      <Link to = "#">Continenti</Link>
                    </p>
              </Offcanvas.Body>
            </Offcanvas>

            <Link to = {'/'} className = "text-decoration-none">
              <h1 id = "title">Storia sul Web</h1>
            </Link>

            <div id = "navbar-item-desktop">
              <p className = "enter">
                <Link to = '/'>Home</Link>
              </p>
              <p className = "enter"  onClick = {() => handlemenuProfile(2)}>
                <Link to = '/Battaglie'>Battaglie</Link>
              </p>
              <p className = "notEnter">
                <Link to = "#"  className = "notEnter">Invenzioni</Link>
              </p>
              <p className = "notEnter">
                <Link to = "/Epoche"  className = "notEnter">Epoche</Link>
              </p>
              <p className = "notEnter">
                <Link to = "#"  className = "notEnter">Continenti</Link>
              </p>
            </div>

            {/*
            <div onClick={() => handlemenuProfile('profileOpen')} className = {showProfile ? "navbar-profileOpen" : "navbar-profile"}>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="black" className="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                  <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                </svg>
              </div>

                {showProfile &&
                    <div id = "profile-items">
                      <Link to = '/Creazione'>
                        <p>Pagina modifica contenuti</p>
                      </Link>
                    </div>
                }
            </div>*/}
          </div>
        </section>

    </>
  );
};

export default GlobalNavbar;