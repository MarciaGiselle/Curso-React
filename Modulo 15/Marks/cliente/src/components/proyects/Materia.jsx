import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

const Materia = ({materia}) => {
    const proyectoContext = useContext(projectContext);
    const{ seleccionarMateria } = proyectoContext;

    const tareasContext = useContext(taskContext);
    const{ obtenerTareasDeMateria } = tareasContext;


    const obtenerMateria = id => {
        seleccionarMateria(id);
        obtenerTareasDeMateria(id)
    }


    return (  
        <li>
            <button
                type='button'
                className='btn btn-blank'
                onClick = {() => obtenerMateria(materia.id) }
            >
                {materia.nombre}
            </button>
        </li>
    );
}
 
export default Materia;