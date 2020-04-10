import React, { useReducer } from 'react'
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import { 
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS
 } from '../../types';



const ProjectState = props => {

    const proyectos = [
        { id: 1, nombre: "Tienda Virtual" },
        { id: 2, nombre: "Intranet" },
        { id: 3, nombre: "Diseño de sitio web" }
    ]

    const inicialState = {
        proyectos : [],
        formularioProyecto : false
    }

    //Dispatch para ejecutar las acciones
    const [ state, dispatch ] =  useReducer(projectReducer, inicialState);

    //funciones del crud
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    //Obtener los proyectos
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }

    return(
        <projectContext.Provider
            value={{
                formularioProyecto: state.formularioProyecto,
                proyectos: state.proyectos,
                mostrarFormulario,
                obtenerProyectos   
            }}
        >
            {props.children}
        </projectContext.Provider>
    )

}

export default ProjectState;