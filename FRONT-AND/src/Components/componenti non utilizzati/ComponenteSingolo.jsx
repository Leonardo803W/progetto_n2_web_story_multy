/*import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

import GlobalNavbar from "./GlobalNavbar";
import GlobalLoading from './GlobalLoading'; 
import GlobalError from './GlobalError';

const ComponenteSingolo = () => {

    const [data, setData] = useState ([])
    const [data1, setData1] = useState ([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [activeIndex, setActiveIndex] = useState(null);
    const [selectedUrl, setSelectedUrl] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
            const response = await fetch('https://www.dnd5eapi.co/api/monsters');

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log(result);
            setData(result); // in base alla struttura dell'API
            
            } catch (error) {
            setError(error);
            } finally {
            setLoading(false);
            
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (selectedUrl) {
            const fetchData = async () => {
                setLoading(true);
                setError(null);
                try {
                    const response = await fetch("https://www.dnd5eapi.co" + selectedUrl);
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const result = await response.json();
                    console.log(result)
                    setData1(result);
                } catch (error) {
                    setError(error);
                } finally {
                    setLoading(false);
                }
            };
            fetchData();
        }
    }, [selectedUrl]);

    // chiamo l'animazione per far intendere all'utente che vi e un caricamento in corso
    if (loading) { 
        return <GlobalLoading />; 
    }

    if (error) { 
        return <GlobalError />; 
    }

    const handleActive = (index, url) => {

        setActiveIndex(index);
        setSelectedUrl(url);
    };

    return(
        <>
            <Link to = '/'>
                <button>torna in home</button>
            </Link>}

            <section className = "groupCapitoliBattle">
                <div>
                {data && data.results ? data.results.map((item) => (
                    <div key={item.index} onClick={() => handleActive(item.index, item.url)}>
                    <div className={activeIndex === item.index ? "active" : "capitoli"}>
                        {item.name}
                    </div>
                    </div>
                )) : null}
                </div>

                <div className = "bigCard">
                    <h3>
                        titolo
                    </h3>

                    <div>
                        immagine
                    </div>
                    
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat perspiciatis voluptatum quia laudantium aliquid eligendi ipsam dignissimos, iure veniam optio earum voluptatibus consectetur rem itaque dolor non esse vel laborum.
                    </p>

                    <div>
                        video
                    </div>
                </div>
            </section>

            <Link to = 'inLavorazione'>
                <button>per guardare il componente singolo</button>
            </Link>}
        </>
    )
}

export default ComponenteSingolo;*/