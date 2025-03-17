"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

export default function Carrito() {
  const [carrito, setCarrito] = useState([]);

  // Cargar el carrito desde localStorage al iniciar
  useEffect(() => {
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
    setCarrito(carritoGuardado);
  }, []);

  // Guardar el carrito en localStorage cada vez que cambia
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  // Función para eliminar un producto del carrito
  const eliminarProducto = (id) => {
    const nuevoCarrito = carrito.filter((producto) => producto.id !== id);
    setCarrito(nuevoCarrito);
  };

  // Función para actualizar la cantidad de un producto
  const actualizarCantidad = (id, cantidad) => {
    const nuevoCarrito = carrito.map((producto) =>
      producto.id === id ? { ...producto, cantidad: Math.max(1, cantidad) } : producto
    );
    setCarrito(nuevoCarrito);
  };

  // Calcular el total del carrito sumando el precio de cada producto por su cantidad
  const precioTotal = carrito.reduce(
    (total, producto) => total + producto.precio * producto.cantidad,
    0
  );

  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary mb-4">🛒 Tu Carrito</h1>

      {carrito.length === 0 ? (
        // Mensaje si el carrito está vacío
        <div className="alert alert-warning text-center">El carrito está vacío</div>
      ) : (
        <div className="row justify-content-center">
          {carrito.map((producto) => (
            <div key={producto.id} className="col-md-6 mb-4">
              <div className="card bg-dark text-white shadow-lg">
                <div className="row g-0 align-items-center">
                  
                  {/* Imagen del producto */}
                  <div className="col-4">
                    <img
                      src={producto.imagen}
                      className="img-fluid rounded-start"
                      alt={producto.nombre}
                      style={{ height: "100px", objectFit: "cover" }}
                    />
                  </div>

                  {/* Información del Producto */}
                  <div className="col-8">
                    <div className="card-body">
                      <h5 className="card-title">{producto.nombre}</h5>
                      <p className="card-text text-warning fw-bold">
                        {producto.precio} €
                      </p>

                      {/* Controles para actualizar la cantidad del producto */}
                      <div className="d-flex align-items-center gap-2">
                        <button
                          className="btn btn-sm btn-outline-light"
                          onClick={() => actualizarCantidad(producto.id, producto.cantidad - 1)}
                        >
                          ➖
                        </button>

                        <input
                          type="number"
                          value={producto.cantidad}
                          onChange={(e) => actualizarCantidad(producto.id, Number(e.target.value))}
                          className="form-control text-center w-25"
                          min="1"
                        />

                        <button
                          className="btn btn-sm btn-outline-light"
                          onClick={() => actualizarCantidad(producto.id, producto.cantidad + 1)}
                        >
                          ➕
                        </button>
                      </div>

                      {/* Botón de eliminar el producto */}
                      <button
                        onClick={() => eliminarProducto(producto.id)}
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

          {/* Sección para mostrar el total del carrito */}
          <div className="col-md-6 mt-4">
            <div className="alert alert-info text-center fs-4 fw-bold">
              💰 Total: {precioTotal.toFixed(2)} €
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

