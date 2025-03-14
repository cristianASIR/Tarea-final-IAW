"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import ProductoCard from "@/components/ProductoCard";
import "@/styles/ofertas.css";

export default function Home() {
  const [productos] = useState([
    // 🎮 Juegos con descuento
    {
      id: 1,
      nombre: "The Witcher 3: Wild Hunt",
      precio: 29.99,
      descuento: 20,
      imagen: "https://www.mobygames.com/images/covers/l/392214-the-witcher-3-wild-hunt-xbox-one-front-cover.jpg",
    },
    {
      id: 2,
      nombre: "Cyberpunk 2077",
      precio: 39.99,
      descuento: 15,
      imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1663663573",
    },
    {
      id: 3,
      nombre: "Red Dead Redemption 2",
      precio: 34.99,
      descuento: 10,
      imagen: "https://upload.wikimedia.org/wikipedia/commons/2/22/Red_Dead_Redemption_2_Logo.png",
    },
    {
      id: 4,
      nombre: "Assassin's Creed Valhalla",
      precio: 44.99,
      descuento: 25,
      imagen: "https://cdn1.epicgames.com/400347196e674de89c23cc2a7f2121db/offer/AC%20KINGDOM%20PREORDER_STANDARD%20EDITION_EPIC_Key_Art_Wide_3840x2160-3840x2160-485fe17203671386c71bde8110886c7d.jpg",
    },
    {
      id: 5,
      nombre: "Resident Evil Village",
      precio: 49.99,
      descuento: 18,
      imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202301/2605/54BqvGNsYNo4YtHlvzpbprEX.png",
    },
  ]);

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







