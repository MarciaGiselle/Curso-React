import React, {useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {crearNuevoLibroAction} from '../actions/nuevoLibroAction';
import {mostrarAlerta, ocultarAlerta} from '../actions/alertaActions';

const NuevoLibro = ({history}) => {

  const dispatch = useDispatch();
  //const loading = useSelector(state => state.libro.loading);
  const alerta = useSelector(state => state.alerta.alerta);
  
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
      const alerta = {
        msg: "Campos obligatorios",
        class: "alert alert-danger text-center p-3"
      } 
      dispatch(mostrarAlerta(alerta));
      return;
    }

    //errores
    dispatch(ocultarAlerta());
    //crearNuevo
    agregarLibro(libro);
    setTimeout( ()=>{
      history.push('/')    },
      2000
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
  {alerta ? <p className={alerta.class}>{alerta.msg}</p>: null}
            
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
