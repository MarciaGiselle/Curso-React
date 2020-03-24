import React from "react";
import './producto.css';

const Producto = ({ producto, carrito, productos, agregarProducto, esCarrito }) => {
  const { nombre, precio, id } = producto;
  //agregar producto al carrito
  
  const seleccionarProducto = id => {
        const producto = productos.filter(producto => producto.id === id)[0];
        agregarProducto([
            ...carrito, producto
            ]); 
  };

  //.filter crea una copia del arreglo, elimina el seleccionado de ese array 
  const eliminarProducto = id => {
      const productos = carrito.filter(producto => producto.id !== id)
      //coloca los producto en el state
      agregarProducto(productos);
  }
  return (
        <div className='producto'>
                <div className='imagen'></div>
                <h2><a href='#'>{nombre}</a></h2>
                <h3>Precio      $ <b>{precio}</b></h3>
    
            {(esCarrito)
            ?
                (<button 
                    type="button"
                    className = "btn eliminar"
                    onClick={() => eliminarProducto(id)} >
                Eliminar
                </button>)
            :
                (<button 
                    type="button" 
                    className = "btn comprar"
                    onClick={() => seleccionarProducto(id)}>
                Comprar
                </button>
                )
            
            }
            </div>
       
            
      );
};

export default Producto;
