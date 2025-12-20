import { epoche } from '../mainEpoche/datiEpoche';

const HumanEpoche = () => {
    return (
        <section id = "bigSectionEpoche">
            <div>
                <h1>Epoche</h1>
                <hr />
            </div>

            <section>
                {epoche.map((epoca) => {
                    return (
                        <div
                            key={epoca.id}
                            id={`epoca-${epoca.title.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                            <div>
                                <h4>{epoca.title}</h4>
                                <p>{epoca.intro}</p>
                                <p>{epoca.testo}</p>
                            </div>
                        </div>
                    );
                })}
            </section>
        </section>
    );
};

export default HumanEpoche;
