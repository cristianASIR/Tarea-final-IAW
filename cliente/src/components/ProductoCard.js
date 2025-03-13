"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import useCarrito from "@/store/useCarrito";
import "@/styles/producto.css";

export default function ProductoCard({ producto }) {
  const { agregarProducto } = useCarrito();
  const [agregado, setAgregado] = useState(false);

  const precioConDescuento = producto.descuento
    ? (producto.precio - (producto.precio * producto.descuento) / 100).toFixed(2)
    : producto.precio.toFixed(2);

  const handleAgregar = () => {
    agregarProducto(producto);
    setAgregado(true);
    setTimeout(() => setAgregado(false), 1000);
  };

  return (
    <div className="card text-white bg-dark shadow-lg h-100">
      {producto.descuento && (
        <span className="position-absolute top-0 start-0 badge bg-danger">
          🔥 -{producto.descuento}%
        </span>
      )}
      <img
        src={producto.imagen}
        className="card-img-top img-fluid"
        alt={producto.nombre}
        style={{ height: "250px", objectFit: "cover" }}
      />
      <div className="card-body text-center">
        <h5 className="card-title neon-text">{producto.nombre}</h5> {/* 🔹 Aplicamos la clase de neón */}

        {producto.descuento ? (
          <p className="card-text">
            <span className="text-danger fw-bold">{precioConDescuento} €</span>{" "}
            <span className="text-muted text-decoration-line-through">
              {producto.precio.toFixed(2)} €
            </span>
          </p>
        ) : (
          <p className="card-text text-warning fw-bold">{producto.precio.toFixed(2)} €</p>
        )}

        <button
          onClick={handleAgregar}
          className={`btn w-100 fw-bold ${agregado ? "btn-success animate" : "btn-primary"}`}
        >
          {agregado ? "✔ Agregado" : "🛒 Agregar al Carrito"}
        </button>
      </div>
    </div>
  );
}










