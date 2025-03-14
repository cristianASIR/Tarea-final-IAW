"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import useCarrito from "@/store/useCarrito";

export default function Carrito() {
  const { carrito, eliminarProducto, actualizarCantidad, vaciarCarrito } = useCarrito();

  // 📌 Calcular el precio final con descuento
  const calcularPrecio = (producto) => {
    return producto.descuento
      ? (producto.precio - (producto.precio * producto.descuento) / 100).toFixed(2)
      : producto.precio.toFixed(2);
  };

  const precioTotal = carrito.reduce(
    (total, producto) => total + calcularPrecio(producto) * producto.cantidad,
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
                      {producto.descuento ? (
                        <p className="card-text">
                          <span className="text-danger fw-bold">{calcularPrecio(producto)} €</span>{" "}
                          <span className="text-muted text-decoration-line-through">
                            {producto.precio.toFixed(2)} €
                          </span>{" "}
                          <span className="badge bg-warning text-dark">-{producto.descuento}%</span>
                        </p>
                      ) : (
                        <p className="card-text text-warning fw-bold">{producto.precio.toFixed(2)} €</p>
                      )}

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











