"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import useCarrito from "@/store/useCarrito"; // Importa el hook del carrito


export default function VideojuegoDetallePage() {
  const { id } = useParams(); // Captura el `id` de la URL
  const [videojuego, setVideojuego] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [agregado, setAgregado] = useState(false); // Estado para el botón "Agregado"
  const { agregarProducto } = useCarrito(); // Función para agregar al carrito


  useEffect(() => {
    const fetchVideojuego = async () => {
      try {
        console.log("Haciendo solicitud a la API para el videojuego con ID:", id); // Debug
        const response = await fetch(`http://localhost:4000/videojuegos/${id}`);
        if (!response.ok) {
          throw new Error(`Error HTTP! Estado: ${response.status}`);
        }
        const data = await response.json();
        console.log("Datos recibidos de la API para el videojuego:", data); // Debug
        setVideojuego(data);
      } catch (error) {
        console.error("Error al obtener los detalles del videojuego:", error); // Debug
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };


    fetchVideojuego();
  }, [id]);


  // Función para manejar el clic en "Agregar al Carrito"
  const handleAgregar = () => {
    agregarProducto(videojuego); // Agrega el videojuego al carrito
    setAgregado(true); // Cambia el estado a "Agregado"
    setTimeout(() => setAgregado(false), 1000); // Restablece el estado después de 1 segundo
  };


  if (loading) return <p className="text-center">Cargando detalles del videojuego...</p>;
  if (error) return <p className="text-center text-danger">Error: {error}</p>;
  if (!videojuego) return <p className="text-center">No se encontró el videojuego.</p>;


  return (
    <div className="container mt-5">
      <h1 className="text-center">🎮 Detalles del Videojuego 🎮</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card text-white bg-dark shadow-lg">
            <img
              src={videojuego.imagen}
              alt={videojuego.nombre}
              className="card-img-top img-fluid"
              style={{ height: "300px", objectFit: "cover" }}
            />
            <div className="card-body text-center">
              <h5 className="card-title">{videojuego.nombre}</h5>
              <p className="card-text">Precio: ${videojuego.precio.toFixed(2)}</p>
              <p className="card-text">Descuento: {videojuego.descuento}%</p>
              <p className="card-text">Descripción: {videojuego.descripcion}</p>


              {/* Botón "Agregar al Carrito" */}
              <button
                onClick={handleAgregar}
                className={`btn w-100 fw-bold ${agregado ? "btn-success animate" : "btn-primary"}`}
              >
                {agregado ? "✔ Agregado" : "🛒 Agregar al Carrito"}
              </button>


              {/* Botón "Volver a la lista" */}
              <Link href="/videojuegos" className="btn btn-secondary w-100 mt-2">
                Volver a la lista
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
