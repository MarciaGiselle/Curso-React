import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import projectContext from './projectContext';
import projectReducer from './projectReducer';
import { 
    FORMULARIO_MATERIA,
    OBTENER_MATERIAS,
    AGREGAR_MATERIA,
    VALIDAR_FORMULARIO,
    MATERIA_ACTUAL,
    ELIMINAR_MATERIA
 } from '../../types';

const ProjectState = props => {

    const materias = [
        { id: 1, nombre: "Tienda Virtual" },
        { id: 2, nombre: "Intranet" },
        { id: 3, nombre: "Diseño de sitio web" }
    ]

    const inicialState = {
        materias : [],
        formularioMateria : false,
        errorFormulario: false,
        materiaActual: null
    }

    //Dispatch para ejecutar las acciones
    const [ state, dispatch ] =  useReducer(projectReducer, inicialState);

    //funciones del crud
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_MATERIA
        })
    }

    //Obtener los materias
    const obtenerMaterias = () => {
        dispatch({
            type: OBTENER_MATERIAS,
            payload: materias
        })
    }

    //agregar nuevo materia
    const agregarMaterias = nuevoMateria => {
        nuevoMateria.id = uuid();
        dispatch({
            type: AGREGAR_MATERIA,
            payload: nuevoMateria
        })
    }

    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    const seleccionarMateria = id => {
        dispatch({
            type: MATERIA_ACTUAL,
            payload: id
        })
    }

    const eliminarMateria = id => {
        dispatch({
            type: ELIMINAR_MATERIA,
            payload: id
        })
    }

    return(
        <projectContext.Provider
            value={{
                formularioMateria: state.formularioMateria,
                materias: state.materias,
                errorFormulario : state.errorFormulario,
                materiaActual : state.materiaActual,
                mostrarError,
                mostrarFormulario,
                obtenerMaterias,
                agregarMaterias,
                seleccionarMateria   ,
                eliminarMateria
            }}
        >
            {props.children}
        </projectContext.Provider>
    )

}

export default ProjectState;