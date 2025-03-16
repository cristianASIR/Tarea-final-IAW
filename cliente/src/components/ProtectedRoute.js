// src/components/ProtectedRoute.jsx
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/auth/login"); // Redirige al login si no hay token
    }
  }, [router]);

  return children; // Renderiza el contenido protegido
}