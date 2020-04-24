import {
  LISTADO_LIBROS,
  DESCARGA_LIBROS_EXITO,
  DESCARGA_LIBROS_ERROR,
} from "../types";

import clienteAxios from "../config/axios";
import Swal from "sweetalert2";

export function getLibrosAction() {
  return async (dispatch) => {
    dispatch({
      type: LISTADO_LIBROS,
    });
    try {
      const libros = await clienteAxios.get("/libros");
      dispatch (cargarLibrosExito(libros.data));

    } catch (error) {
        dispatch (cargarLibrosError());
    }
  };
}

const cargarLibrosExito = (libros)=>({
    type: DESCARGA_LIBROS_EXITO,
    payload: libros
})

const cargarLibrosError = () =>({
    type: DESCARGA_LIBROS_ERROR
})