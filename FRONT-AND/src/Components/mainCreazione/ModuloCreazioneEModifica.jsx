import React from "react";

const ModuloCreazioneEModifica = ({
    numberGroupSave, setNumberGroupSave,
    categoriaSave, setCategoriaSave,
    titoloSave, setTitoloSave,
    introSave, setIntroSave,
    testoSave, setTestoSave,
    linkSave, setLinkSave,
    resetFields,
    handleCreate,
    handleModify,
    showOnModify
}) => {
    return (
        <div className="salvaCrea">
            <div>
                <label>Numero Gruppo: </label>
                <input type="text" value={numberGroupSave} onChange={(e) => setNumberGroupSave(e.target.value)} />
                <label>Categoria del contenuto: </label>
                <input type="text" value={categoriaSave} onChange={(e) => setCategoriaSave(e.target.value)} />
            </div>

            <div>
                <label>Titolo: </label>
                <input type="text" value={titoloSave} onChange={(e) => setTitoloSave(e.target.value)} />
                <label>Testo del contenuto: </label>
                <input type="text" value={testoSave} onChange={(e) => setTestoSave(e.target.value)} />
            </div>

            <div>
                <label>Link delle fonti: </label>
                <input type="text" value={linkSave} onChange={(e) => setLinkSave(e.target.value)} />
                <label>Intro contenuto: </label>
                <input type="text" value={introSave} onChange={(e) => setIntroSave(e.target.value)} />
            </div>

            <div>
                <button onClick={resetFields}>Esci</button>
                {showOnModify && <button onClick={handleModify}>Modifica</button>}
                <button onClick={handleCreate}>Salva</button>
            </div>
        </div>
    );
};

export default ModuloCreazioneEModifica;