"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMensaje("❌ Por favor, completa todos los campos.");
      return;
    }

    const credenciales = { email, password };

    try {
      const respuesta = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credenciales),
      });

      const data = await respuesta.json();

      if (respuesta.ok && data.token) {
        localStorage.setItem("token", data.token); // ✅ Guardamos el token
        setMensaje("✅ Inicio de sesión exitoso. Redirigiendo...");

        // 🔹 Notificamos al navbar que hay un nuevo usuario autenticado
        window.dispatchEvent(new Event("storage"));

        // 🔹 Redirigir a "/videojuegos"
        setTimeout(() => router.push("/videojuegos"), 1500);
      } else {
        setMensaje(`❌ Error: ${data.message || "Credenciales incorrectas"}`);
      }
    } catch (error) {
      setMensaje("❌ Error al conectar con el servidor.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 bg-dark text-white shadow-lg" style={{ width: "25rem" }}>
        <h2 className="text-center">🔑 Iniciar Sesión</h2>

        <form onSubmit={handleLogin} className="mt-3">
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

          <button type="submit" className="btn btn-primary w-100">
            Iniciar Sesión
          </button>
        </form>

        {mensaje && <p className="text-center mt-3">{mensaje}</p>}

        <p className="text-center mt-3">
          ¿No tienes cuenta?{" "}
          <Link href="/auth/register" className="text-info">
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
}




