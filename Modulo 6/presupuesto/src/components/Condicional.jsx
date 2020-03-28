import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Error from "./Error";

const Condicional = ({ setRestante, setPresupuesto, setMensajeAlert }) => {
  const [cantidad, setCantidad] = useState(0);

  const [error, setError] = useState(false);

  const [mensaje, setMensaje] = useState("");
  //definir presupuesto

  const definirPresupuesto = e => {
    setCantidad(parseInt(e.target.value, 10));
  };

  const submitForm = e => {
    e.preventDefault();

    //validar la cantidad
    if (cantidad <= 0) {
      setError(true);
      setMensaje("La cantidad debe ser mayor que 0");
      return;
    }

    if (isNaN(cantidad)) {
      setError(true);
      setMensaje("No ha ingresado una cantidad válida");
      return;
    }

    setError(false);
    setPresupuesto(cantidad);
    setRestante(cantidad);
    setMensajeAlert(
      " Presupuesto Creado! Ahora puedes cargar tus gastos aquí."
    );
  };

  return (
    <Container className='justify-content-center' >
      <Row className='mx-0 px-0'>
        <Col md="auto" className='mx-auto px-0'>
          <Form onSubmit={submitForm}>
            <Form.Group>
              <Form.Label>Ingresa tu presupuesto inicial</Form.Label>
              <Form.Control
                type="number"
                name="presupuesto"
                onChange={definirPresupuesto}
              />
              <small className="text-muted">Números mayores a 0</small>
              <br />
              <br />
              {error ? <Error mensaje={mensaje} /> : null}
              <Button variant="dark" block type="submit">
                Definir presupuesto
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Condicional;
