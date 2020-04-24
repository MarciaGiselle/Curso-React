import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Libro from './Libro';
import {getLibrosAction} from '../actions/getLibrosAction';

const Listado = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const cargarLibros = () => dispatch(getLibrosAction());
        cargarLibros();
    }, []);
    
    const libros = useSelector(state => state.libro.libros);
    const error = useSelector(state => state.libro.error);

    return ( 
        <Fragment>
            <h2 className='text-center my-5'>Listado de productos</h2>
            {error ? <p className='alert alert-danger p-2 text-center m-2'>Ha ocurrido un error</p>: null}

            <table className='table table-striped'>
                <thead className='bg-primary table-dark'>
                    <tr>
                        <th scope='col'>Nombre</th>
                        <th scope='col'>Precio</th>
                        <th scope='col'>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {libros.length === 0 ? 
                        (
                           <p className='text-center m-2'>
                               No hay productos</p>  

                        ) :
                        (
                            libros.map(libro=> (
                                
                                <Libro
                                    key={libro.id}
                                    libro={libro}
                                />
                            ))
                        )
                    }
                </tbody>
            </table>

        </Fragment>
     );
}
 
export default Listado;