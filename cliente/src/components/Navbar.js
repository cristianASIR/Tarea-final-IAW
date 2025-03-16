"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaShoppingCart, FaUserPlus, FaUser, FaSignOutAlt, FaGamepad, FaInfoCircle } from "react-icons/fa";

export default function Navbar() {
  const [carrito, setCarrito] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  // ✅ Verificar si hay un token guardado al cargar la página
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Si hay token, el usuario está logueado
  }, []);

  // ✅ Cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem("token"); // Eliminar el token
    setIsLoggedIn(false); // Actualizar el estado
    router.push("/videojuegos"); // 🔄 Redirigir a la página de videojuegos
  };

  // ✅ Cargar el carrito desde localStorage
  useEffect(() => {
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
    setCarrito(carritoGuardado);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top shadow-lg">
      <div className="container">
        {/* Logo de la Tienda */}
        <Link href="/" className="navbar-brand fw-bold">
          🎮 Tienda de Videojuegos
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

        {/* Enlaces del Navbar */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/videojuegos" className="nav-link">Videojuegos</Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">
                <FaInfoCircle className="me-1" /> About
              </Link>
            </li>
          </ul>
        </div>

        {/* Botones de Usuario y Carrito */}
        <div className="d-flex gap-2">
          {isLoggedIn ? (
            <>
              {/* ✅ Botón de Panel de Administración (Ruta corregida) */}
              <Link href="/admin" className="btn btn-light d-flex align-items-center">
                <FaGamepad className="me-2" />
                Panel Admin
              </Link>

              {/* ✅ Botón de Cerrar Sesión */}
              <button onClick={handleLogout} className="btn btn-danger d-flex align-items-center">
                <FaSignOutAlt className="me-2" />
                Cerrar Sesión
              </button>
            </>
          ) : (
            <>
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
            </>
          )}

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










