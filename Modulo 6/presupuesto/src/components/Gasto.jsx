import React, { Fragment } from "react";
import { Card, CardDeck, Button } from "react-bootstrap";

const Gasto = ({ gasto }) => (
    <div key={gasto.id} className="mt-1">
      <div className="row">
        <div className="col-lg-7 pl-0">
          <b>{gasto.nombreGasto}</b>
          
        </div>
        <div className="col-lg-1 monto">
            <span className='text-right'>$</span>
         </div>
        <div className="col-lg-4 monto">
          <p className="mb-2 text-muted text-right bg-black ">   {gasto.monto}</p>
        </div>
        
      </div>
      <hr className='m-0'/>
    </div>
);

export default Gasto;
