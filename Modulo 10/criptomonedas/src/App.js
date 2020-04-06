import React, { Fragment, useState, useEffect } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import Formulario from "./Components/Formulario";
import Cotizacion from "./Components/Cotizacion";
import Spinner from "./Components/Spinner";


const Contenedor = styled.div`
  max-width: 900px;
  margin: 2rem auto;
  background-color: white;
  padding: 2rem ;
  padding-bottom:4rem;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Heading = styled.h1`
  color: rgb(102, 0, 111);
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 30px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: black;
    display: block;
  }
`;
function App() {
  const [moneda, setMoneda] = useState("");
  const [criptomoneda, setCriptomoneda] = useState("");
  const [resultado, setResultado] = useState({});
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    //evitamo la ejecucion la primera vez
    if (moneda !== "") {
      const consultaApi = async () => {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        const respuesta = await axios.get(url);

        setSpinner(true);
        setTimeout(() => {
          setSpinner(false);
          setResultado(respuesta.data.DISPLAY[criptomoneda][moneda]);
        }, 3000);
      };

      consultaApi();
    }
  }, [moneda, criptomoneda]);

  return (
    <Fragment>
      <Contenedor>
        <div>
          <Heading>Cotizá</Heading>
          <Formulario
            setMoneda={setMoneda}
            setCriptomoneda={setCriptomoneda}
          ></Formulario>
        </div>
        <div>
          {spinner ?
            <Spinner></Spinner>
          :
          <Cotizacion resultado={resultado} Heading={Heading}></Cotizacion>
          
          }
        </div>
      </Contenedor>
    </Fragment>
  );
}

export default App;
