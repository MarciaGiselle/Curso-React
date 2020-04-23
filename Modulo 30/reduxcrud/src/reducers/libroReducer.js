import {
    NUEVO_LIBRO,
    NUEVO_LIBRO_EXITO,
    NUEVO_LIBRO_ERROR
} 
from '../types';

const initialState = {
    libros: [],
    error: null,
    loading: false
}

export default function (state = initialState, action){
    switch(action.type){
        case NUEVO_LIBRO:
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
        case NUEVO_LIBRO_ERROR:
            return{
                ...state,
                error: true,
                loading: false,

            }    
        default: 
            return state;
    }
}