import React, { useState, useEffect, Fragment } from "react";
import styled from "@emotion/styled";
import Frase from "./Components/Frase";

const Conteneder = styled.div`
  display: flex;
  align-items: center;
  padding-top: 3rem;
  flex-direction: column-reverse;
`;
const Boton = styled.button`
  background: white;
  color: green;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 3rem;
  margin-bottom:0.5rem;
  padding: 1rem 3rem;
  font-size: 1.5rem;
  border: 2px solid #024c12;
  border-radius: 2rem;
  transition: background-color 0.8s ease;
  transition: color 0.8s ease;

  :hover {
    cursor: pointer;
    background-color: green;
    color: white;
  }
`;
const Error = styled.p`
  padding: 1rem;
  background-color: red;
  color: white;
  border-radius: 2rem;
  margin-top: 1rem;
  font-size: 1.5rem;
`;
function App() {
  const [frase, setFrase] = useState({});

  const [error, setError] = useState(false);
  //una manera de obtener la informacion
  /*const consultarAPI= () => {
  const api = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
  const frase = api.then(respuesta => respuesta.json());
  frase.then(resultado =>  console.log(resultado));
  }*/

  //otra manera, mucho mas corta
  //async ejecuta el codigo hasta que la parte de await se complete
  const consultarAPI = async () => {
    if (navigator.onLine) {
      const api = await fetch(
        "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
      );
      const frase = await api.json();
      setFrase(frase[0]);
    } else {
      setError(true);
    }
  };

  //funciona como un document ready
  useEffect(() => {
    consultarAPI();
  }, []);

  return (
    <Conteneder>
      {error ? (
        <Error>Necesita conexión a internet</Error>
      ) : (
        <Fragment>
          <Boton onClick={consultarAPI}>Obtener frase</Boton>
          <Frase frase={frase}></Frase>
        </Fragment>
      )}
    </Conteneder>
  );
}

export default App;
