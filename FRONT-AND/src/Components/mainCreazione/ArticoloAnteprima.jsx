import React from "react";

const ArticoloAnteprima = ({ titolo, intro, img, onClick }) => (
    
    <article className="articoliContenutiCategorie" onClick={onClick}>
        <div className="sottoArticoli">
            <h5 className="m-2">{titolo}</h5>
            <img src={img} alt={titolo} />
            <p className="m-2">{intro}</p>
        </div>
    </article>
);

export default ArticoloAnteprima;
