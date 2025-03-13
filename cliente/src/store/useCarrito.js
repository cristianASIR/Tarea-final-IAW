"use client";
import { useState, useEffect } from "react";

const useCarrito = () => {
  const [carrito, setCarrito] = useState([]);

  // 📌 Cargar el carrito desde `localStorage` al iniciar
  useEffect(() => {
    const carritoGuardado = localStorage.getItem("carrito");
    if (carritoGuardado) {
      try {
        setCarrito(JSON.parse(carritoGuardado));
      } catch (error) {
        console.error("Error al cargar el carrito desde localStorage:", error);
        setCarrito([]);
      }
    }
  }, []);

  // 📌 Guardar el carrito en `localStorage` cada vez que cambie
  useEffect(() => {
    if (carrito.length > 0) {
      localStorage.setItem("carrito", JSON.stringify(carrito));
    } else {
      localStorage.removeItem("carrito");
    }
  }, [carrito]);

  // 📌 Agregar producto sin reemplazar los anteriores
  const agregarProducto = (producto) => {
    setCarrito((prevCarrito) => {
      const carritoActual = JSON.parse(localStorage.getItem("carrito")) || [];

      const productoExistente = carritoActual.find((p) => p.id === producto.id);

      let nuevoCarrito;
      if (productoExistente) {
        nuevoCarrito = carritoActual.map((p) =>
          p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
        );
      } else {
        nuevoCarrito = [...carritoActual, { ...producto, cantidad: 1 }];
      }

      localStorage.setItem("carrito", JSON.stringify(nuevoCarrito)); // Guardar en `localStorage`
      return nuevoCarrito;
    });
  };

  // 📌 Eliminar un producto del carrito
  const eliminarProducto = (id) => {
    setCarrito((prevCarrito) => {
      const nuevoCarrito = prevCarrito.filter((producto) => producto.id !== id);
      localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
      return nuevoCarrito;
    });
  };

  // 📌 Vaciar el carrito completamente
  const vaciarCarrito = () => {
    setCarrito([]);
    localStorage.removeItem("carrito");
  };

  // 📌 Actualizar la cantidad de un producto
  const actualizarCantidad = (id, cantidad) => {
    setCarrito((prevCarrito) =>
      prevCarrito.map((producto) =>
        producto.id === id ? { ...producto, cantidad: Math.max(1, cantidad) } : producto
      )
    );
  };

  return { carrito, agregarProducto, eliminarProducto, actualizarCantidad, vaciarCarrito };
};

export default useCarrito;






