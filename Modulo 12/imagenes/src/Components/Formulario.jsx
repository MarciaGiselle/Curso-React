import React, { useState } from "react";
import Error from './Error';
import PropTypes from 'prop-types';

const Formulario = ({ guardarBusqueda }) => {
  const [termino, setTermino] = useState("");
  const [error, setError] = useState(false);

  const submitForm = e => {
    e.preventDefault();

    if (termino.trim() === "") {
      setError(true);
      return;
    }

    setError(false);
    guardarBusqueda(termino);
  };

  return (
    <div className="container">
      <form onSubmit={submitForm}>
        <div className="row">
          <div className="form-group col-md-9">
            <input
              type="text"
              className="form-control from-control-lg"
              placeholder="Busca café, fútbol, regalos ..."
              onChange={(e) => setTermino(e.target.value)}
              value={termino}
            />
          </div>

          <div className="form-group col-md-3">
            <input
              type="submit"
              className="btn  btn-primary btn-block"
              value="Buscar imagen"
            />
          </div>
        </div>
        {error ? (
          <Error 
            mensaje='Ingrese una búsqueda'
          />
        ) : null}
      </form>
    </div>
  );
};


Formulario.propTypes={
  guardarBusqueda:PropTypes.func.isRequired
}

export default Formulario;
