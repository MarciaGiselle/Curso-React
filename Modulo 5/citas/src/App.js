import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Navegador from "./components/Nav";
import Formulario from "./components/Formulario";


function App() {
  return (
    <Fragment>
      <Navegador />
        <h4 className="text-center text-primary my-3">Administrador de pacientes</h4>
      <Container>
        <Row>
            <Col xs={12} md={6}><Formulario/>

            </Col>
            <Col xs={12} md={6}>2</Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;
