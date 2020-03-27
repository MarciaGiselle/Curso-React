import React from "react";
import { Alert} from "react-bootstrap";
import {establecerColorAlert} from '../Helpers';

const ControlPresupuesto = ({ restante, presupuesto }) => {
  return (
    <div className="container">
      <Alert variant={establecerColorAlert(presupuesto, restante)}>
        <h5 className='mb-0'>Restante: $   {restante}</h5>
      </Alert>
      <Alert variant="primary">
        <p className='mb-0'>Presupuesto total: $   {presupuesto}</p>
      </Alert>
    </div>
  );
};

export default ControlPresupuesto;
