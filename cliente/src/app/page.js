"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import ProductoCard from "@/components/ProductoCard";

export default function Home() {
  const [productos] = useState([
    {
      id: 1,
      nombre: "The Witcher 3: Wild Hunt",
      precio: 29.99,
      imagen:
        "https://www.mobygames.com/images/covers/l/392214-the-witcher-3-wild-hunt-xbox-one-front-cover.jpg",
    },
    {
      id: 2,
      nombre: "Cyberpunk 2077",
      precio: 39.99,
      imagen:
        "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1663663573",
    },
    {
      id: 3,
      nombre: "Elden Ring",
      precio: 49.99,
      imagen:
        "https://www.mobygames.com/images/covers/l/775869-elden-ring-xbox-series-front-cover.jpg",
    },
    {
      id: 4,
      nombre: "Red Dead Redemption 2",
      precio: 34.99,
      imagen:
        "https://www.vg247.com/wp-content/uploads/2018/05/red_dead_redemption_2_cover_art-600x600.jpg",
    },
    {
      id: 5,
      nombre: "God of War",
      precio: 44.99,
      imagen:
        "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg",
    },
  ]);

  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary mb-4">🎮 Tienda de Videojuegos</h1>
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



