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
    width: 50%;
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

const useCriptomoneda = (label, stateInicial, criptomonedas) => {
  //State del custom hook
  const [criptomoneda, setCriptomoneda] = useState(stateInicial);

  //esta es la parte que se ve
  const Interfaz = () => (
    <Fragment>
      <Label>{label}</Label>
      <Select
          onChange= {e => setCriptomoneda(e.target.value)}
          value={criptomoneda}
      >
         <option value="">Seleccione</option>
          {criptomonedas.map(cripto=>(
              <option key={cripto.CoinInfo.Id} value={cripto.CoinInfo.Name}>{cripto.CoinInfo.FullName}</option>
          ))};
       
      </Select>
    </Fragment>
  );

  return [criptomoneda, Interfaz];
};

export default useCriptomoneda;
