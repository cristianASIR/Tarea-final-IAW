"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaShoppingCart, FaUserPlus, FaUser } from "react-icons/fa";

export default function Navbar() {
  const [carrito, setCarrito] = useState([]);

  // 📌 Cargar el carrito desde localStorage
  useEffect(() => {
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
    setCarrito(carritoGuardado);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top shadow-lg">
      <div className="container">
        {/* 📌 Logo de la Tienda */}
        <Link href="/" className="navbar-brand fw-bold">
          🎮 Tienda de videojuegos
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* 📌 Enlaces del Navbar */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/" className="nav-link">Inicio</Link>
              <Link href="/about" className="nav-link">About</Link>
            </li>
          </ul>
        </div>

        {/* 📌 Botones de Usuario y Carrito */}
        <div className="d-flex gap-2">
          {/* Botón de Login */}
          <Link href="/auth/login" className="btn btn-light d-flex align-items-center">
            <FaUser className="me-2" />
            Login
          </Link>

          {/* Botón de Registro */}
          <Link href="/auth/register" className="btn btn-light d-flex align-items-center">
            <FaUserPlus className="me-2" />
            Registro
          </Link>

          {/* Botón de Carrito */}
          <Link href="/carrito" className="btn btn-light d-flex align-items-center">
            <FaShoppingCart className="me-2" />
            {carrito.length > 0 && (
              <span className="badge bg-danger ms-1">{carrito.length}</span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}




