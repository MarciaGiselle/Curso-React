import React, {useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {crearNuevoLibroAction} from '../actions/libroActions';

const NuevoLibro = ({history}) => {

  const dispatch = useDispatch();
  const loading = useSelector(state => state.libro.loading);
  const error = useSelector(state => state.libro.error);
  
  const agregarLibro = libro => dispatch(crearNuevoLibroAction(libro));

  const [libro, setLibro] = useState({
    titulo :'', 
    precio : 0
  })

  const {titulo, precio} = libro;

  const handleChange = e => {
    setLibro({
      ...libro,
     [ e.target.name] : e.target.value
    })
  }
  
  const submitNuevoLibro = e =>{
    e.preventDefault();

    //validar
    if(titulo.trim() === '' || precio <= 0 ){
      return;
    }

    //errores

    //crearNuevo
    agregarLibro(libro);
    setTimeout( ()=>{
      history.push('/')    },
      3000
    )
  }
  return (
    <div className="row justify-content-center mt-4">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              &#43; Nuevo Libro
            </h2>
            {error ? <p className='alert alert-danger p-2 text-center m-2'>Ha ocurrido un error</p>: null}
            
            <form onSubmit={ submitNuevoLibro }>
              <div className="form-group">
                <label>Título</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Titulo del libro"
                  name="titulo"
                  onChange= {handleChange}
                />
              </div>
              <div className="form-group">
                <label>Precio</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio del libro"
                  name="precio"
                  onChange= {handleChange}

                />
              </div>
              <button type="submit" className="btn btn-primary d-block w-100">
                Guardar Nuevo Libro
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoLibro;
