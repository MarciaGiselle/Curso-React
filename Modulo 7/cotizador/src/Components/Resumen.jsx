import React from "react";
import styled from "@emotion/styled";
import PropTypes from 'prop-types';


const ContenedorResumen = styled.div`
    padding: 1rem 2rem;
    background-color: lightgray;
    color: black;
    margin-top:1rem;
    text-align: center;
`

const Resumen = ({ seguro }) => {
  const { marca, year, plan } = seguro;
  if (marca === "" || year === "" || plan === "") return null;

  return (
    <ContenedorResumen>
      <h5>Resumen de cotización</h5>
      <ul>
        <li>Marca: {marca === '1' ? 'AMERICANO' : (marca === '2' ? 'ASIATICO' : 'EUROPEO')}</li>
        <li>Año: {year}</li>
        <li>Plan: {plan.toUpperCase()}</li>
      </ul>
    </ContenedorResumen>
  );
};

Resumen.propTypes={
seguro: PropTypes.object.isRequired
}
export default Resumen;
