import React from "react";
import Producto from "./Producto";
import "./carrito.css";

const Carrito = ({ carrito, agregarProducto }) => (
  <div className="carrito">
    <h2>Carrito</h2>
    {carrito.length === 0 ? (
      <h2>No hay productos</h2>
    ) : (
      carrito.map(producto => (
        <Producto 
            key={producto.id} 
            producto={producto}
            carrito={carrito}
            agregarProducto={agregarProducto}
            esCarrito = {true} />
      ))
    )}
  </div>
);

export default Carrito;
