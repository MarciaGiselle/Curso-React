import React from "react";
import { Alert} from "react-bootstrap";
import {establecerColorAlert} from '../Helpers';

const ControlPresupuesto = ({ restante, presupuesto }) => {
  return (
    <div className="container">
      <Alert variant={establecerColorAlert(presupuesto, restante)}>
          <div className='container'>
              <div className='row'>
                  <div className='col-lg-7'>
                    <h5 className='mb-0'>Restante:</h5>
                  </div>
                  <div className='text-right col-lg-1'>
                   <h5 className='mb-0'>$</h5> 
                  </div>
                  <div className='col text-right col-lg-4'>
                    <h5 className='mb-0'><b>{restante}</b></h5>
                  </div>
              </div>

          </div>
      </Alert>
      <Alert variant="success">
      <div className='container'>
              <div className='row'>
                  <div className='col-lg-7'>
                    <h5 className='mb-0'>Presupuesto total :</h5>
                  </div>
                  <div className='text-right col-lg-1'>
                   <h5 className='mb-0'>$</h5> 
                  </div>
                  <div className='col text-right col-lg-4'>
                    <h5 className='mb-0'><b>{presupuesto}</b></h5>
                  </div>
              </div>

          </div>
      </Alert>
    </div>
  );
};

export default ControlPresupuesto;
