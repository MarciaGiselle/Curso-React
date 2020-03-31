import React, { Fragment, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import styled from "@emotion/styled";
import Header from "./Components/Header";
import Formulario from './Components/Formulario';
import Resumen from './Components/Resumen';
import Resultado from './Components/Resultado';
import Spinner from './Components/Spinner';

const ContenedorFormulario = styled.div`
  border: 2px solid #673ab7;
  padding: 2rem;
  border-radius:1rem;
  margin: 0 auto;
  width: 40%;
`;

function App() {
  const[resumen, setResumen]= useState({
    cotizacion : 0,
    seguro :{
      marca: '',
      year: '',
      plan: ''
    }
  });

  const [spinner, setSpinner]= useState(false);


  return (
    <Fragment>
      <Header titulo="Cotizador de seguros" />
      <ContenedorFormulario id='contenedorFormulario'>
        <Formulario
          setResumen = {setResumen}
          setSpinner = {setSpinner}
        />
        {spinner ? <Spinner/> : 
         <Fragment>
          <Resumen seguro= {resumen.seguro}/> 
          <Resultado cotizacion = {resumen.cotizacion}/>
        </Fragment>}
      </ContenedorFormulario> 
    </Fragment>
  );
}

export default App;
