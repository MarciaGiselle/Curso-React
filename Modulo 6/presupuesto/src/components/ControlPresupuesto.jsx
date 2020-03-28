import React from "react";
import { Alert} from "react-bootstrap";
import {establecerColorAlert} from '../Helpers';

const ControlPresupuesto = ({ restante, presupuesto }) => {
  return (
    <div className="container">
      <Alert variant={establecerColorAlert(presupuesto, restante)}>
          <div className='container'>
              <div className='row'>
                  <div className='col-7 px-0'>
                    <h5 className='mb-0'>Restante</h5>
                  </div>
                  <div className='text-right col-1 px-0'>
                   <h5 className='mb-0'>$</h5> 
                  </div>
                  <div className='text-right col-4 px-0'>
                    <h5 className='mb-0'><b>{restante}</b></h5>
                  </div>
              </div>

          </div>
      </Alert>
      <Alert variant="success">
      <div className='container'>
              <div className='row'>
                  <div className='col-7 px-0'>
                    <h5 className='mb-0'>Presupuesto total</h5>
                  </div>
                  <div className='text-right col-1 px-0'>
                   <h5 className='mb-0'>$</h5> 
                  </div>
                  <div className='col text-right col-4 px-0'>
                    <h5 className='mb-0'><b>{presupuesto}</b></h5>
                  </div>
              </div>

          </div>
      </Alert>
    </div>
  );
};

export default ControlPresupuesto;
