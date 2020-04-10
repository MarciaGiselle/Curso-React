import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';

const Proyecto = ({proyecto}) => {
    const proyectoContext = useContext(projectContext);
    const{ seleccionarProyecto } = proyectoContext;


    return (  
        <li>
            <button
                type='button'
                className='btn btn-blank'
                onClick = {() => seleccionarProyecto(proyecto.id)}
            >
                {proyecto.nombre}
            </button>
        </li>
    );
}
 
export default Proyecto;