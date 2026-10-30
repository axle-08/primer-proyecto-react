import './App.css';
import Encabezado from './componentes/Encabezado';
import Sidebar from './componentes/Sidebar';
import PiePagina from './componentes/PiePagina';
import Presentacion from './componentes/Presentacion';
import Tarjeta from './componentes/Tarjeta';
import { tecnologias } from './data/tecnologias';
import fotoPerfil from './img/images.jpg';
import Inicio from './pages/Inicio';
import Perfil from './pages/perfil';
import { Route, Routes } from 'react-router';


function App() {
  const programa = 'Análisis y Desarrollo de Software';
  const usuario = {
  nombre: 'Carlos Alexander Cuaspud Leon',
  rol: 'Aprendiz ADSO',
  correo: 'cuaspud04@gmail.com',
  foto: fotoPerfil,
}
  return (
    <>
    <div className='layout'>
      <Encabezado usuario={usuario} />
      <Sidebar />
      <main className="contenido">
        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/perfil" element={<Perfil/>} />
        </Routes>
      </main>
      <PiePagina />
    </div>
    </>
  );
}

export default App;