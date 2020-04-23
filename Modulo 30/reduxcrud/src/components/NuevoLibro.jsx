import React from "react";

const NuevoLibro = () => {
  return (
    <div className="row justify-content-center mt-4">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              &#43; Nuevo Libro
            </h2>
            <form>
              <div className="form-group">
                <label>Título</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Titulo del libro"
                  name="titulo"
                />
              </div>
              <div className="form-group">
                <label>Precio</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio del libro"
                  name="precio"
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
