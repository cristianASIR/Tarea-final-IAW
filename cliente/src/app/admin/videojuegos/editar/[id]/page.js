"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditarProducto() {
  const { id } = useParams(); // Obtiene el id del producto de la URL
  const [producto, setProducto] = useState({});
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagen, setImagen] = useState("");
  const router = useRouter();

  // Obtener los datos del producto cuando se carga la página
  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const respuesta = await fetch(`http://localhost:4000/videojuegos/${id}`);
        if (!respuesta.ok) throw new Error("No se pudo obtener el producto");
        const data = await respuesta.json();
        setProducto(data);
        setNombre(data.nombre);
        setPrecio(data.precio);
        setDescripcion(data.descripcion);
        setImagen(data.imagen);
      } catch (error) {
        console.error("❌ Error cargando el producto:", error);
      }
    };

    fetchProducto();
  }, [id]);

  // Función para actualizar el producto
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) {
      alert("No tienes permisos para realizar esta acción.");
      return;
    }

    const productoActualizado = { nombre, precio, descripcion, imagen };

    try {
      const respuesta = await fetch(`http://localhost:4000/videojuegos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(productoActualizado),
      });

      if (!respuesta.ok) throw new Error("Error al actualizar el producto");

      alert("✅ Producto actualizado correctamente");
      router.push("/admin"); // Redirige al panel de administración
    } catch (error) {
      console.error("❌ Error actualizando el producto:", error);
      alert("❌ No se pudo actualizar el producto.");
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Editar Videojuego</h1>

      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Precio</label>
          <input
            type="number"
            className="form-control"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <textarea
            className="form-control"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Imagen URL</label>
          <input
            type="text"
            className="form-control"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success w-100">Guardar Cambios</button>
      </form>
    </div>
  );
}
