import React, { Fragment, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Navegador from "./components/Nav";
import Formulario from "./components/Formulario";
import Citas from "./components/Citas";
import Footer from "./components/Footer";

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
      <Container className='mt-4 mb-5'>
        <Row>
            <Col xs={12} md={7} lg={4} >
              <Formulario
                citas = {citas}
                setCitas = {setCitas}
              />
            </Col>
            <Col xs={12} md={5} lg={8}>
              <Citas
                citas = {citas}
                setCitas = {setCitas}
              />
            </Col>
        </Row>
      </Container>
      <Footer/>
    </Fragment>
  );
}

export default App;
