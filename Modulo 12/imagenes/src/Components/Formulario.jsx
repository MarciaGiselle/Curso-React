import React, { useState } from "react";
import Error from './Error';

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
          <div className="form-group col-md-8">
            <input
              type="text"
              className="form-control from-control-lg"
              placeholder="Busca cafe, futbol, regalos ..."
              onChange={(e) => setTermino(e.target.value)}
              value={termino}
            />
          </div>

          <div className="form-group col-md-4">
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

export default Formulario;
