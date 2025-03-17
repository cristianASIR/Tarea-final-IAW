"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react"; 
import useCarrito from "@/store/useCarrito"; 
import "@/styles/producto.css";

export default function ProductoCard({ producto }) {
  const { agregarProducto } = useCarrito(); // Obtiene la función agregarProducto del carrito
  const [agregado, setAgregado] = useState(false); // Estado para saber si el producto ha sido agregado al carrito

  // Calcula el precio con descuento, si aplica
  const precioConDescuento = producto.descuento
    ? (producto.precio - (producto.precio * producto.descuento) / 100).toFixed(2)
    : producto.precio.toFixed(2);

  // Función para agregar un producto al carrito
  const handleAgregar = () => {
    agregarProducto(producto); // Llama a la función agregarProducto para añadir el producto al carrito
    setAgregado(true); // Actualiza el estado a "agregado"
    setTimeout(() => setAgregado(false), 1000); // Resetea el estado de "agregado" después de 1 segundo
  };

  return (
    <div className="card text-white bg-dark shadow-lg h-100">
      {/* Si el producto tiene un descuento, muestra la etiqueta */}
      {producto.descuento && (
        <span className="position-absolute top-0 start-0 badge bg-danger">
          🔥 -{producto.descuento}%
        </span>
      )}
      {/* Imagen del producto */}
      <img
        src={producto.imagen}
        className="card-img-top img-fluid"
        alt={producto.nombre}
        style={{ height: "250px", objectFit: "cover" }} 
      />
      <div className="card-body text-center">
        <h5 className="card-title neon-text">{producto.nombre}</h5>

        {/* Si el producto tiene descuento, muestra el precio con descuento y el precio original tachado */}
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

        {/* Botón para agregar el producto al carrito */}
        <button
          onClick={handleAgregar} // Dispara la función handleAgregar al hacer click
          className={`btn w-100 fw-bold ${agregado ? "btn-success animate" : "btn-primary"}`}
        >
          {/* Cambia el texto y el estilo del botón si el producto ya ha sido agregado */}
          {agregado ? "✔ Agregado" : "🛒 Agregar al Carrito"}
        </button>
      </div>
    </div>
  );
}











