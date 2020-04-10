import { FORMULARIO_PROYECTO, OBTENER_PROYECTOS, AGREGAR_PROYECTO, VALIDAR_FORMULARIO, PROYECTO_ACTUAL } from '../../types';

export default (state, action) => {
    switch(action.type) {
        case FORMULARIO_PROYECTO:
            return{
                ...state,
                formularioProyecto : true
            }
        case OBTENER_PROYECTOS:
            return {
                ...state,
                proyectos: action.payload
            }    
        case AGREGAR_PROYECTO:    
            return {
                ...state,
                //el objecto se agrega al array q teniamos
                proyectos: [...state.proyectos, action.payload],
                formularioProyecto: false,
                errorFormulario: false

            }
        case VALIDAR_FORMULARIO:
            return {
                ...state,
                errorFormulario: true
            }
        case PROYECTO_ACTUAL:
            return {
                ...state,
                proyectoActual: ([...state.proyectos].filter(proyecto => proyecto.id === action.payload))[0]
            }     


        default:
            return state;
    }
}