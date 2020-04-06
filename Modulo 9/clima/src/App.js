import React, { Fragment, useState, useEffect } from "react";
import styled from "@emotion/styled";
import Header from "./Components/Header";
import Formulario from "./Components/Formulario";
import Clima from "./Components/Clima";
import Error from "./Components/Error";
import Footer from "./Components/Footer";

const DivFormulario = styled.div`
  box-shadow: 4px 6px 25px 0px rgba(0, 0, 0, 0.35);
  padding: 1.5rem;
  margin: 1.5rem 1rem 0rem 1rem;
  display: flex;
`;

function App() {
  const [busqueda, setBusqueda] = useState({
    ciudad: "buenos aires",
    pais: "AR"
  });

  //state que controla el llamado a la api
  const [consulta, setConsulta] = useState(true);
  const [respuesta, setRespuesta] = useState({});
  const [error, setError] = useState(false);
  const [mensaje, setMensaje] = useState();
  const { ciudad, pais } = busqueda;

  useEffect(() => {
    if(consulta){
      const consultarAPI = async () => {
        const apiId = "48ff985ac62f3e5d281c81d064b1f76d";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiId}`;
        const respuesta = await (await fetch(url)).json();
        setRespuesta(respuesta);
        setConsulta(false);
        if (respuesta.cod === "404") {
          setError(true);
          setMensaje('No hay resultados para la búsqueda ingresada.')
        }else{
          setError(false);
        }
      };
      consultarAPI();
    }
  }, [consulta, ciudad, pais]);

  return (
    <Fragment>
      <main>
      <Header titulo="Clima App"></Header>
      <div className="row">
        <div className="col m6 s12">
          <DivFormulario>
            <Formulario
              busqueda={busqueda}
              setBusqueda={setBusqueda}
              setConsulta={setConsulta}
              setMensaje={setMensaje}
              mensaje={mensaje}
              setError={setError}
            />
          </DivFormulario>
        </div>

        <div className="col m6 s12">
          <DivFormulario>
            {error ? <Error mensaje={mensaje} /> : <Clima respuesta={respuesta} />}
          </DivFormulario>
        </div>
      </div>
      </main>
      <Footer/>
    </Fragment>
  );
}

export default App;
