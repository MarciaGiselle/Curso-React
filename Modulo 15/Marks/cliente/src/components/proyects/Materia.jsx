import React, { useContext } from 'react';
import projectContext from '../../context/projects/projectContext';

const Materia = ({materia}) => {
    const proyectoContext = useContext(projectContext);
    const{ seleccionarMateria } = proyectoContext;


    return (  
        <li>
            <button
                type='button'
                className='btn btn-blank'
                onClick = {() => seleccionarMateria(materia.id)}
            >
                {materia.nombre}
            </button>
        </li>
    );
}
 
export default Materia;