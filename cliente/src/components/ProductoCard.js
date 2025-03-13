"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import useCarrito from "@/store/useCarrito"; 

export default function ProductoCard({ producto }) {
  const { agregarProducto } = useCarrito();
  const [agregado, setAgregado] = useState(false);

  const handleAgregar = () => {
    agregarProducto(producto);
    setAgregado(true);

    // 🕒 Volver al estado normal después de 1 segundo
    setTimeout(() => setAgregado(false), 1000);
  };

  return (
    <div className="card text-white bg-dark shadow-lg h-100">
      <img
        src={producto.imagen}
        className="card-img-top img-fluid"
        alt={producto.nombre}
        style={{ height: "250px", objectFit: "cover" }}
      />
      <div className="card-body text-center">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text text-warning fw-bold">{producto.precio} €</p>

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








