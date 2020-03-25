import React, { Fragment, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Navegador from "./components/Nav";
import Formulario from "./components/Formulario";
import Citas from "./components/Citas";

function App() {
  let citasIniciales = (localStorage.getItem('citas')) ? JSON.parse(localStorage.getItem('citas')) : [];
  //listado de citas
  const [citas, setCitas] = useState(citasIniciales);

  useEffect(() => {
    localStorage.setItem('citas',JSON.stringify(citas));
  }, [citas])

  return (
    <Fragment>
      <Navegador />
        <h4 className="text-center text-primary my-3">Administrador de pacientes</h4>
      <Container>
        <Row>
            <Col xs={12} md={4}>
              <Formulario
                citas = {citas}
                setCitas = {setCitas}
              />
            </Col>
            <Col xs={12} md={8}>
              <Citas
                citas = {citas}
                setCitas = {setCitas}
              />
            </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;
