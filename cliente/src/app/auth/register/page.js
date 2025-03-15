"use client";
import { useState } from "react";
import Link from "next/link";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mensaje, setMensaje] = useState(""); // Para mostrar mensajes de éxito o error

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMensaje("❌ Las contraseñas no coinciden");
      return;
    }

    const datosUsuario = { email, password };

    try {
      const respuesta = await fetch("http://localhost:4000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datosUsuario),
      });

      const data = await respuesta.json();

      if (respuesta.ok) {
        setMensaje("✅ Registro realizado con éxito. Ahora puedes iniciar sesión.");
      } else {
        setMensaje(`❌ Error: ${data.message || "No se pudo registrar"}`);
      }
    } catch (error) {
      setMensaje("❌ Error al conectar con el servidor.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 bg-dark text-white shadow-lg" style={{ width: "25rem" }}>
        <h2 className="text-center">📝 Registro</h2>

        <form onSubmit={handleRegister} className="mt-3">
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

        {mensaje && <p className="text-center mt-3">{mensaje}</p>}

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






