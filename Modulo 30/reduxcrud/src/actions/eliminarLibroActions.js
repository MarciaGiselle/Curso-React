import {
    OBTENER_LIBRO_ELIMINAR,
    LIBRO_ELIMINADO_EXITO,
    LIBRO_ELIMINADO_ERROR
} 
from '../types';

import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

export function eliminarLibroAction(id){
    return async (dispatch) => {
        dispatch({
            type: OBTENER_LIBRO_ELIMINAR,
            payload: id
        });

        try {
            await clienteAxios.delete(`/libros/${id}`);
            dispatch( obtenerLibroEliminarExito ());
            
            //mostar alerta
            Swal.fire(
                'Eliminado!',
                'El producto se elimino correctamente.',
                'success'
              );
        } catch (error) {
            console.log(error)
            dispatch( obtenerLibroEliminadoError ());
        }
    }
}

const obtenerLibroEliminarExito = () => ({
    type: LIBRO_ELIMINADO_EXITO
});

const obtenerLibroEliminadoError = () => ({
    type: LIBRO_ELIMINADO_ERROR
});
