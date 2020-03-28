import React, { useState, Fragment , useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Container, Card, Row, Col } from "react-bootstrap";
import Condicional from "./components/Condicional";
import Nav from "./components/Nav";
import Formulario from "./components/Formulario";
import ListadoDeGastos from "./components/ListadoDeGastos";
import ControlPresupuesto from "./components/ControlPresupuesto";
import Mensaje from "./components/Mensaje";



function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [gastosSemanales, setGastoSemanal] = useState([]);
  const [gasto, setNuevosGastos] = useState({});
  const [resta, realizarResta] = useState(false);
  const [mensaje, setMensajeAlert] = useState('');

  useEffect(() => {
    if(resta){
    setGastoSemanal([
      ...gastosSemanales,
      gasto
    ])

    setRestante(restante-gasto.monto);

  }
  }, [gasto])
  

  return (
    <Fragment>
      <Nav />
      <Container>
        <Card className="mt-4">
          <Card.Body>
            {presupuesto === 0 ? (
              <Condicional
                setPresupuesto={setPresupuesto}
                setRestante={setRestante}
                setMensajeAlert = {setMensajeAlert}
              />
            ) : (
              <Fragment>
                <Row className="justify-content-md-center">
                  <Col md='auto'>
                    {mensaje !== '' ? <Mensaje mensaje={mensaje} /> : null }
                  </Col>
                </Row>
                <Row>
                <Col lg={6}>
                  <Formulario 
                    setNuevosGastos = {setNuevosGastos}
                    realizarResta = {realizarResta}
                    restante = {restante}
                  />
                </Col>
                <Col lg={6}>
                  <ListadoDeGastos
                    gastosSemanales = {gastosSemanales}
                  />
                  <ControlPresupuesto
                    restante ={restante}
                    presupuesto={presupuesto}
                  />

                </Col>
              </Row>
              </Fragment>
            )}
          </Card.Body>
        </Card>
      </Container>
    </Fragment>
  );
}

export default App;
