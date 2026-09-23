import Titulo from './Titulo.jsx';
import Tabla from './Tabla.jsx';
function App() {
  const listaDeMiembros = [
    { id: 1, nombre: 'Kiko', edad: 28, pais: 'España' },
    { id: 2, nombre: 'Juan', edad: 34, pais: 'México' },
    { id: 3, nombre: 'Sofía', edad: 22, pais: 'Colombia' }
  ];

  return (
    <div>
      <Titulo></Titulo>
      <Tabla datos={listaDeMiembros} />
    </div>
  )
}

export default App
