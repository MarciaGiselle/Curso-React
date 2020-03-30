import React, { useState, Fragment, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Card, Row, Col, Button } from "react-bootstrap";
import Condicional from "./components/Condicional";
import Nav from "./components/Nav";
import Formulario from "./components/Formulario";
import ListadoDeGastos from "./components/ListadoDeGastos";
import ControlPresupuesto from "./components/ControlPresupuesto";
import Mensaje from "./components/Mensaje";
import Footer from "./components/Footer";

function App() {
  let gastosIniciales = localStorage.getItem("gastos")
    ? JSON.parse(localStorage.getItem("gastos"))
    : [];
  let presupuestoInicial = localStorage.getItem("presupuesto")
    ? JSON.parse(localStorage.getItem("presupuesto"))
    : 0;
  let restanteInicial = localStorage.getItem("restante")
    ? JSON.parse(localStorage.getItem("restante"))
    : 0;

  const [presupuesto, setPresupuesto] = useState(presupuestoInicial);
  const [restante, setRestante] = useState(restanteInicial);
  const [gastosSemanales, setGastoSemanal] = useState(gastosIniciales);
  const [gasto, setNuevosGastos] = useState({});
  const [resta, realizarResta] = useState(false);
  //este state refiere al alert de mensajes, ya que tiene un dismiss que cambia la visibilidad del mismo
  const [show, setShow] = useState(false);
  const [mensaje, setMensajeAlert] = useState("");
  const [gastoEliminado, setGastoEliminado] = useState(0);

  useEffect(() => {
    localStorage.setItem("gastos", JSON.stringify(gastosSemanales));
  }, [gastosSemanales]);

  useEffect(() => {
    localStorage.setItem("presupuesto", JSON.stringify(presupuesto));
  }, [presupuesto]);

  useEffect(() => {
    localStorage.setItem("restante", JSON.stringify(restante));
  }, [restante]);

  useEffect(() => {
    if (resta) {
      setGastoSemanal([...gastosSemanales, gasto]);
      setRestante(restante - gasto.monto);
    }
  }, [gasto]);

  useEffect(() => {
    if (resta) {
      const gastosActivos = gastosSemanales.filter(
        gasto => gasto.id !== gastoEliminado
      );
      const eliminado = gastosSemanales.filter(
        gasto => gasto.id === gastoEliminado
      );
      setRestante(restante + eliminado[0].monto);
      setGastoSemanal(gastosActivos);
    }
  }, [gastoEliminado]);

  const eliminarPresupuesto = () => {
    setPresupuesto(0);
    setRestante(0);
    setGastoSemanal([]);
    setMensajeAlert("Se ha eliminado el presupuesto.");
    setShow(true);
  };

  return (
    <Fragment>
      <Nav />
      <div className="container margin-container">
        <div className="row h-100">
          <div className="col-12 align-self-center">
            {presupuesto === 0 ? (

              <Fragment>
                <Row className="justify-content-md-center">
                  <Col md="auto" className='p-0'>
                    <Mensaje mensaje={mensaje} show={show} setShow={setShow} />
                  </Col>
                </Row>
                <div className="card card-block w-50 mx-auto">
                  <Card.Body className="mx-0 p-2">
                    <Condicional
                      setPresupuesto={setPresupuesto}
                      setRestante={setRestante}
                      setMensajeAlert={setMensajeAlert}
                      setShow={setShow}
                    />
                  </Card.Body>
                </div>
              </Fragment>

            ) : (
              <Fragment>
                <Row className="justify-content-md-center ">
                  <Col md="auto" className='p-0'>
                    <Mensaje mensaje={mensaje} show={show} setShow={setShow} />
                  </Col>
                </Row>

                <div className="card card-block w-100 mx-auto">
                  <Card.Body className="mx-0 p-2">
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
                          setGastoEliminado={setGastoEliminado}
                          setMensajeAlert={setMensajeAlert}
                          setShow={setShow}
                          realizarResta={realizarResta}
                        />
                        <ControlPresupuesto
                          restante={restante}
                          presupuesto={presupuesto}
                        />
                      </Col>
                    </Row>
                  </Card.Body>
                </div>

                <Row className="justify-content-end">
                  <Col md="bottom">
                    <Button
                      variant="danger"
                      className="mt-2  mt-0"
                      onClick={() => eliminarPresupuesto()}
                    >
                      Eliminar presupuesto
                    </Button>
                  </Col>
                </Row>
              </Fragment>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
