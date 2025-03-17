"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import ProductoCard from "@/components/ProductoCard";

export default function Home() {
  const [productos, setProducts] = useState([]);

  useEffect(() => {
    // Realiza la solicitud a la API para obtener la lista de videojuegos
    fetch("http://localhost:4000/videojuegos") 
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error("Error al obtener productos:", error));
  }, []);
  
  return (
    <div className="container mt-5">
      <h1 className="text-center neon-title">🔥 Ofertas de la Semana 🔥</h1>
      <div className="row justify-content-center">
        {/* Muestra una tarjeta por cada producto */}
        {productos.map((producto) => (
          <div key={producto.id} className="col-md-4 mb-4">
            <ProductoCard producto={producto} /> {/* Componente que muestra la información de cada videojuego */}
          </div>
        ))}
      </div>
    </div>
  );
}



