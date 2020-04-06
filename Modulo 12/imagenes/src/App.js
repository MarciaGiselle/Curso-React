import React, { useState, useEffect, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from "./Components/Formulario";
import ListadoImagenes from "./Components/ListadoImagenes";

function App() {
  const [busqueda, guardarBusqueda] = useState("");
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    if (busqueda !== "") {
      const consultarApi = async () => {
        const cantidadResultados = 30;
        const key = "15908797-faf4e6bfba283d2909612150c";
        const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${cantidadResultados}`;

        const respuesta = await fetch(url);
        const imagenes = await respuesta.json();

        setImagenes(imagenes.hits);
      };
      consultarApi();
    }
  }, [busqueda]);

  return (
    <Fragment>
      <div className="jumbotron">
        <h5 className="lead text-center">Banco de imágenes</h5>

        <Formulario guardarBusqueda={guardarBusqueda} />
      </div>

      <div className="row justify-content-center">
        <ListadoImagenes
          imagenes={imagenes}
        />
      </div>
    </Fragment>
  );
}

export default App;
