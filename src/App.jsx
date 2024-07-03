import { useState } from 'react'
import './App.css'
import Productos from './Componentes/Productos'

function App() {

  const [carrito, setCarrito] = useState([])

  const productos = [
    {id:1, nombre:"Mesa", cantidad:1},
    {id:2, nombre:"Puerta", cantidad:1},
    {id:3, nombre:"Ventana", cantidad:1},
    {id:4, nombre:"Piso", cantidad:1}
  ]

  return (
    <div className='App'>
      <h1>Carrito de compras</h1>
      <Productos productos={productos} carrito={carrito} setCarrito={setCarrito} />
    </div>
  )
}

export default App
