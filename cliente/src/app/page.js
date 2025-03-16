"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import ProductoCard from "@/components/ProductoCard";

export default function Home() {
  const [productos, setProducts] = useState([]);
    useEffect(() => {
      // Llamada a la API para obtener los productos
      fetch('http://localhost:4000/videojuegos') 
          .then(response => response.json())
          .then(data => setProducts(data))
          .catch(error => console.error('Error fetching products:', error));
  }, []);
  

  return (
    <div className="container mt-5">
      <h1 className="text-center neon-title">🔥 Ofertas de la Semana 🔥</h1>
      <div className="row justify-content-center">
        {productos.map((producto) => (
          <div key={producto.id} className="col-md-4 mb-4">
            <ProductoCard producto={producto} />
          </div>
        ))}
      </div>
    </div>
  );
}



