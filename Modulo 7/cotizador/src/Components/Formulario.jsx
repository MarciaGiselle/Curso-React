import React, { useState } from "react";
import styled from "@emotion/styled";
import PropTypes from 'prop-types';
import {obtenerDiferenciaYears, calcularIncrementoPorMarca, calcularIncrementoPorPlan} from '../Helper';

const Campos = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;
const Label = styled.label`
  flex: 0 0 100px;
`;
const Select = styled.select`
  display: block;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid turquoise;
  -webkit-appearance: none;
`;
const Radio = styled.input`
  margin: 0 1rem 0 0;
  padding: 2rem;
`;
const Boton = styled.button`
  background-color: turquoise;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  letter-spacing: 5px;
  margin-top: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    cursor: pointer;
    background-color: #2aa397;
  }
`;
const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
  border: 1px solid #6e0000;
`;

const Formulario = ({setResumen, setSpinner}) => {
  const [seguro, guardarSeguro] = useState({
    marca: "",
    year: "",
    plan: ""
  });

  const [error, setError] = useState(false);

  //extraer valores
  const { marca, year, plan } = seguro;

  //leyendo los datos
  const obtenerInformacion = e => {
    guardarSeguro({
      ...seguro,
      [e.target.name]: e.target.value
    });
  };

  //submit
  const cotizarSeguro = e => {
    e.preventDefault();
    if (marca.trim() === "" || year.trim() === "" || plan.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    //obtener la diferencia de años
    let base = 2000;
    let diferenciaYear = obtenerDiferenciaYears(year);

    // por cada año hay q restar el 3%
    base-= base*(diferenciaYear*0.03);

    //1 Americano 15% //2 asiatico 5% //3 europeo 30%
   base = calcularIncrementoPorMarca( base, marca )

    //basico aumenta 20% //completo 50%
    let resultadoCotizacion = parseFloat(calcularIncrementoPorPlan( base, plan )).toFixed(2);

    //visibilidad del spinner en pantalla
    setSpinner(true);

    setTimeout(()=>{
      setSpinner(false); 

      //total
      setResumen({
          cotizacion : Number(resultadoCotizacion),
          seguro
      })
      
    },3000);

};

  return (
    <form onSubmit={cotizarSeguro}>

        {error ? <Error>Complete todos los campos</Error>: null}
      <Campos>
        <Label>Marca</Label>
        <Select name="marca" value={marca} onChange={obtenerInformacion}>
          <option value="">Seleccione...</option>
          <option value="1">Americano</option>
          <option value="2">Asiatico</option>
          <option value="3">Europeo</option>
        </Select>
      </Campos>

      <Campos>
        <Label>Año</Label>
        <Select name="year" value={year} onChange={obtenerInformacion}>
          <option value="">Seleccione...</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Campos>

      <Campos>
        <Label>Plan</Label>
        <Radio
          type="radio"
          name="plan"
          value="basico"
          checked={plan === "basico"}
          onChange={obtenerInformacion}
        />
        <small className="mr-4">Básico</small>

        <Radio
          type="radio"
          name="plan"
          value="completo"
          checked={plan === "completo"}
          onChange={obtenerInformacion}
        />
        <small className="mr-4"> Completo </small>
      </Campos>

      <Boton type="submit">Cotizar</Boton>
    </form>
  );
};

Formulario.propTypes = {
  setResumen : PropTypes.func.isRequired,
  setSpinner :  PropTypes.func.isRequired
}

export default Formulario;
