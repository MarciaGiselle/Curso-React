import React, { Fragment } from 'react';
import Tarea from './Tarea';

const ListadoTareas = () => {

    const listadoTareas = [
        {nombre:'Agregar carrito', estado:true},
        {nombre:'Login cliente', estado:false},
        {nombre:'Acomodar cards', estado:false}

    ]
    return (  
        <Fragment>
            <h2>Proyecto Tienda Virtual</h2>

            <ul className='listado-tareas'>
                {listadoTareas.length === 0 ?
                <li className='tarea'>
                    <p>No hay tareas</p>
                </li>
                :
                listadoTareas.map(tarea=>(
                    <Tarea
                        key={tarea.nombre}
                        tarea={tarea}
                    />
                ))
                }
            </ul>

            <button
                type='button'
                className='btn btn-eliminar'
            >
                Eliminar Proyecto &times;
            </button>

        </Fragment>
    );
}
 
export default ListadoTareas;