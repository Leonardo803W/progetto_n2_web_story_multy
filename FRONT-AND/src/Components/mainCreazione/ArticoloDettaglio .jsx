// components/ArticoloDettaglio.jsx
import React from "react";

const ArticoloDettaglio = ({ items, handleModifyOpen, handleDelete }) => (
    
    <section className={items.length > 0 ? "d-flex flex-wrap" : "d-none"}>
        {items.length > 0 ? (
            items.map((item) => (
                <section className="cardCreazione" key={item.id}>
                    <div className="p-3">
                        <h5 className="m-2">{item.titolo || 'Titolo non disponibile'}</h5>
                        <p className="m-2">{item.intro || 'Intro non disponibile'}</p>
                        {item.link_ && <a href={item.link_}>Vai alla fonte</a>}
                        <p className="cardCategoria"><strong>Categoria:</strong> {item.categoria || 'N/A'}</p>
                    </div>

                    <div className="d-flex justify-content-around">
                        <button onClick={() => handleModifyOpen(item)}>modifica</button>
                        <button onClick={() => handleDelete(item.id)}>elimina</button>
                    </div>
                </section>
            ))
        ) : (
            <div>
                <hr />
                <p>Non vi è nessun dato</p>
                <hr />
            </div>
        )}
    </section>
);

export default ArticoloDettaglio;