import React, {  useState } from "react";
import { Form, Button } from "react-bootstrap";
import shortid from "shortid";
import Error from './Error';


const Formulario = ({ setNuevosGastos, realizarResta, restante}) => {

const [gasto, setGasto] = useState({
  nombreGasto: '',
  monto:0
});

const [error, setError] = useState(false);
const [mensaje, setMensaje] = useState('');

const handleChangeGasto = e =>{
  setGasto({
    ...gasto,
    [e.target.name] : e.target.value
  });
};

const {nombreGasto, monto} = gasto;

const submitForm = e => {
 e.preventDefault();

  if( nombreGasto.trim() === ''){
    setError(true);
    setMensaje('Debe ingresar un nombre');
    return;
  }

  if(isNaN(parseInt(monto, 10)) || monto <= 0 || monto.trim() === ''){
    setError(true);
    setMensaje('Debe ingresar una cantidad válida');
    return;
  }

  if(monto> restante){
    setError(true);
    setMensaje('El monto supera su dinero restante');
    return;
  }

  setError(false);
  const nuevoGasto = {
    nombreGasto,
    monto : parseInt(monto),
    id : shortid.generate()
  } 

  setNuevosGastos(nuevoGasto);
  setGasto({
    nombreGasto: '',
    monto:0
  })

  realizarResta(true);

}
  return (
      <Form  className='mb-5' onSubmit={submitForm}>
      <h4>Agrega tus gastos aquí</h4>
      <hr />
        <Form.Group>
          <Form.Label>Nombre del Gasto</Form.Label>
          <Form.Control
            type="text"
            name="nombreGasto"
            placeholder="Transporte, comida, libro, etcétera."
            onChange= {handleChangeGasto}
            value={nombreGasto}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Monto Gastado</Form.Label>
          <Form.Control
            type="text"
            name="monto"
            placeholder="200"
            onChange= {handleChangeGasto}
            value={monto}
          />
        </Form.Group>

        {error ? <Error mensaje={mensaje}/> : null}

        <Button variant="dark" type="submit" block>
          Agregar Gasto &#10004;
        </Button>
      </Form>
  );
};

export default Formulario;
