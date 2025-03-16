// src/app/administracion/productos/page.jsx
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function ProductosPage() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Llamada a la API para obtener los productos
    fetch("http://localhost:4000/videojuegos")
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleEliminar = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/videojuegos/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.ok) {
        setProductos(productos.filter((producto) => producto.idproducto !== id));
      }
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
    }
  };

  return (
    <ProtectedRoute>
      <div className="container mt-5">
        <h1 className="text-center">Gestionar Productos</h1>
        <Link href="/administracion/productos/agregar" className="btn btn-success mb-3">
          Agregar Nuevo Producto
        </Link>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto.idproducto}>
                <td>{producto.nombre}</td>
                <td>${producto.precio}</td>
                <td>
                  <Link href={`/administracion/productos/editar/${producto.idproducto}`} className="btn btn-warning me-2">
                    Editar
                  </Link>
                  <button onClick={() => handleEliminar(producto.idproducto)} className="btn btn-danger">
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ProtectedRoute>
  );
}