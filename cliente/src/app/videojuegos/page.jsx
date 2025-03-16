"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Link from "next/link";


export default function VideojuegosPage() {
  const [videojuegos, setVideojuegos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchVideojuegos = async () => {
      try {
        console.log("Haciendo solicitud a la API..."); // Debug
        const response = await fetch("http://localhost:4000/videojuegos");
        if (!response.ok) {
          throw new Error(`Error HTTP! Estado: ${response.status}`);
        }
        const data = await response.json();
        console.log("Datos recibidos de la API:", data); // Debug
        setVideojuegos(data);
      } catch (error) {
        console.error("Error al obtener los videojuegos:", error); // Debug
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };


    fetchVideojuegos();
  }, []);


  if (loading) return <p>Cargando videojuegos...</p>;
  if (error) return <p>Error: {error}</p>;


  return (
    <div className="container mt-5">
      <h1 className="text-center">🎮 Lista de Videojuegos 🎮</h1><br/>
      <div className="row justify-content-center">
        {videojuegos.map((videojuego) => {
          // Calcula el precio con descuento (si aplica)
          const precioConDescuento = videojuego.descuento
            ? (videojuego.precio - (videojuego.precio * videojuego.descuento) / 100).toFixed(2)
            : videojuego.precio.toFixed(2);


          return (
            <div key={videojuego.idproducto} className="col-md-4 mb-4">
              <div className="card text-white bg-dark shadow-lg h-100">
                {videojuego.descuento && (
                  <span className="position-absolute top-0 start-0 badge bg-danger">
                    🔥 -{videojuego.descuento}%
                  </span>
                )}
                <img
                  src={videojuego.imagen}
                  className="card-img-top img-fluid"
                  alt={videojuego.nombre} 
                  onError={(e) => {
                    e.target.src = "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1663663573"; }}
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title neon-text">{videojuego.nombre}</h5> {/* 🔹 Aplicamos la clase de neón */}


                  {videojuego.descuento ? (
                    <p className="card-text">
                      <span className="text-danger fw-bold">{precioConDescuento} €</span>{" "}
                      <span className="text-muted text-decoration-line-through">
                        {videojuego.precio.toFixed(2)} €
                      </span>
                    </p>
                  ) : (
                    <p className="card-text text-warning fw-bold">{videojuego.precio.toFixed(2)} €</p>
                  )}


                  {/* Botón "Más información" en lugar del botón de la cesta */}
                  <Link
                    href={`/videojuegos/${videojuego.idproducto}`}
                    className="btn btn-primary w-100 fw-bold"
                  >
                    Más información
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

