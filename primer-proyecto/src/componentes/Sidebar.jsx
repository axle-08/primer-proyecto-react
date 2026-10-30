import { opcionesMenu } from "../data/menu";

function Sidebar() {
  return (
    <aside className="sidebar">
        <h2 className="sidebar-titulo">Hola, Carlos Alexander Cuaspud Leon</h2>
        <h3 className="sidebar-titulo">Menú</h3>
        <nav>   
            <ul className="sidebar-Menu">
              {opcionesMenu.map((opcion)=> (
                <li key={opcion.id}>
                  <a href={opcion.url}>
                    {opcion.icono} {opcion.texto}
                  </a>
                </li>
              ))}

            </ul>
        </nav>
        <p className="sidebar-pie">3312943 - ADSO</p>
    </aside>
  );
}
export default Sidebar;