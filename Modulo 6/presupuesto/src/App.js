import React, { useState, Fragment, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Card, Row, Col } from "react-bootstrap";
import Condicional from "./components/Condicional";
import Nav from "./components/Nav";
import Formulario from "./components/Formulario";
import ListadoDeGastos from "./components/ListadoDeGastos";
import ControlPresupuesto from "./components/ControlPresupuesto";
import Mensaje from "./components/Mensaje";
import Footer from "./components/Footer";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [gastosSemanales, setGastoSemanal] = useState([]);
  const [gasto, setNuevosGastos] = useState({});
  const [resta, realizarResta] = useState(false);
  const [mensaje, setMensajeAlert] = useState("");
  const [gastoEliminado, setGastoEliminado] = useState(0);

  useEffect(() => {
    if (resta) {
      setGastoSemanal([...gastosSemanales, gasto]);
      setRestante(restante - gasto.monto);
    
    }
  }, [gasto]);

  useEffect(()=>{
    if (resta) {
      const gastosActivos = gastosSemanales.filter(gasto => gasto.id !== gastoEliminado);
      const eliminado = gastosSemanales.filter(gasto => gasto.id === gastoEliminado);
      setRestante( restante + eliminado[0].monto);
      setGastoSemanal(gastosActivos);
    }
  }, [gastoEliminado])

  return (
    <Fragment>
      <Nav />
      <div className="container margin-container">
        <div className="row h-100">
          <div className="col-sm-12 align-self-center">
            <div className="card card-block w-100 mx-auto">
              <Card.Body className="mx-0 px-1">
                {presupuesto === 0 ? (
                  <Condicional
                    setPresupuesto={setPresupuesto}
                    setRestante={setRestante}
                    setMensajeAlert={setMensajeAlert}
                  />
                ) : (
                  <Fragment>
                    <Row className="justify-content-md-center">
                      <Col md="auto">
                        {mensaje !== "" ? <Mensaje mensaje={mensaje} /> : null}
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={4}>
                        <Formulario
                          setNuevosGastos={setNuevosGastos}
                          realizarResta={realizarResta}
                          restante={restante}
                        />
                      </Col>
                      <Col lg={8}>
                        <ListadoDeGastos
                          gastosSemanales={gastosSemanales}
                          setGastoSemanal={setGastoSemanal}
                          setGastoEliminado={setGastoEliminado}/>
                        <ControlPresupuesto
                          restante={restante}
                          presupuesto={presupuesto}
                        />
                      </Col>
                    </Row>
                  </Fragment>
                )}
              </Card.Body>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
