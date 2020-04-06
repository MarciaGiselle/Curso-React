import React from "react";
import styled from '@emotion/styled';

const Contenedor = styled.div`

  p{
    font-size: 18px;

    span{
        font-weight:bold;
    }

  }
`;

const Precio = styled.h1`
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align:center;

  &::after {
    content: "";
    margin:0;
    width: 100%;
    height: 3px;
    margin-left:1rem;
    background-color: rgb(171, 65, 180);
    display: inline-block;
  }
`;

const ContenedorResultados = styled.div`
 border: 1px solid black;
 padding: .5rem 1rem;
 border-radius:2px;


 `


const Cotizacion = ({ resultado, Heading }) => {
  if (Object.keys(resultado).length === 0) return null;

  return (
    <Contenedor>
        <Heading>Resultados</Heading>
        <ContenedorResultados>
      <Precio>El precio es : <b>{resultado.PRICE} </b></Precio>
      <p>Precio más alto del día : <span>{resultado.HIGHDAY}</span></p>
      <p>Precio más bajo del día : <span>{resultado.LOWDAY}</span></p>
      <p>Variación en las últimas 24 horas :<span> {resultado.CHANGEPCT24HOUR}</span></p>
      <p>Última actualización : <span>{resultado.LASTUPDATE}</span></p>
      </ContenedorResultados>
    </Contenedor>
  );
};

export default Cotizacion;
