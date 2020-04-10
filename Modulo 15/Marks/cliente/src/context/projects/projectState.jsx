import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import { 
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL
 } from '../../types';

const ProjectState = props => {

    const proyectos = [
        { id: 1, nombre: "Tienda Virtual" },
        { id: 2, nombre: "Intranet" },
        { id: 3, nombre: "Diseño de sitio web" }
    ]

    const inicialState = {
        proyectos : [],
        formularioProyecto : false,
        errorFormulario: false,
        proyectoActual: null
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

    //agregar nuevo proyecto
    const agregarProyectos = nuevoProyecto => {
        nuevoProyecto.id = uuid();
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: nuevoProyecto
        })
    }

    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    const seleccionarProyecto = id => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: id
        })
    }

    return(
        <projectContext.Provider
            value={{
                formularioProyecto: state.formularioProyecto,
                proyectos: state.proyectos,
                errorFormulario : state.errorFormulario,
                proyectoActual : state.proyectoActual,
                mostrarError,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyectos,
                seleccionarProyecto   
            }}
        >
            {props.children}
        </projectContext.Provider>
    )

}

export default ProjectState;