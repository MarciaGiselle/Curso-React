import React, { useState, useEffect, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from "./Components/Formulario";
import ListadoImagenes from "./Components/ListadoImagenes";
import Paginador from "./Components/Paginador";
import Error from './Components/Error';

function App() {
  const [busqueda, guardarBusqueda] = useState("");
  const [imagenes, setImagenes] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (busqueda !== "") {
      const consultarApi = async () => {
        const cantidadResultados = 30;
        const key = "15908797-faf4e6bfba283d2909612150c";
        const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${cantidadResultados}&page=${paginaActual}`;

        const respuesta = await fetch(url);
        const imagenes = await respuesta.json();

        
        if(imagenes.totalHits !== 0){
          setImagenes(imagenes.hits);
          //total paginas
          const totalPaginas = Math.ceil(imagenes.totalHits / cantidadResultados);
          setTotalPaginas(totalPaginas);
          setError(false);
        }else{
           setError(true); 
        }

        const jumbotron = document.querySelector(".jumbotron");
        jumbotron.scrollIntoView({ behavior: "smooth" });
      };
      consultarApi();
    }
  }, [busqueda, paginaActual]);

  return (
    <Fragment>
      <div className="jumbotron">
        <div className="container px-5">
          <h5 className="lead text-center mb-4">Banco de imágenes</h5>
          <Formulario guardarBusqueda={guardarBusqueda} />
        </div>
      </div>

      <div className="container">
      {error ? (
          <Error 
            mensaje='No hay resultados para la búsqueda ingresada'
          />
        ) : null}
      </div>

      <div className="row justify-content-center">
     
        <ListadoImagenes imagenes={imagenes} />
      </div>

      <Paginador
        paginaActual={paginaActual}
        totalPaginas={totalPaginas}
        setPaginaActual={setPaginaActual}
      />
    </Fragment>
  );
}

export default App;
