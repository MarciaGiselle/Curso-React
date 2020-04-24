import {
    NUEVO_LIBRO,
    NUEVO_LIBRO_EXITO,
    NUEVO_LIBRO_ERROR,
    LISTADO_LIBROS,
    DESCARGA_LIBROS_EXITO,
    DESCARGA_LIBROS_ERROR,
    OBTENER_LIBRO_ELIMINAR,
    LIBRO_ELIMINADO_EXITO,
    LIBRO_ELIMINADO_ERROR,
    OBTENER_LIBRO_EDITAR,
    COMENZAR_EDICION_LIBRO,
    LIBRO_EDITADO_EXITO,
    LIBRO_EDITADO_ERROR
} 
from '../types';

const initialState = {
    libros: [],
    error: null,
    loading: false,
    libroEliminar: null,
    libroEditar: null
}

export default function (state = initialState, action){
    switch(action.type){
        case NUEVO_LIBRO:
        case LISTADO_LIBROS:
            return{
                ...state,
                loading: true
                }
        case NUEVO_LIBRO_EXITO:
            return{
                ...state,
                loading: false,
                error: false,
                libros: [...state.libros, action.payload]
            }
        case DESCARGA_LIBROS_ERROR:    
        case NUEVO_LIBRO_ERROR:
        case LIBRO_ELIMINADO_ERROR:
        case LIBRO_EDITADO_ERROR:
            return{
                ...state,
                error: true,
                loading: false,
            }    
        case DESCARGA_LIBROS_EXITO:    
            return {
                ...state,
                loading: false,
                error: false,
                libros: action.payload
            }
        case OBTENER_LIBRO_ELIMINAR:
            return {
                ...state,
                libroEliminar: action.payload,
                loading: true,
            }
        case LIBRO_ELIMINADO_EXITO:
            return {
                ...state,
                libros: state.libros.filter( libro => libro.id !== state.libroEliminar ),
                libroEliminar: null,
                error: false,
                loading: false,
            }    
        case OBTENER_LIBRO_EDITAR:    
            return {
                ...state,
                libroEditar: action.payload  
            }
        case COMENZAR_EDICION_LIBRO:
            return {
                ...state,
                loading: true
            } 
        case LIBRO_EDITADO_EXITO:
            return {
                ...state,
                libroEditar: null,
                error: false,
                loading: false,
                libros: state.libros.map( libro => 
                    libro.id === action.payload.id ?
                    libro = action.payload :
                    libro
                )
            }    

        default: 
            return state;
    }
}