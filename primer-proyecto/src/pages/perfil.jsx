import Presentacion from "../componentes/Presentacion";

function Perfil(){
    return (
        <Presentacion
            nombre="Alexander Leon"
            ciudad="Popayan"
            anioNacimiento={2008}
            meta="Acabar el sena"
        />
    );
}

export default Perfil;