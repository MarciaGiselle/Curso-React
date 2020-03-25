import React, { Fragment, useState } from "react";
import { Form, Row, Button } from "react-bootstrap";
import uuid from "uuid/v4";

const Formulario = ({citas, setCitas}) => {
  const [cita, actualizarCita] = useState({
    mascota: "",
    padre: "",
    fecha: "",
    hora: "",
    sintoma: ""
  });

  const [error, setError] = useState(false);

  //Funcion que se ejecuta cada vez que el usuario escribe en el input
  //y actualiza los valores de los campos de cita
  const handleChangeState = e => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value
    });
  };

  //Extraigo cada uno de los valores de cita
  const { mascota, padre, fecha, hora, sintoma } = cita;

  //Funcion de Submit del formulario
  const submitForm = e => {
    e.preventDefault();

    //Validar Campos
    if (
      mascota.trim() === "" ||
      padre.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintoma.trim() === ""
    ) {
      setError(true);
      //return para frenar la ejecucion del codigo
      return;
    }
    setError(false);
    cita.id= uuid();

    //Crear cita, se la paso a app
    const crearCita = cita =>{
      //modifico el state por medio de una copia del array para que no se pisen
      setCitas([...citas, cita]);
    }

    //limpiar Formulario
    const limpiarFormulario = () =>{
      actualizarCita({
        mascota: "",
        padre: "",
        fecha: "",
        hora: "",
        sintoma: ""
      })
    }

    crearCita(cita);
    limpiarFormulario();

  };
  return (
    <Fragment>
      <h4 className="font-weight-bold">Crear nueva cita</h4>
      <hr />

      {error ? (
        <h5 className="text-danger">Todos los campos son obligatorios</h5>
      ) : null}
      <h5></h5>
      <Form onSubmit={submitForm}>
        <Form.Group>
          <Form.Label>Nombre del paciente</Form.Label>
          <Form.Control
            type="text"
            name="mascota"
            placeholder="Nombre del paciente"
            onChange={handleChangeState}
            value={mascota}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Nombre del Responsable</Form.Label>
          <Form.Control
            type="text"
            name="padre"
            placeholder="Nombre del responsable"
            onChange={handleChangeState}
            value={padre}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Fecha de cita</Form.Label>
          <Form.Control
            type="date"
            name="fecha"
            onChange={handleChangeState}
            value={fecha}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Hora</Form.Label>
          <Form.Control
            type="time"
            name="hora"
            onChange={handleChangeState}
            value={hora}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Síntomas/ Descripción</Form.Label>
          <Form.Control
            as="textarea"
            name="sintoma"
            rows="3"
            onChange={handleChangeState}
            value={sintoma}
          />
        </Form.Group>
        <Button variant="primary" type="submit" block>
          Agregar Cita
        </Button>
      </Form>
    </Fragment>
  );
};




export default Formulario;
