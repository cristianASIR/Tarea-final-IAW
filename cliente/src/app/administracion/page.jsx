"use client";
import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="admin-panel">
      <aside className="sidebar">
        <h2>Admin Panel</h2>
        <ul>
          <li>
            <Link href="/administracion/productos">Productos</Link>
          </li>
          <li>
            <Link href="/administracion/productos/agregar">Editar Productos</Link>
          </li>
        </ul>
      </aside>
      <main className="content">
        <h1>Bienvenido al Panel de Administración</h1>
        <p>Selecciona una sección para comenzar.</p>
      </main>
    </div>
  );
}