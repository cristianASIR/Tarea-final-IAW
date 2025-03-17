"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  // Estados para capturar los datos del usuario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState(""); // Para mostrar mensajes de error o éxito
  const router = useRouter();

  // Envío del formulario de inicio de sesión
  const handleLogin = async (e) => {
    e.preventDefault();

    // Verifica si los campos están completos
    if (!email || !password) {
      setMensaje("❌ Por favor, completa todos los campos.");
      return;
    }

    // Los datos a enviar
    const credenciales = { email, password };

    try {
      // Envía una solicitud a la API para autenticar al usuario
      const respuesta = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credenciales),
      });

      const data = await respuesta.json();

      // Si se autentica con éxito, se almacena el token
      if (respuesta.ok && data.token) {
        // Guardamos el token en localStorage y sessionStorage
        localStorage.setItem("token", data.token);
        sessionStorage.setItem("token", data.token);

        // Mensaje de éxito
        setMensaje("✅ Inicio de sesión exitoso. Redirigiendo...");
    
        window.dispatchEvent(new Event("authChange"));

        // Redirige al usuario a la página de videojuegos
        setTimeout(() => router.push("/videojuegos"), 1000);
      } else {
        setMensaje(`❌ Error: ${data.message || "Credenciales incorrectas"}`);
      }
    } catch (error) {
      // Si hay un problema de conexión con el servidor
      setMensaje("❌ Error al conectar con el servidor.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 bg-dark text-white shadow-lg" style={{ width: "25rem" }}>
        <h2 className="text-center">🔑 Iniciar Sesión</h2>

        {/* Formulario de inicio de sesión */}
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

        {/* Mensaje de error o éxito */}
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




