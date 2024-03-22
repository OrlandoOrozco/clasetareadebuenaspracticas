
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Ruteo } from './app/utilities/rutas/Ruteo'
import { Cabecera } from './app/components/containers/Cabecera'
function App() {

  return (
    
    <div>
      <BrowserRouter>
        <Cabecera/>

        <Ruteo/>1      
      </BrowserRouter>
    </div>
  )
}

export default App
