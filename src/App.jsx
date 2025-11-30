import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a TecnoStore! Aca encontraras componentes, perifericos, y servicio tecnico, para tus consolas o PC." />
    </>
  )
}

export default App