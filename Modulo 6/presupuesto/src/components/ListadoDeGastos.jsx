import React, { Fragment } from "react";
import { Container, Card } from "react-bootstrap";
import Gasto from "./Gasto";

const Gastos = ({ gastosSemanales }) => {
  let titulo = "";
  let cardGasto = "";
  if (gastosSemanales.length === 0) {
    titulo = "Aún no hay gastos";
  } else {
    titulo = "Tus gastos creados";
    cardGasto = "card gasto mb-3";
  }
  return (
    <Fragment>
      <h4>{titulo}</h4>
      <hr />
      <div className={cardGasto}>
        <Card.Body>
          {gastosSemanales.map(gasto => (
            <Gasto key={gasto.id} gasto={gasto} />
          ))}
        </Card.Body>
      </div>
    </Fragment>
  );
};

export default Gastos;
