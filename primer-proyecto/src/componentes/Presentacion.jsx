function Presentacion({ nombre, ciudad, anioNacimiento, meta }) {
    return (         
        <article className="presentacion">             
            <h2>Presentación</h2>             
            <p className="presentacion-nombre">{nombre}</p>
            <p><strong>Ciudad:</strong> {ciudad}</p>
            <p><strong>Año de nacimiento:</strong> {anioNacimiento}</p>
            <p><strong>Meta:</strong> {meta}</p>
        </article>     
    ); 
}  

export default Presentacion;
