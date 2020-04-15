import React, { Fragment, useContext } from 'react';
import Tarea from './Tarea';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';
import {CSSTransition, TransitionGroup}from 'react-transition-group';

const ListadoTareas = () => {

    const proyectoContext = useContext(projectContext);
    const{ materiaActual, eliminarMateria } = proyectoContext;

    const tareasContext = useContext(taskContext);
    const{ tareasDeMateria } = tareasContext;
    
  
    const listadoTareas = tareasDeMateria;

    return (  
        <Fragment>
            <h2>Materia {materiaActual.nombre}</h2>

            <ul className='listado-tareas'>
                {listadoTareas.length === 0 ?
                    (<li className='tarea'>
                        <p>No hay tareas</p>
                    </li>)
                :
                    (<TransitionGroup >
                        {listadoTareas.map(tarea=>(
                            <CSSTransition
                                key={tarea.id}
                                timeout={300}
                                classNames='tarea'
                                >
                            <Tarea
                                tarea={tarea}
                                
                            />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>)
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