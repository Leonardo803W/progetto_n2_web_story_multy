import { useRef, useEffect, useState } from "react";

const Creazione = () => {

    //variabili per andpoint fetchall
    const [data, setData] = useState ([])
    const [loading, setLoading] = useState (true)
    const [error, setError] = useState (false)

    //variabili per andpoint salvare nuovi contenuti
    const [numberGroupSave, setNumberGroupSave] = useState ('')
    const [categoriaSave, setCategoriaSave] = useState ('')
    const [titoloSave, setTitoloSave] = useState ('')
    const [introSave, setIntroSave] = useState ('')
    const [testoSave, setTestoSave] = useState ('')
    const [linkSave, setLinkSave] = useState ('')
    const [showCreazione, setShowCrezione] = useState (true)
    const [showOn, setShowOn] = useState (false)
    const [showOnModify, setShowOnModify] = useState (false)
    const [searchTerm, setSearchTerm] = useState("");
    const [searchOnn, setSearchOnn] = useState(false);
    const searchRef = useRef(null);

    //variabili per articole
    const [battaglie, setBattaglie] = useState ([]);
    const [invenzioni, setInvenzioni] = useState ([]);
    const [continenti, setContinenti] = useState ([]);
    const [epoche, setEpoche] = useState ([]);
    const [divulgatori, setDivulgatori] = useState ([]);

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
    
    useEffect(() => {
        console.log('data aggiornata:', data);
        console.log('battaglia aggiornata:', battaglie);
    }, [data]);

    const filteredContent = data.data?.content?.filter(item =>
        item.titolo?.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

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
            setShowOnModify(false);
            setShowOn(false);

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
        setShowOn(true);
        setShowOnModify(true);
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
        setShowOn(prevState => !prevState)
        setShowOnModify(false);
    };

    const assignGroups = (content) => {
        console.log(content)
        setBattaglie(content.filter(item => item.number_group === 1));
        setInvenzioni(content.filter(item => item.number_group === 2));
        setContinenti(content.filter(item => item.number_group === 3));
        setEpoche(content.filter(item => item.number_group === 4));
        setDivulgatori(content.filter(item => item.number_group === 5)); // se hai altri gruppi
    };

    const handelShow = () => {
        
        setShowOn(prevState => !prevState)
    }

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

    
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                // Se il click NON è dentro la barra di ricerca
                setShowCrezione(true); // valore opposto a quando la barra è attiva
                setSearchOnn(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handelMain = () => {

        setShowCrezione(false);
        setSearchOnn(true);
    }

    return(
        <>
            <section className = {showOn ? 'sectionOff' : "mainCreazione"}>
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

                    <div onClick = {handelShow} className = {showCreazione ? "salvareContenuto" : 'd-none'}>
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
                        
                <div className = {searchOnn ? 'd-none' : 'd-block'}>
                    <div className = {articolo1 ? 'd-block' : 'd-none'}>
                        <article className = "aricoliContenutiCategorie">
                            <div onClick = {() => handelContenitore('sottoArticolo1')} className = "sottoArticoli">
                                <h5 className = "m-2">Waterloo</h5>
                                <img src = "https://placedog.net/500" alt = ""/>
                                <p className = "m-2">La sconfitta decisiva di Napoleone</p>
                            </div>
                        </article>

                        <section className = {sottoArticolo1 ? 'd-flex' : 'd-none'}>
                            {battaglie.length > 0 ? (
                                battaglie.map((item) => (
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
                                    <p>non vi e nessun dato</p>
                                    <hr />
                                </div>
                            )}
                        </section>
                    </div>
                    
                    <div className = {searchOnn ? 'd-none' : 'd-block'}>
                        <div className = {articolo2 ? 'd-block' : 'd-none'}>
                            <article className = "aricoliContenutiCategorie">
                                <div onClick = {() => handelContenitore('sottoArticolo2')} className = "sottoArticoli">
                                    <h5 className = "m-2">Waterloo</h5>
                                    <img src = "https://placedog.net/500" alt = ""/>
                                    <p className = "m-2">La sconfitta decisiva di Napoleone</p>
                                </div>
                            </article>

                            <section className = {sottoArticolo2 ? 'd-flex' : 'd-none'}>
                                {invenzioni.length > 0 ? (
                                    invenzioni.map((item) => (
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
                                        <p>non vi e nessun dato</p>
                                        <hr />
                                    </div>
                                )}
                            </section>
                        </div>
                    </div>

                    <div className = {searchOnn ? 'd-none' : 'd-block'}>
                        <div className = {articolo3 ? 'd-block' : 'd-none'}>
                            <article className = "aricoliContenutiCategorie">
                                <div onClick = {() => handelContenitore('sottoArticolo3')} className = "sottoArticoli">
                                    <h5 className = "m-2">Waterloo</h5>
                                    <img src = "https://placedog.net/500" alt = ""/>
                                    <p className = "m-2">La sconfitta decisiva di Napoleone</p>
                                </div>
                            </article>

                            <section className = {sottoArticolo3 ? 'd-flex' : 'd-none'}>
                                {continenti.length > 0 ? (
                                    continenti.map((item) => (
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
                                        <p>non vi e nessun dato</p>
                                        <hr />
                                    </div>
                                )}
                            </section>
                        </div>
                    </div>

                    <div className = {searchOnn ? 'd-none' : 'd-block'}>
                        <div className = {articolo4 ? 'd-block' : 'd-none'}>
                            <article className = "aricoliContenutiCategorie">
                                <div onClick = {() => handelContenitore('sottoArticolo4')} className = "sottoArticoli">
                                    <h5 className = "m-2">Waterloo</h5>
                                    <img src = "https://placedog.net/500" alt = ""/>
                                    <p className = "m-2">La sconfitta decisiva di Napoleone</p>
                                </div>
                            </article>

                            <section className = {sottoArticolo4 ? 'd-flex' : 'd-none'}>
                                {epoche.length > 0 ? (
                                    epoche.map((item) => (
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
                                        <p>non vi e nessun dato</p>
                                        <hr />
                                    </div>
                                )}
                            </section>
                        </div>
                    </div>
                                
                </div>
            </section>                
            
            <div className={showOn ? 'salvaCrea' : 'salvaCreaOff'}>
                    <div>
                        <label>Numero Gruppo: </label>
                        <input 
                        type="text" 
                        placeholder="1"
                        value= {numberGroupSave}
                        onChange={(e) => setNumberGroupSave(e.target.value)}
                        />
                        <label>Categoria del contenuto: </label>
                        <input 
                        type="text" 
                        placeholder="Battaglie"
                        value= {categoriaSave}
                        onChange={(e) => setCategoriaSave(e.target.value)}
                        />
                    </div>

                    <div>
                        <label>Titolo: </label>
                        <input 
                        type="text" 
                        placeholder="Waterloo"
                        value= {titoloSave}
                        onChange={(e) => setTitoloSave(e.target.value)}
                        />
                        <label>Testo del contenuto: </label>
                        <input 
                        type="text" 
                        placeholder="La sconfitta decisiva di Napoleone......"
                        value= {testoSave}
                        onChange={(e) => setTestoSave(e.target.value)}
                        />
                    </div>

                    <div>
                        <label>Link delle fonti: </label>
                        <input 
                        type="text" 
                        placeholder="https://it.wikipedia.org/wiki/Battaglia_di_Waterloo"
                        value= {linkSave}
                        onChange={(e) => setLinkSave(e.target.value)}
                        />
                        <label>Intro contenuto: </label>
                        <input 
                        type="text" 
                        placeholder="La battaglia piu sanguinosa di roma"
                        value= {introSave}
                        onChange={(e) => setIntroSave(e.target.value)}
                        />
                    </div>

                    <div>
                       <button onClick = {resetFields}>Esci</button> 
                       <button className = {showOnModify ? 'd-block' : 'd-none'} onClick = {handleModify}>Modifica</button> 
                       <button onClick = {handleCreate}>Salva</button>
                    </div>
            </div>
        </>
    )
}

export default Creazione;