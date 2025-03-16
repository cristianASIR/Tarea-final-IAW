"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditarProductoPage() {
  const router = useRouter();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    nombre: "",
    precio: 0,
    descripcion: "",
    descuento: 0,
    imagen: "",
  });

  useEffect(() => {
    // Obtén los datos del producto
    const fetchProducto = async () => {
      const response = await fetch(`http://localhost:4000/videojuegos/${id}`);
      const data = await response.json();
      setFormData(data);
    };
    fetchProducto();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/videojuegos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`, // 🔹 Envía el token de autenticación
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        router.push("/admin"); // 🔹 Redirige al panel de administración
      }
    } catch (error) {
      console.error("Error al editar el producto:", error);
    }
  };

  return (
    <div>
      <h1>Editar Producto</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
        </div>
        <div>
          <label>Precio:</label>
          <input type="number" name="precio" value={formData.precio} onChange={handleChange} required />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea name="descripcion" value={formData.descripcion} onChange={handleChange} />
        </div>
        <div>
          <label>Descuento:</label>
          <input type="number" name="descuento" value={formData.descuento} onChange={handleChange} />
        </div>
        <div>
          <label>Imagen (URL):</label>
          <input type="text" name="imagen" value={formData.imagen} onChange={handleChange} required />
        </div>
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
}