import React, { Fragment } from "react";
import { Card, Button } from "react-bootstrap";
import Gasto from "./Gasto";

const Gastos = ({ gastosSemanales, setMensajeAlert, setGastoEliminado, setShow, realizarResta}) => {
  let titulo = "";
  let cardGasto = "";
  if (gastosSemanales.length === 0) {
    titulo = "Aún no hay gastos";
  } else {
    titulo = "Tus gastos creados";
    cardGasto = "card gasto mb-3";
  }

  const setEliminar = (id) =>{
    realizarResta(true);
    setGastoEliminado(id);
    setMensajeAlert("El gasto se ha eliminado");
    setShow(true);

  }

  return (
    <Fragment>
      <h4>{titulo}</h4>
      <hr />
      <div className={cardGasto}>
        <Card.Body>
          {gastosSemanales.map(gasto => (
            <div key={gasto.id} className="mt-1">
              <div className="row">
                <Gasto gasto={gasto} />
                <div className="col-1">
                  <Button
                    variant="danger"
                    onClick={() => setEliminar(gasto.id)}
                  > X </Button>
                </div>
                <hr className="m-0" />
              </div>
            </div>
          ))}
        </Card.Body>
      </div>
    </Fragment>
  );
};

export default Gastos;
