"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import useCarrito from "@/store/useCarrito";

export default function Carrito() {
  const { carrito, eliminarProducto, actualizarCantidad, vaciarCarrito } = useCarrito();

  const precioTotal = carrito.reduce(
    (total, producto) => total + producto.precio * producto.cantidad,
    0
  );

  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary mb-4">🛒 Tu Carrito</h1>

      {carrito.length === 0 ? (
        <div className="alert alert-warning text-center">El carrito está vacío</div>
      ) : (
        <div className="row justify-content-center">
          {carrito.map((producto) => (
            <div key={producto.id} className="col-md-6 mb-4">
              <div className="card bg-dark text-white shadow-lg">
                <div className="row g-0 align-items-center">
                  
                  <div className="col-4">
                    <img
                      src={producto.imagen}
                      className="img-fluid rounded-start"
                      alt={producto.nombre}
                      style={{ height: "100px", objectFit: "cover" }}
                    />
                  </div>

                  <div className="col-8">
                    <div className="card-body">
                      <h5 className="card-title">{producto.nombre}</h5>
                      <p className="card-text text-warning fw-bold">
                        {producto.precio} €
                      </p>

                      <div className="d-flex align-items-center gap-2">
                        <button className="btn btn-sm btn-outline-light" onClick={() => actualizarCantidad(producto.id, producto.cantidad - 1)}>➖</button>
                        <span className="text-white">{producto.cantidad}</span>
                        <button className="btn btn-sm btn-outline-light" onClick={() => actualizarCantidad(producto.id, producto.cantidad + 1)}>➕</button>
                      </div>

                      <button onClick={() => eliminarProducto(producto.id)} className="btn btn-danger btn-sm mt-2 w-100">❌ Eliminar</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="col-md-6 mt-4">
            <div className="alert alert-info text-center fs-4 fw-bold">
              💰 Total: {precioTotal.toFixed(2)} €
            </div>
            <button className="btn btn-danger w-100 mt-2" onClick={vaciarCarrito}>🗑 Vaciar Carrito</button>
          </div>
        </div>
      )}
    </div>
  );
}










