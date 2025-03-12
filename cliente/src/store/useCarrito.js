import { create } from "zustand";

const useCarrito = create((set) => ({
  carrito: [],
  agregarProducto: (producto) =>
    set((state) => {
      const existe = state.carrito.find((p) => p.id === producto.id);
      if (existe) {
        return {
          carrito: state.carrito.map((p) =>
            p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
          ),
        };
      }
      return { carrito: [...state.carrito, { ...producto, cantidad: 1 }] };
    }),
  eliminarProducto: (id) =>
    set((state) => ({
      carrito: state.carrito.filter((producto) => producto.id !== id),
    })),
  actualizarCantidad: (id, cantidad) =>
    set((state) => ({
      carrito: state.carrito.map((producto) =>
        producto.id === id ? { ...producto, cantidad } : producto
      ),
    })),
}));

export default useCarrito;
