"use client";
import { useState, useEffect } from "react";

const useCarrito = (idcliente) => {
  const [carrito, setCarrito] = useState([]);

  // 📌 Cargar el carrito desde localStorage al iniciar
  useEffect(() => {
    const carritoGuardado = localStorage.getItem(`carrito_cliente_${idcliente}`);
    if (carritoGuardado) {
      try {
        setCarrito(JSON.parse(carritoGuardado));
      } catch (error) {
        console.error("Error al cargar el carrito desde localStorage:", error);
        setCarrito([]);
      }
    }
  }, [idcliente]);

  // 📌 Guardar el carrito en `localStorage` cada vez que cambie
  useEffect(() => {
    if (carrito.length > 0) {
      localStorage.setItem(`carrito_cliente_${idcliente}`, JSON.stringify(carrito));
    } else {
      localStorage.removeItem(`carrito_cliente_${idcliente}`);
    }
  }, [carrito, idcliente]);

  // 📌 Agregar producto sin eliminar los anteriores
  const agregarProducto = (producto) => {
    setCarrito((prevCarrito) => {
      // Busca si el producto ya existe en el carrito
      const productoExistente = prevCarrito.find((p) => p.idproducto === producto.idproducto);

      let nuevoCarrito;
      if (productoExistente) {
        // Si el producto ya existe, incrementa su cantidad
        nuevoCarrito = prevCarrito.map((p) =>
          p.idproducto === producto.idproducto ? { ...p, cantidad: p.cantidad + 1 } : p
        );
      } else {
        // Si el producto no existe, agrégalo al carrito con cantidad 1
        nuevoCarrito = [...prevCarrito, { ...producto, cantidad: 1 }];
      }

      console.log("Nuevo carrito después de agregar producto:", nuevoCarrito); // Depuración
      return nuevoCarrito;
    });
  };

  // 📌 Eliminar un producto del carrito
  const eliminarProducto = (idproducto) => {
    setCarrito((prevCarrito) => {
      const nuevoCarrito = prevCarrito.filter((producto) => producto.idproducto !== idproducto);
      console.log("Nuevo carrito después de eliminar producto:", nuevoCarrito); // Depuración
      return nuevoCarrito;
    });
  };

  // 📌 Vaciar el carrito completamente
  const vaciarCarrito = () => {
    setCarrito([]);
    console.log("Carrito vaciado"); // Depuración
  };

  // 📌 Actualizar la cantidad de un producto
  const actualizarCantidad = (idproducto, cantidad) => {
    setCarrito((prevCarrito) =>
      prevCarrito.map((producto) =>
        producto.idproducto === idproducto ? { ...producto, cantidad: Math.max(1, cantidad) } : producto
      )
    );
  };

  return { carrito, agregarProducto, eliminarProducto, actualizarCantidad, vaciarCarrito };
};

export default useCarrito;