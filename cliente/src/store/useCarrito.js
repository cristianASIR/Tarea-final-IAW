"use client";

import { useState, useEffect } from "react";

const useCarrito = () => {
  const [carrito, setCarrito] = useState([]);

  // Guardar el carrito en LocalStorage
  useEffect(() => {
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
    setCarrito(carritoGuardado);
  }, []);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const agregarProducto = (producto) => {
    setCarrito((prevCarrito) => [...prevCarrito, producto]);
  };

  const eliminarProducto = (id) => {
    setCarrito((prevCarrito) => prevCarrito.filter((producto) => producto.id !== id));
  };

  const actualizarCantidad = (id, cantidad) => {
    setCarrito((prevCarrito) =>
      prevCarrito.map((producto) =>
        producto.id === id ? { ...producto, cantidad } : producto
      )
    );
  };

  return { carrito, agregarProducto, eliminarProducto, actualizarCantidad };
};


export default useCarrito;

