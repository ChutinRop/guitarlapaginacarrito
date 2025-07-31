import { useState } from 'react'
import Guitar from "./components/Guitar"
import Header from "./components/Header"
import { db } from './data/db'

function App() {
  const [data] = useState(db)
  const [carrito, setCarrito] = useState([])

  const agregarAlCarrito = producto => {
    const existe = carrito.find(item => item.id === producto.id)
    if (existe) {
      const carritoActualizado = carrito.map(item =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      )
      setCarrito(carritoActualizado)
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }])
    }
  }

  const incrementarCantidad = id => {
    const actualizado = carrito.map(item =>
      item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
    )
    setCarrito(actualizado)
  }

  const decrementarCantidad = id => {
    const actualizado = carrito
      .map(item =>
        item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
      )
      .filter(item => item.cantidad > 0) // elimina si cantidad es 0
    setCarrito(actualizado)
  }

  const eliminarProducto = id => {
    setCarrito(carrito.filter(item => item.id !== id))
  }

  const vaciarCarrito = () => {
    setCarrito([])
  }

  return (
    <>
      <Header
        carrito={carrito}
        incrementarCantidad={incrementarCantidad}
        decrementarCantidad={decrementarCantidad}
        eliminarProducto={eliminarProducto}
        vaciarCarrito={vaciarCarrito}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => (
            <Guitar
              key={guitar.id}
              guitar={guitar}
              agregarAlCarrito={agregarAlCarrito}
            />
          ))}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  )
}

export default App