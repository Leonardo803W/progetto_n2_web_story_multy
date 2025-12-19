import React from "react";

const ModuloCreazioneEModifica = ({
    numberGroupSave, setNumberGroupSave,
    categoriaSave, setCategoriaSave,
    titoloSave, setTitoloSave,
    //introSave, setIntroSave,
    //testoSave, setTestoSave,
    linkSave, setLinkSave,
    imageSave, setImageSave,
    resetFields,
    handleCreate,
    handleModify,
    showOnModify
}) => {

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            setImageSave(reader.result); // BASE64
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className="salvaCrea">
            <div>
                <label className = "d-block p-2">Numero Gruppo: </label>
                <input type="text" value={numberGroupSave || ''} onChange={(e) => setNumberGroupSave(e.target.value)} />
                <label className = "d-block p-2">Categoria del contenuto: </label>
                <input type="text" value={categoriaSave || ''} onChange={(e) => setCategoriaSave(e.target.value)} />
            </div>

            <div>
                <label className = "d-block p-2">Titolo: </label>
                <input type="text" value={titoloSave || ''} onChange={(e) => setTitoloSave(e.target.value)} />
                
            </div>

            <div>
                <label className = "d-block p-2">Link delle fonti: </label>
                <input type="text" value={linkSave || ''} onChange={(e) => setLinkSave(e.target.value)} />
                
            </div>

            <div>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                />

                {imageSave && (
                    <img
                        src={imageSave}
                        alt="anteprima"
                        style={{ width: '200px', marginTop: '10px' }}
                    />
                )}
            </div>

            <div className = "mt-3 d-flex justify-content-between">
                <button onClick={resetFields}>Esci</button>
                {showOnModify && <button onClick={handleModify}>Modifica</button>}
                <button onClick={handleCreate} className = {showOnModify ? 'd-none' : 'd-block'}>Salva</button>
            </div>
        </div>
    );
};

export default ModuloCreazioneEModifica;