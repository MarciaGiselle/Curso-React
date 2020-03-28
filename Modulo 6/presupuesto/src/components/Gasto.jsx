import React, { Fragment } from "react";

const Gasto = ({ gasto }) => (
    <div key={gasto.id} className="mt-1">
      <div className="row">
        <div className="col-7 pl-0">
          <p className='mt-2 mb-0'><b>{gasto.nombreGasto}</b></p>
          
        </div>
        <div className="col-1 monto">
            <p className='mb-0 text-right text-muted align-bootom'>$</p>
         </div>
        <div className="col-4 monto">
          <p className="mb-0 text-right bg-black align-bootom">   {gasto.monto}</p>
        </div>
        
      </div>
      <hr className='m-0'/>
    </div>
);

export default Gasto;
