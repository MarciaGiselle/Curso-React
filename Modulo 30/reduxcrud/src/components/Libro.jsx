import React from 'react';
import {  useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { eliminarLibroAction } from '../actions/eliminarLibroActions';
import { obtenerLibroAEditar } from '../actions/editarLibroAction';
import Swal from 'sweetalert2';

const Libro = ({libro}) => {

    const dispatch = useDispatch();
    const history = useHistory();
   
    const obtenerLibro = id => {
        //alert consulta al usuario
        Swal.fire({
            title: 'Estás seguro?',
            text: "Un libro que se elimina no se puede recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!',
            cancelButtonText: 'Cancelar'

          }).then((result) => {
            if (result.value) {
                dispatch(eliminarLibroAction(id));
            }
          })
    }

    const redireccionEdiccion = libro =>{
        dispatch(obtenerLibroAEditar(libro));
        history.push(`/libros/editar/${libro.id}`);
    }

    return (  
        <tr>
            <td className='font-weight-bold'>{libro.titulo}</td>
            <td>{libro.precio}</td>
            <td className='acciones d-inline-block'>
                <button
                    type= 'button'
                    className='btn btn-primary mr-2'
                    onClick= {() => redireccionEdiccion(libro)}
                >Editar</button>

                <button
                    type= 'button'
                    className='btn btn-danger mr-2'
                    onClick = {()=> obtenerLibro(libro.id)}
                >
                Eliminar
                </button>

            </td>
        </tr>
    );
}
 
export default Libro;

