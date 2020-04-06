import React, { Fragment , useState} from "react";
import styled from '@emotion/styled'

const Label= styled.label`
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1rem;
    margin-top: 2rem;
    display: block;

    &::after {
    content: "";
    width: 62%;
    height: 3px;
    margin-left:1rem;
    background-color: black;
    display: inline-block;
  }
`;

const Select = styled.select`
    width:100%;
    display:block;
    padding:.5rem .8rem;
    border-radius:1rem;
    border:1px solid rgb(171, 65, 180);
    font-size:1rem;
    margin: .6rem 0rem;
    -webkit-appearance:none;


`;

const useMoneda = (label, stateInicial, monedas) => {
  //State del custom hook
  const [moneda, setMoneda] = useState(stateInicial);

  //esta es la parte que se ve
  const Interfaz = () => (
    <Fragment>
      <Label>{label}</Label>
      <Select
        onChange= {e => setMoneda(e.target.value)}
        value={moneda}
      
      >
        <option value="">Seleccione</option>
        {monedas.map(moneda =>(
        <option key={moneda.codigo} value={moneda.codigo}>{moneda.nombre}</option>
        ))};
      </Select>
    </Fragment>
  );

  return [moneda, Interfaz, setMoneda];
};

export default useMoneda;
