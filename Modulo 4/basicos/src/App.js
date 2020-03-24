import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";
import Carrito from "./components/Carrito";


function App() {
  //productos contiene el estado actual, mienteras que
  //set es lo que modifica ese estado
  const [productos, setProductos] = useState([
    { id: 1, nombre: "Camisa cuadrille", precio: 850 },
    { id: 2, nombre: "Zapatos con cordones", precio: 1520 },
    { id: 3, nombre: "Jeans Mom", precio: 730 },
    { id: 4, nombre: "Remera Rebel", precio: 415 }
  ]);

    const fecha = new Date().getFullYear();

    const [ carrito, agregarProducto]= useState([]);

  //map devuelve un valor a diferencia del for 
  //each que solo los recorre
  // los paraentesis dan por implicito un return
  return (
    <Fragment>
      <Header 
        titulo="Tienda virtual" />

      <h2>Listado de productos</h2>
      
      {productos.map(producto=>(
        <Producto
         key = {producto.id} 
         producto = {producto}
         carrito = {carrito}
         productos = {productos}
         agregarProducto = {agregarProducto}
         esCarrito= {false}
         />

      ))}

      <Carrito
        carrito = {carrito}
        agregarProducto = {agregarProducto}
      />


      <Footer fecha={fecha} />
    </Fragment>
  );
}

export default App;
