import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import img1 from '../img/backgroundImgSection1.jpeg'

const MainHomeSection1 = () => {

  // Stato che traccia quale paragrafo è attualmente visibile
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const totalParagraphs = 5;

  useEffect(() => {
    if (currentParagraph < totalParagraphs) {
      const timeoutId = setTimeout(() => {
        setCurrentParagraph(prev => prev + 1);
      }, 2000);
      return () => clearTimeout(timeoutId);
    }
  }, [currentParagraph]);

  const isParagraphVisible = (index) => {
    if (currentParagraph < totalParagraphs) {
      return index <= currentParagraph;
    } else {
      return true;
    }
  };

  return (
    <>
      <section id = "section1">
        {/* Paragrafi */}
        <div className="group-paragrafer">
          <p id="para1" className={isParagraphVisible(0) ? "visibleParagrafoSection1" : "hiddenParagrafoSection1"}>
            La storia e il nostro passato, presente futuro.
          </p>
          <p id="para2" className={isParagraphVisible(1) ? "visibleParagrafoSection1" : "hiddenParagrafoSection1"}>
            Ma la storia e sempre vera?
          </p>
          <p id="para3" className={isParagraphVisible(2) ? "visibleParagrafoSection1" : "hiddenParagrafoSection1"}>
            Conosci la storia?
          </p>
          <p id="para4" className={isParagraphVisible(3) ? "visibleParagrafoSection1" : "hiddenParagrafoSection1"}>
            Comprendila, elaborala, teorizza.
          </p>
          <p id="para5" className={isParagraphVisible(4) ? "visibleParagrafoSection1" : "hiddenParagrafoSection1"}>
            In questo modo puoi interagire con la storia!
          </p>
        </div>

        {/* Sezione immagini */}
        <div id="group-img">
          <div id="slide-img-sinistra">
            <img src={img1} alt="immagine galassia via lattea" id="immagine1" />
            <img src={img1} alt="immagine galassia via lattea" id="immagine2" />
          </div>
          <div id="slide-img-destra">
            <img src={img1} alt="immagine galassia via lattea" id="immagine3" />
            <img src={img1} alt="immagine galassia via lattea" id="immagine4" />
          </div>
        </div>
      </section>
    </>
  );
};

export default MainHomeSection1;