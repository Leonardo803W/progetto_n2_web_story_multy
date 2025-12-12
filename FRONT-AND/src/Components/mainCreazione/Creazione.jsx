import { useRef, useEffect, useState } from "react";
import ModuloCreazioneEModifica from "./ModuloCreazioneEModifica";
import ArticoloAnteprima from "./ArticoloAnteprima";
import ArticoloDettaglio from "./ArticoloDettaglio ";

const Creazione = () => {

    //variabili per andpoint fetchall
    const [data, setData] = useState ([]);
    const [erroro, setError] = useState (false);
    const [loading, setLoading] = useState (true);

    //variabili per andpoint salvare nuovi contenuti o per modificare contenuti gia esistenti
    const [numberGroupSave, setNumberGroupSave] = useState ('');
    const [categoriaSave, setCategoriaSave] = useState ('');
    const [titoloSave, setTitoloSave] = useState ('');
    const [introSave, setIntroSave] = useState ('');
    const [testoSave, setTestoSave] = useState ('');
    const [linkSave, setLinkSave] = useState ('');

    //variabili per permettere all'admin di poter eselezionare e vedere solo un determinato gruppo o piu'
    const [battaglie, setBattaglie] = useState ([]);
    const [invenzioni, setInvenzioni] = useState ([]);
    const [continenti, setContinenti] = useState ([]);
    const [epoche, setEpoche] = useState ([]);
    const [divulgatori, setDivulgatori] = useState ([]);

    //configuarazione variabile per nbon avere duplicati degli articoli
    const articoliConfig = [
        { id: 1, titolo: 'Waterloo', intro: 'La sconfitta decisiva di Napoleone', img: 'https://placedog.net/500', items: battaglie },
        { id: 2, titolo: 'Continenti', intro: 'Ogni continente ha la sua storia', img: 'https://placedog.net/500', items: invenzioni },
        { id: 3, titolo: 'Epoche', intro: 'Fin dagli inizi l’uomo...', img: 'https://placedog.net/500', items: continenti },
        { id: 4, titolo: 'Altro', intro: 'Descrizione generica', img: 'https://placedog.net/500', items: epoche },
    ];


    //variabili per searchBar e per visualizzare elementi nella pagina tramite funzioni al di fuori delle fetch
    const [segnate, setSegnate] = useState([]); 
    const [articolo1, setArticolo1] = useState(false); 
    const [articolo2, setArticolo2] = useState(false); 
    const [articolo3, setArticolo3] = useState(false); 
    const [articolo4, setArticolo4] = useState(false); 
    const [sottoArticolo1, setSottoArticolo1] = useState(false); 
    const [sottoArticolo2, setSottoArticolo2] = useState(false); 
    const [sottoArticolo3, setSottoArticolo3] = useState(false); 
    const [sottoArticolo4, setSottoArticolo4] = useState(false); 
    const [allCard, setAllCard] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchOnn, setSearchOnn] = useState(false);
    const searchRef = useRef(null);
    const [showButtonCreazione, setButtonCrezione] = useState (true)
    const [openModuleSaveOrModify, setOpenSaveOrModify] = useState (false)
    const [showOnModify, setOpenSaveOrModifyModify] = useState (false)

    //fetch per ricerevere tutti i dati
    useEffect(() => {

        const fetchData = async () => {

            try {
                const response = await fetch('http://localhost:8080/api/open/entity/fetchall');
                if (!response.ok) throw new Error('Network response was not ok');
                
                const result = await response.json();
                //console.log(result)
                setData(result);
                assignGroups(result.data.content);

            } catch (error) {
                setError(error);
                //console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    
    // fetch per salvare un nuovo elemento
    const handleCreate = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/open/entity/save`, {

                method: 'POST',
                headers: {
                    'Authorization': `Bearer `,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    number_group: numberGroupSave, 
                    categoria: categoriaSave,
                    titolo: titoloSave,
                    intro: introSave, 
                    testo: testoSave, 
                    link_: linkSave, 
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
                    const newItem = result.data;

            // per aggiungere subito il nuovo contenuto
            setData(prev => {
                const newContent = [...prev.data.content, newItem];

                // aggiorna i gruppi
                assignGroups(newContent);

                return {
                    ...prev,
                    data: {
                        ...prev.data,
                        content: newContent
                    }
                };
            });

            setNumberGroupSave('');
            setCategoriaSave('');
            setTitoloSave('');
            setIntroSave('');
            setTestoSave('');
            setLinkSave('');

        } catch (error) {
            console.error('Error during creation:', error);
        }
    };

    // fetch per modificare un elemento gia esistente
    const handleModify = async () => {

        const id = localStorage.getItem('id'); // ottengo l'id dellelemento da modificare

        try {
            const response = await fetch(`http://localhost:8080/api/open/entity/modifyById/${id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer `,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    number_group: numberGroupSave, 
                    categoria: categoriaSave,
                    titolo: titoloSave,
                    intro: introSave, 
                    testo: testoSave, 
                    link_: linkSave, 
                }),
            });

            //console.log(response)
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const result = await response.json();
            const updatedItem = result.data;

            // funzione per riportare le modifiche dell'elemento evitando duplicazioni
            setData(prev => {
                const updatedContent = prev.data.content.map(item =>
                    item.id === id ? updatedItem : item
                );

                // aggiorna i gruppi
                assignGroups(updatedContent);

                return {
                    ...prev,
                    data: {
                        ...prev.data,
                        content: updatedContent
                    }
                };
            });

            resetFields();
            setOpenSaveOrModifyModify(false);
            setOpenSaveOrModify(false);

        } catch (error) {
            console.error('Error during modification:', error);
        }
    }

    // fetch per togliere un elemento gia esistente
    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/api/open/entity/deleteById/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) throw new Error();

            setData(prev => ({
                ...prev,
                data: {
                    ...prev.data,
                    content: prev.data.content.filter(item => item.id !== id)
                }
            }));

        } catch (err) {
            console.error(err);
        }
    };

    //funzione per modificare i vari input dei vari elementi
    const handleModifyOpen = (item) => {
        setNumberGroupSave(item.numberGroup);
        setCategoriaSave(item.categoria);
        setTitoloSave(item.titolo);
        setIntroSave(item.intro);
        setTestoSave(item.testo);
        setLinkSave(item.link_);
        localStorage.setItem('id', item.id) // salvo l'elemento da modificare
        setOpenSaveOrModify(true);
        setOpenSaveOrModifyModify(true);
    };

    // funzione per risettare i campi dopo qualunque fetch
    const resetFields = () => {
        setNumberGroupSave('');
        setCategoriaSave('');
        setTitoloSave('');
        setIntroSave('');
        setTestoSave('');
        setLinkSave('');
        localStorage.removeItem('id');
        setOpenSaveOrModify(prevState => !prevState)
        setOpenSaveOrModifyModify(false);
    };

    //funzione per assegnare i vari gruppi alle variabili giuste per visualizzare solo determinati gruppi
    const assignGroups = (content) => {
        const battaglieArr = content.filter(item => item.number_group === 1);
        const invenzioniArr = content.filter(item => item.number_group === 2);
        const continentiArr = content.filter(item => item.number_group === 3);
        const epocheArr = content.filter(item => item.number_group === 4);
        const divulgatoriArr = content.filter(item => item.number_group === 5);

        setBattaglie(battaglieArr);
        setInvenzioni(invenzioniArr);
        setContinenti(continentiArr);
        setEpoche(epocheArr);
        setDivulgatori(divulgatoriArr);

        setAllArticole({
            battaglie: battaglieArr,
            invenzioni: invenzioniArr,
            continenti: continentiArr,
            epoche: epocheArr,
            divulgatori: divulgatoriArr
        });
    };

    const handelShow = () => {
        
        setOpenSaveOrModify(prevState => !prevState)
    }
    
    const handelMain = () => {

        setButtonCrezione(false);
        setSearchOnn(true);
    }

    const handelCategorie = (id, string) => 
    {
        let newSegnate;

        if (segnate.includes(id)) {
            newSegnate = segnate.filter(item => item !== id);
        } else {
            newSegnate = [...segnate, id];
        }

        setSegnate(newSegnate);
        setAllCard(newSegnate.length === 0);

        switch (string) {
            case 'primo':
            setArticolo1(prev => !prev);
            break;
            case 'secondo':
            setArticolo2(prev => !prev);
            break;
            case 'terzo':
            setArticolo3(prev => !prev);
            break;
            case 'quarto':
            setArticolo4(prev => !prev);
            break;
        }
    };

    const handelContenitore = (string) => {

        switch (string) {
            case 'sottoArticolo1':
                setSottoArticolo1(prev => !prev);
                break;

            case 'sottoArticolo2':
                setSottoArticolo2(prev => !prev);
                break;

            case 'sottoArticolo3':
                setSottoArticolo3(prev => !prev);
                break;

            case 'sottoArticolo4':
                setSottoArticolo4(prev => !prev);
                break;
        }
    }
    
    //funzione per la searchBar
    const filteredContent = data.data?.content?.filter(item =>
        item.titolo?.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                
                setButtonCrezione(true);
                setSearchOnn(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    /*useEffect(() => {
        console.log('data aggiornata:', data);
        console.log('battaglia aggiornata:', battaglie);
    }, [data]);*/

    return(
        <>
            <section className = {openModuleSaveOrModify ? 'sectionOff' : "mainCreazione"}>
                <section>
                    <div id = "barSearch">
                        <input 
                            type="text" 
                            placeholder="cerca per titolo" 
                            className="w-100"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onClick={() => handelMain()}
                            ref={searchRef}
                        />
                    </div>

                    <div onClick = {handelShow} className = {showButtonCreazione ? "salvareContenuto" : 'd-none'}>
                        aggiungi contenuto
                        <button>+</button>
                    </div>
                </section>

                <section className = {searchOnn ? 'd-none' : 'd-block'}>
                    <div className = "d-flex justify-content-around mt-4">
                        <p
                            onClick={() => handelCategorie(1, 'primo')}
                            className={segnate.includes(1) ? 'segna' : 'categorie'}
                            >
                            1
                            </p>
                            <p
                            onClick={() => handelCategorie(2, 'secondo')}
                            className={segnate.includes(2) ? 'segna' : 'categorie'}
                            >
                            2
                            </p>
                            <p
                            onClick={() => handelCategorie(3, 'terzo')}
                            className={segnate.includes(3) ? 'segna' : 'categorie'}
                            >
                            3
                            </p>
                            <p
                            onClick={() => handelCategorie(4, 'quarto')}
                            className={segnate.includes(4) ? 'segna' : 'categorie'}
                            >
                            4
                            </p>
                    </div>
                </section>

                <section className = {searchOnn ? 'd-none' : 'd-block'}>
                    <div className = {allCard ? 'd-flex flex-wrap justify-content-around' : 'd-none'}>
                        {data.data && data.data.content.length > 0 ? (
                            data.data.content.map((item) => (
                                <section className = "cardCreazione" key={item.id}>
                                    <div className = "p-3">
                                        <h5 className = "m-2">{item.titolo || 'Titolo non disponibile'}</h5>
                                        <p className = "m-2">{item.intro || 'Intro non disponibile'}</p>
                                        {item.link_ && <a href={item.link_}>Vai alla fonte</a>}
                                        <p className = "cardCategoria"><strong>Categoria:</strong> {item.categoria || 'N/A'}</p>
                                    </div>

                                    <div className = "d-flex justify-content-around">
                                        <button onClick={() => handleModifyOpen(item)}>modifica</button>
                                        <button onClick={() => handleDelete(item.id)}>elimina</button>
                                    </div>
                                </section>
                            ))
                            ) : (
                            <p>Nessun contenuto disponibile.</p>
                        )}
                    </div>
                </section>
                
                <section className = {searchOnn ? 'd-bloc' : 'd-none'}>
                    <div className={allCard ? 'd-flex flex-wrap justify-content-around' : 'd-none'}>
                        {filteredContent.length > 0 ? (
                            filteredContent.map((item) => (
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
                            <p>Nessun contenuto trovato.</p>
                        )}
                    </div>
                </section>

                <section>
                    <div className={articolo1 ? 'd-block' : 'd-none'}>
                        <ArticoloAnteprima
                            titolo="Waterloo"
                            intro="La sconfitta decisiva di Napoleone"
                            img="https://placedog.net/500"
                            onClick={() => handelContenitore('sottoArticolo1')}
                        />

                        {sottoArticolo1 && 
                            <ArticoloDettaglio
                                items={battaglie}
                                handleModifyOpen={handleModifyOpen}
                                handleDelete={handleDelete}
                            />
                        }
                    </div>

                    <div className={articolo2 ? 'd-block' : 'd-none'}>
                        <ArticoloAnteprima
                            titolo="Waterloo"
                            intro="La sconfitta decisiva di Napoleone"
                            img="https://placedog.net/500"
                            onClick={() => handelContenitore('sottoArticolo2')}
                        />

                        {sottoArticolo2 && 
                            <ArticoloDettaglio
                                items={invenzioni}
                                handleModifyOpen={handleModifyOpen}
                                handleDelete={handleDelete}
                            />
                        }
                    </div>

                    <div className={articolo3 ? 'd-block' : 'd-none'}>
                        <ArticoloAnteprima
                            titolo="Waterloo"
                            intro="La sconfitta decisiva di Napoleone"
                            img="https://placedog.net/500"
                            onClick={() => handelContenitore('sottoArticolo3')}
                        />

                        {sottoArticolo3 && 
                            <ArticoloDettaglio
                                items={epoche}
                                handleModifyOpen={handleModifyOpen}
                                handleDelete={handleDelete}
                            />
                        }
                    </div>

                    <div className={articolo4 ? 'd-block' : 'd-none'}>
                        <ArticoloAnteprima
                            titolo="Waterloo"
                            intro="La sconfitta decisiva di Napoleone"
                            img="https://placedog.net/500"
                            onClick={() => handelContenitore('sottoArticolo4')}
                        />

                        {sottoArticolo4 && 
                            <ArticoloDettaglio
                                items={divulgatori}
                                handleModifyOpen={handleModifyOpen}
                                handleDelete={handleDelete}
                            />
                        }
                    </div>
                </section>

            </section>                
            
            {openModuleSaveOrModify && 
                <ModuloCreazioneEModifica
                    numberGroupSave={numberGroupSave} setNumberGroupSave={setNumberGroupSave}
                    categoriaSave={categoriaSave} setCategoriaSave={setCategoriaSave}
                    titoloSave={titoloSave} setTitoloSave={setTitoloSave}
                    introSave={introSave} setIntroSave={setIntroSave}
                    testoSave={testoSave} setTestoSave={setTestoSave}
                    linkSave={linkSave} setLinkSave={setLinkSave}
                    resetFields={resetFields}
                    handleCreate={handleCreate}
                    handleModify={handleModify}
                    showOnModify={showOnModify}
                />
            }
        </>
    )
}

export default Creazione;