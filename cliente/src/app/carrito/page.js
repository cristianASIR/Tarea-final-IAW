"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import useCarrito from "@/store/useCarrito";

export default function Carrito({ idcliente }) {
  const { carrito, eliminarProducto, actualizarCantidad, vaciarCarrito } = useCarrito(idcliente);

  const calcularPrecio = (producto) => {
    return producto.descuento
      ? (producto.precio - (producto.precio * producto.descuento) / 100).toFixed(2)
      : producto.precio.toFixed(2);
  };

  const precioTotal = carrito.reduce(
    (total, producto) => total + calcularPrecio(producto) * producto.cantidad,
    0
  );

  // 📌 Depuración: Mostrar el carrito en la consola cada vez que cambie
  useEffect(() => {
    console.log("Carrito actualizado:", carrito);
  }, [carrito]);

  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary mb-4">🛒 Tu Carrito</h1>

      {carrito.length === 0 ? (
        <div className="alert alert-warning text-center">El carrito está vacío</div>
      ) : (
        <div className="row justify-content-center">
          {carrito.map((producto) => (
            <div key={producto.idproducto} className="col-md-6 mb-4">
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

                      <div className="d-flex align-items-center gap-2">
                        <button
                          className="btn btn-sm btn-outline-light"
                          onClick={() => actualizarCantidad(producto.idproducto, producto.cantidad - 1)}
                        >
                          ➖
                        </button>
                        <span className="text-white">{producto.cantidad}</span>
                        <button
                          className="btn btn-sm btn-outline-light"
                          onClick={() => actualizarCantidad(producto.idproducto, producto.cantidad + 1)}
                        >
                          ➕
                        </button>
                      </div>

                      <button
                        onClick={() => eliminarProducto(producto.idproducto)}
                        className="btn btn-danger btn-sm mt-2 w-100"
                      >
                        ❌ Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Sección del Total y Botones */}
          <div className="col-md-6 mt-4">
            <div className="alert alert-info text-center fs-4 fw-bold">
              💰 Total: {precioTotal.toFixed(2)} €
            </div>
            
            {/* Botón para vaciar carrito */}
            <button className="btn btn-danger w-100 mt-2" onClick={vaciarCarrito}>
              🗑 Vaciar Carrito
            </button>

            {/* Botón de Comprar (solo aparecerá si hay productos) */}
            {carrito.length > 0 && (
              <button className="btn btn-success w-100 mt-3 fw-bold">
                🛒 Comprar
              </button>
            )}
          </div>
        </div>
      )}
    </div>      
  );
}