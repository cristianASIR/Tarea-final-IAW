"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export default function AdminVideojuegos() {
  const [videojuegos, setVideojuegos] = useState([]); 
  const [nombre, setNombre] = useState(""); 
  const [precio, setPrecio] = useState(""); 
  const [descripcion, setDescripcion] = useState(""); 
  const [imagen, setImagen] = useState(""); 
  const [mensaje, setMensaje] = useState(""); 
  const router = useRouter();

  // ✅ Obtener videojuegos al cargar la página
  useEffect(() => {
    const token = localStorage.getItem("token"); // Verifica si el token está en el localStorage

    if (!token) {
      alert("No tienes permisos para ver esta página. Inicia sesión."); // Si no hay token, redirige al login
      router.push("/auth/login");
      return;
    }

    fetchVideojuegos(token); // Si hay token, carga los videojuegos
  }, [router]);

  // Función para obtener la lista de videojuegos desde la API
  const fetchVideojuegos = async (token) => {
    try {
      const respuesta = await fetch("http://localhost:4000/videojuegos", {
        headers: { Authorization: `Bearer ${token}` }, // Autorización con el token
      });
      if (!respuesta.ok) throw new Error("No se pudieron cargar los videojuegos");

      const data = await respuesta.json(); 
      setVideojuegos(data); // Almacena la lista de videojuegos en el estado
    } catch (error) {
      console.error("❌ Error cargando videojuegos:", error); 
    }
  };

  // Función para agregar un nuevo videojuego
  const handleAdd = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) {
      alert("No tienes permisos para realizar esta acción."); // Si no hay token, avisa al usuario
      return;
    }

    const nuevoVideojuego = { nombre, precio, descripcion, imagen };

    try {
      const respuesta = await fetch("http://localhost:4000/videojuegos", {
        method: "POST", // Método POST para enviar un nuevo videojuego
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Autorización con el token
        },
        body: JSON.stringify(nuevoVideojuego),
      });

      if (!respuesta.ok) throw new Error("Error al agregar el videojuego");

      const data = await respuesta.json(); // Obtiene los datos del videojuego agregado
      setVideojuegos([...videojuegos, data]); // Añade el nuevo videojuego a la lista de videojuegos
      setMensaje("✅ Videojuego agregado correctamente"); // Mensaje de éxito
      setNombre(""); 
      setPrecio(""); 
      setDescripcion(""); 
      setImagen(""); 
    } catch (error) {
      console.error("❌ Error al agregar videojuego:", error); 
      setMensaje("❌ No se pudo agregar el videojuego."); 
    }
  };

  // 🔹 Función para eliminar un videojuego
  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("No tienes permisos para realizar esta acción."); // Si no hay token, avisa al usuario
      return;
    }

    const confirmDelete = window.confirm("¿Estás seguro de eliminar este videojuego?"); // Confirma si el usuario quiere eliminar el videojuego
    if (!confirmDelete) return; // Si no confirma, no hace nada

    try {
      const respuesta = await fetch(`http://localhost:4000/videojuegos/${id}`, {
        method: "DELETE", // Método DELETE para eliminar un videojuego
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Autorización con el token
        },
      });

      if (!respuesta.ok) throw new Error("No se pudo eliminar el videojuego");

      alert("✅ Videojuego eliminado correctamente"); // Mensaje de éxito
      setVideojuegos(videojuegos.filter((juego) => juego.idproducto !== id)); // Elimina el videojuego de la lista
    } catch (error) {
      console.error("❌ Error al eliminar videojuego:", error); 
      alert("❌ Hubo un problema al eliminar el videojuego."); 
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-light mb-4">
        🎮 Panel de Administración de Videojuegos
      </h1>

      {/* Formulario para agregar un nuevo videojuego */}
      <div className="card p-4 bg-dark text-white shadow-lg border-0">
        <h3 className="text-center">Agregar un nuevo videojuego</h3>
        <form onSubmit={handleAdd} className="mt-3">
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
          <button type="submit" className="btn btn-success w-100">Agregar Videojuego</button>
        </form>
      </div>

      {mensaje && <p className="text-success text-center mt-3">{mensaje}</p>}

      {/* Listado de videojuegos */}
      <h2 className="mt-5 text-light">📜 Lista de Videojuegos</h2>
      <div className="row">
        {videojuegos.length > 0 ? (
          videojuegos.map((juego) => (
            <div key={juego.idproducto} className="col-md-4 mb-4">
              <div className="card bg-dark text-white shadow-lg border-0">
                <img src={juego.imagen} className="card-img-top img-fluid rounded" alt={juego.nombre} style={{ height: "200px", objectFit: "cover" }} />
                <div className="card-body">
                  <h5 className="card-title text-center">{juego.nombre}</h5>
                  <p className="text-center"><span role="img" aria-label="money">💰</span> Precio: {isNaN(juego.precio) ? "Precio no disponible" : Number(juego.precio).toFixed(2)} €</p>
                  <p className="text-center">{juego.descripcion}</p>

                  {/* Enlace para editar el videojuego */}
                  <Link
                    href={`/admin/videojuegos/editar/${juego.idproducto}`}
                    className="btn btn-warning w-100 mt-2"
                  >
                    Editar
                  </Link>

                  <button onClick={() => handleDelete(juego.idproducto)} className="btn btn-danger w-100 mt-2">
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-light">⏳ Cargando videojuegos...</p>
        )}
      </div>
    </div>
  );
}






