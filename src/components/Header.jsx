export default function Header({
  carrito,
  incrementarCantidad,
  decrementarCantidad,
  eliminarProducto,
  vaciarCarrito
}) {
  return (
    <header className="py-5 header">
      <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">
          <div className="col-8 col-md-3">
            <a href="index.html">
              <img
                className="img-fluid"
                src="./public/img/logo.svg"
                alt="imagen logo"
              />
            </a>
          </div>

          <div className="col-md-6 mt-4 mt-md-0">
            <h2 className="text-white">Carrito</h2>
            {carrito.length === 0 ? (
              <p className="text-white">El carrito está vacío</p>
            ) : (
              <>
                <ul className="text-white">
                  {carrito.map(producto => (
                    <li key={producto.id}>
                      {producto.name} - Cantidad: {producto.cantidad}
                      <div className="mt-1">
                        <button
                          onClick={() => incrementarCantidad(producto.id)}
                          className="btn btn-success btn-sm me-2"
                        >
                          +
                        </button>
                        <button
                          onClick={() => decrementarCantidad(producto.id)}
                          className="btn btn-warning btn-sm me-2"
                        >
                          -
                        </button>
                        <button
                          onClick={() => eliminarProducto(producto.id)}
                          className="btn btn-danger btn-sm"
                        >
                          Eliminar
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                <button
                  className="btn btn-outline-light mt-3"
                  onClick={vaciarCarrito}
                >
                  Vaciar Carrito
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}