"use client";
import { useState } from "react";
import Link from "next/link";

export default function Register() {
  // Estados para capturar los datos del usuario
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Función para el registro del usuario
  const handleRegister = async (e) => {
    e.preventDefault();

    // Verifica si las contraseñas coinciden antes de enviar la solicitud, si no, sale un error
    if (password !== confirmPassword) {
      alert("❌ Las contraseñas no coinciden");
      return;
    }

    // Datos del usuario que enviaremos a la API
    const usuario = {
      nombre,
      apellido,
      email,
      telefono,
      direccion,
      password,
    };

    try {
      // Enviamos una solicitud a la API para registrar al usuario
      const response = await fetch("http://localhost:4000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      });

      if (response.ok) {
        alert("✅ Registro exitoso. Ahora puedes iniciar sesión.");
      } else {
        alert("❌ Error en el registro. Inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("❌ Error al conectar con el servidor:", error);
      alert("❌ Hubo un problema en la conexión con el servidor.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 bg-dark text-white shadow-lg" style={{ width: "25rem" }}>
        <h2 className="text-center">📝 Registro</h2>

        {/* Formulario de registro */}
        <form onSubmit={handleRegister} className="mt-3">
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
            <label className="form-label">Apellido</label>
            <input
              type="text"
              className="form-control"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Correo Electrónico</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Teléfono</label>
            <input
              type="text"
              className="form-control"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Dirección</label>
            <input
              type="text"
              className="form-control"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Confirmar Contraseña</label>
            <input
              type="password"
              className="form-control"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Registrarse
          </button>
        </form>

        <p className="text-center mt-3">
          ¿Ya tienes cuenta?{" "}
          <Link href="/auth/login" className="text-info">
            Inicia Sesión
          </Link>
        </p>
      </div>
    </div>
  );
}







