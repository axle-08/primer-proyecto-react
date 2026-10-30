import { Link } from "react-router";

function Inicio() {
    const programa = 'Análisis y Desarrollo de Software';

    return (
        <section>
            <h1>Bienvenidos al programa {programa}</h1>
            <p>Este es el dashboard de la competencia de frontend con React.</p>
            <p>
                Empieza por conocer <Link to="/perfil">mi perfil</Link> o revisa
                las <Link to="/tecnologias">tecnologías</Link> que vamos a trabajar.
            </p>
        </section>
    );
}


export default Inicio