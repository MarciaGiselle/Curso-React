import {
    OBTENER_LIBRO_EDITAR,
    COMENZAR_EDICION_LIBRO,
    LIBRO_EDITADO_EXITO,
    LIBRO_EDITADO_ERROR,
} 
from '../types';

import clienteAxios from '../config/axios';

export function obtenerLibroAEditar(libro){
    return (dispatch) => {
        dispatch({
            type: OBTENER_LIBRO_EDITAR,
            payload: libro
        });
    }
}

export function editarLibroAction(libro){
    return async(dispatch) => {
        dispatch({
            type: COMENZAR_EDICION_LIBRO,
            payload: libro
        })

        try {
            await clienteAxios.put(`libros/${libro.id}`, libro);
            dispatch( editarLibroExito(libro));

            
        } catch (error) {
            console.log(error);
            dispatch( libroEditadoError());
        }
    }
}

const editarLibroExito = (libro) => ({
    type: LIBRO_EDITADO_EXITO,
    payload: libro
});

const libroEditadoError = () => ({
    type: LIBRO_EDITADO_ERROR
})

