import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { editarLibroAction} from '../actions/editarLibroAction';


const EditarLibro = () => {
  
  const [libro, setLibro] = useState({
    titulo :'', 
    precio : 0
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const libroEditar = useSelector(state => state.libro.libroEditar);
  //if(!libroEditar) return null;
  
  useEffect(() => {
    if(libroEditar){
      setLibro(libroEditar);
    }
  }, [libroEditar])
  
  const {titulo, precio} = libro;
  const handleChange = e => {
    setLibro({
      ...libro,
     [ e.target.name] : e.target.value
    })
  }
  const submitEditarProducto = e => {
    e.preventDefault();

    //validar
    if(titulo.trim() === '' || precio <= 0 ){
      return;
    }
    dispatch( editarLibroAction (libro));
    history.push('/');    
  }

    return ( 
    <div className="row justify-content-center mt-4">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
               Editar Libro
            </h2>
            <form onSubmit= {submitEditarProducto}>
              <div className="form-group">
                <label>Título</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Titulo del libro"
                  name="titulo"
                  value={titulo}
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
                  value={precio}
                  onChange= {handleChange}

                />
              </div>
              <button type="submit" className="btn btn-primary d-block w-100">
                Guardar cambios
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
     );
}
 
export default EditarLibro;