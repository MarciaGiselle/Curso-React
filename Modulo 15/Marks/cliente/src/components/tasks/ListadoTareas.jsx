import React, { Fragment, useContext } from 'react';
import Tarea from './Tarea';
import projectContext from '../../context/projects/projectContext';

const ListadoTareas = () => {

    const proyectoContext = useContext(projectContext);
    const{ materiaActual, eliminarMateria } = proyectoContext;
    
  
    const listadoTareas = [
        {nombre:'Agregar carrito', estado:true},
        {nombre:'Login cliente', estado:false},
        {nombre:'Acomodar cards', estado:false}

    ]
    return (  
        <Fragment>
            <h2>Materia {materiaActual.nombre}</h2>

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
                onClick={ () => eliminarMateria(materiaActual.id)}
            >
                Eliminar Materia &times;
            </button>

        </Fragment>
    );
}
 
export default ListadoTareas;