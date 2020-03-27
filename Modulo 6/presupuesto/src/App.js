import React, { useState, Fragment , useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Container, Card, Row, Col } from "react-bootstrap";
import Condicional from "./components/Condicional";
import Nav from "./components/Nav";
import Formulario from "./components/Formulario";
import ListadoDeGastos from "./components/ListadoDeGastos";
import ControlPresupuesto from "./components/ControlPresupuesto";


function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [gastosSemanales, setGastoSemanal] = useState([]);
  const [gasto, setNuevosGastos] = useState({});
  const [resta, realizarResta] = useState(false);

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
        <Card>
          <Card.Body>
            {presupuesto === 0 ? (
              <Condicional
                setPresupuesto={setPresupuesto}
                setRestante={setRestante}
              />
            ) : (
              <Row>
                <Col>
                  <Formulario 
                    setNuevosGastos = {setNuevosGastos}
                    realizarResta = {realizarResta}
                    restante = {restante}
                  />
                </Col>
                <Col>
                  <ListadoDeGastos
                    gastosSemanales = {gastosSemanales}
                  />
                  <ControlPresupuesto
                    restante ={restante}
                    presupuesto={presupuesto}
                  />

                </Col>
              </Row>
            )}
          </Card.Body>
        </Card>
      </Container>
    </Fragment>
  );
}

export default App;
