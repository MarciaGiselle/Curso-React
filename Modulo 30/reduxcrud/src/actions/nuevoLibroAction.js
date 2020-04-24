import {
    NUEVO_LIBRO,
    NUEVO_LIBRO_EXITO,
    NUEVO_LIBRO_ERROR
} 
from '../types';

import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

export function  crearNuevoLibroAction (libro) {
    return async (dispatch) => {
        dispatch({
            type: NUEVO_LIBRO
        });

        try {
            await clienteAxios.post('/libros', libro);
            dispatch (agregarLibroExito(libro));

            //alerta
            Swal.fire(
                'Bien hecho!',
                'Libro agregado correctamente',
                'success'
              )
        } catch (error) {
            dispatch( agregarLibroError());

            //aleta
            Swal.fire({
                icon:'error',
                title: 'Ha ocurrido un error',
                text:'Intenta nuevamente '
            })
        }
    }
}

const agregarLibroExito = libro =>({
    type:  NUEVO_LIBRO_EXITO,
    payload: libro
});

const agregarLibroError= () => ({
    type: NUEVO_LIBRO_ERROR
})