import React from "react";

const ArticoloAnteprima = ({ categoria, n, img, onClick }) => (
    
    <article className="articoliContenutiCategorie" onClick={onClick}>
        <div className="sottoArticoli">
            <div className = "p-3 d-flex justify-content-between">
                <p className = "categorieArticoloAnteprima">Categoria:</p>
                <p className = "titolo">{categoria}</p>
                <p className = "categorieArticoloAnteprima">({n})</p>
            </div>
            <img src={img} alt={categoria} />
        </div>
    </article>
);

export default ArticoloAnteprima;
