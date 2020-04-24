import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { eliminarLibroAction } from '../actions/eliminarLibroActions';
import Swal from 'sweetalert2';

const Libro = ({libro}) => {

    const dispatch = useDispatch();
    const error = useSelector(state => state.libro.error);
    const obtenerLibro = id => {
        
        //consulta al usuario
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

    return (  
        <tr>
            <td className='font-weight-bold'>{libro.titulo}</td>
            <td>{libro.precio}</td>
            <td className='acciones d-inline-block'>
                <Link to={`/libros/editar/${libro.id}`}
                className='btn btn-primary mr-2'
                >Editar</Link>

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

