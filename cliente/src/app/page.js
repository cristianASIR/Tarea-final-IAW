"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import ProductoCard from "@/components/ProductoCard";

export default function Home() {
  const [productos] = useState([
    // 🎮 Juegos con descuento
    {
      id: 1,
      nombre: "The Witcher 3: Wild Hunt",
      precio: 29.99,
      descuento: 20, // 🔥 20% de descuento
      imagen: "https://www.mobygames.com/images/covers/l/392214-the-witcher-3-wild-hunt-xbox-one-front-cover.jpg",
    },
    {
      id: 2,
      nombre: "Cyberpunk 2077",
      precio: 39.99,
      descuento: 15, // 🔥 15% de descuento
      imagen: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/capsule_616x353.jpg?t=1663663573",
    },
    {
      id: 3,
      nombre: "Red Dead Redemption 2",
      precio: 34.99,
      descuento: 10, // 🔥 10% de descuento
      imagen: "https://upload.wikimedia.org/wikipedia/commons/2/22/Red_Dead_Redemption_2_Logo.png",
    },
    {
      id: 4,
      nombre: "Assassin's Creed Valhalla",
      precio: 44.99,
      descuento: 25, // 🔥 25% de descuento
      imagen: "https://cdn1.epicgames.com/400347196e674de89c23cc2a7f2121db/offer/AC%20KINGDOM%20PREORDER_STANDARD%20EDITION_EPIC_Key_Art_Wide_3840x2160-3840x2160-485fe17203671386c71bde8110886c7d.jpg",
    },
    {
      id: 5,
      nombre: "Resident Evil Village",
      precio: 49.99,
      descuento: 18, // 🔥 18% de descuento
      imagen: "https://image.api.playstation.com/vulcan/ap/rnd/202301/2605/54BqvGNsYNo4YtHlvzpbprEX.png",
    },
    {
      id: 6,
      nombre: "Doom Eternal",
      precio: 39.99,
      descuento: 12, // 🔥 12% de descuento
      imagen: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_DoomEternal.jpg",
    },

    // 🎮 Juegos sin descuento
    {
      id: 7,
      nombre: "Elden Ring",
      precio: 49.99,
      imagen: "https://www.mobygames.com/images/covers/l/775869-elden-ring-xbox-series-front-cover.jpg",
    },
    {
      id: 8,
      nombre: "God of War",
      precio: 44.99,
      imagen: "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg",
    },
    {
      id: 9,
      nombre: "Hogwarts Legacy",
      precio: 59.99,
      imagen: "https://cdn1.epicgames.com/offer/e97659b501af4e3981d5430dad170911/EGS_HogwartsLegacy_AvalancheSoftware_S1_2560x1440-2baf3188eb3c1aa248bcc1af6a927b7e",
    },
    {
      id: 10,
      nombre: "Final Fantasy VII Remake",
      precio: 59.99,
      imagen: "https://image.api.playstation.com/vulcan/img/rnd/202010/0723/vDLeyNzrJdGwabFlEo44GkEZ.png?w=440",
    },
    {
      id: 11,
      nombre: "Spider-Man: Miles Morales",
      precio: 49.99,
      imagen: "https://cdn1.epicgames.com/offer/f696430be718494fac1d6542cfb22542/EGS_MarvelsSpiderManMilesMorales_InsomniacGamesNixxesSoftware_S1_2560x1440-a0518b9f9f36a05294e37448df8a27a0",
    },
    {
      id: 12,
      nombre: "The Legend of Zelda: Breath of the Wild",
      precio: 59.99,
      imagen: "https://www.zelda.com/breath-of-the-wild/assets/icons/BOTW-Share_icon.jpg",
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






